var express = require('express');
var checkout = express.Router();
var listingTable = require('../models/listingTable');
var paypal = require('paypal-rest-sdk');
var sequelize = require('sequelize');
var transactions = require("../models/transactions");
var member = require('../models/memberModel');
var Recaptcha = require('express-recaptcha').Recaptcha;
var recaptcha = new Recaptcha('6Len4mYUAAAAAARJTMDggs7lfJ0c4ZeyTIjmPn5l', '6Len4mYUAAAAAHtwUXTqcY7zNbEMeR6SnYZ7acLN');
var braintree = require('braintree');
const Op = sequelize.Op;
var nodemailer = require('nodemailer');
const Email = require('email-templates');
var notification = require('../models/notificationModel');
var budgetModel = require('../models/budget');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'pchubsg.official@gmail.com',
        pass: 'pingpong9696'
    }
});
const email = new Email({
    views: {
        options: {
            extension: 'ejs'
        }
    }
});
var receipt = 1;

//paypal
paypal.configure({
    'mode': 'sandbox',
    'client_id': 'AURyk5inxvfwDutVlY4D-3Hz9TyxZ8NYSOd9x7upOrJgwQSM3yAgRdmYkk2xgXi5acWTLZZSAF5PxIwP',
    'client_secret': 'EPyIWbhnydZzNGfCd5LinDuQw6VjgaB9O6Z_OUH4O9QrognurP6CqOF7v7FkXX0llKbkNe2fCuwUnHzf'
})

//credit cards
var gateway = braintree.connect({
    environment: braintree.Environment.Sandbox,
    merchantId: 'f53v7tpxvm5c54h2',
    publicKey: 'bqz8vpvndbqwfxsv',
    privateKey: 'b46e0adac41ab680d8c3cab5afc98b44'
});

checkout.get('/', recaptcha.middleware.render, function (req, res) {
    budgetModel.find({
        where : {
            budgetID : req.user.id
        }
    }).then(budget_ => {
        res.render('checkout', { captcha: res.recaptcha , budget: budget_});
    })
    
});

checkout.get('/payment_paypal', function (req, res) {
    listingTable.findAll({
        where: {
            ListingID: {
                [Op.or]: req.session.sc
            }
        }
    }).then(listings => {
        var items = [];
        var total_amount = 0;
        listings.forEach(function (listing) {
            var quantity = 0;
            for (var i = 0; i < req.session.scq.length; i++) {
                if (listing.ListingID == req.session.scq[i][0]) {
                    quantity = req.session.scq[i][1];
                }
            }
            var item = {
                "name": listing.itemDescription,
                "sku": listing.ListingID,
                "price": listing.itemPrice,
                "currency": "SGD",
                "quantity": quantity
            }
            items.push(item);
            total_amount += item.price * item.quantity;
        })
        req.session.total = total_amount;
        console.log(items);
        console.log(total_amount);
        var create_payment_json = {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "redirect_urls": {
                "return_url": "http://localhost:3000/checkout/success",
                "cancel_url": "http://localhost:3000/checkout"
            },
            "transactions": [{
                "item_list": {
                    "items": items
                },
                "amount": {
                    "currency": "SGD",
                    "total": total_amount
                },
                "description": "PCHub"
            }]
        }

        paypal.payment.create(create_payment_json, function (error, payment) {
            if (error) {
                console.log(error);
                throw error;
            } else {
                for (let i = 0; i < payment.links.length; i++) {
                    if (payment.links[i].rel === 'approval_url') {
                        res.redirect(payment.links[i].href);
                    }
                }
            }
        });
    })
});

checkout.get('/success', function (req, res) {
    const payerId = req.query.PayerID;
    const paymentId = req.query.paymentId;

    const execute_payment_json = {
        "payer_id": payerId,
        "transactions": [{
            "amount": {
                "currency": "SGD",
                "total": req.session.total
            }
        }]
    };

    paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
        if (error) {
            console.log(error.response);
            throw error;
        } else {
            listingTable.findAll({
                where: {
                    ListingID: {
                        [Op.or]: req.session.sc
                    }
                }
            }).then(listing => {
                var list = [];
                listing.forEach(function (item) {
                    for (var i = 0; i < req.session.scq.length; i++) {
                        if (item.ListingID == req.session.scq[i][0]) {
                            list.push({ description: item.itemDescription, quantity: req.session.scq[i][1], price: req.session.scq[i][1] * item.itemPrice });
                            transactions.upsert({
                                transactionID: payment.id,
                                intent: payment.intent,
                                state: payment.transactions[0].related_resources[0].sale.state,
                                cart: payment.cart,
                                payer_payment_method: 'PayPal',
                                payer_email: payment.payer.payer_info.email,
                                payer_firstname: payment.payer.payer_info.first_name,
                                payer_lastname: payment.payer.payer_info.last_name,
                                payer_id: req.user.id,
                                shipping_address: JSON.stringify(payment.transactions[0].item_list.shipping_address),
                                recipient_city: payment.transactions[0].item_list.shipping_address.city,
                                recipient_state: payment.transactions[0].item_list.shipping_address.state,
                                recipient_postalcode: payment.transactions[0].item_list.shipping_address.postal_code,
                                recipient_countrycode: payment.transactions[0].item_list.shipping_address.country_code,
                                transaction_total: req.session.scq[i][1] * item.itemPrice,
                                transaction_total_currency: payment.transactions[0].amount.currency,
                                transaction_items: item.itemDescription,
                                transaction_items_quantity: req.session.scq[i][1],
                                createdAt: payment.transactions[0].related_resources[0].sale.update_time,
                                receipt_id: receipt,
                                seller_id: item.itemOPID
                            });
                            member.findAll({
                                where: {
                                    id: item.itemOPID
                                }
                            }).then(seller => {
                                if (item.itemDescription == "Hardware Checks/Assembly" || item.itemDescription == "Warranty Service") {
                                    notification.upsert({
                                        userfrom: req.user.username,
                                        userto: "PCHubSG",
                                        type: "sold",
                                        item: item.itemDescription
                                    })
                                } else {
                                    notification.upsert({
                                        userfrom: req.user.username,
                                        userto: seller[0].username,
                                        type: "sold",
                                        item: item.itemDescription
                                    })
                                }
                            });
                            var quantity = item.itemQuantity - req.session.scq[i][1]
                            var sales = req.session.scq[i][1] * item.itemPrice;
                            if (item.itemDescription == "Hardware Checks/Assembly" || item.itemDescription == "Warranty Service") { }
                            else {
                                if (quantity == 0) {
                                    listingTable.destroy({
                                        where: {
                                            ListingID: item.ListingID
                                        }
                                    });
                                    member.findAll({
                                        where: {
                                            id: item.itemOPID
                                        }
                                    }).then(result => {
                                        member.update({
                                            balance: result[0].balance + sales
                                        }, { where: { id: item.itemOPID } });
                                    })
                                }
                                else {
                                    listingTable.update({
                                        itemQuantity: quantity
                                    }, { where: { ListingID: item.ListingID } });
                                    member.findAll({
                                        where: {
                                            id: item.itemOPID
                                        }
                                    }).then(result => {
                                        member.update({
                                            balance: result[0].balance + sales
                                        }, { where: { id: item.itemOPID } });
                                    })
                                }
                            }
                        }
                    }
                });
                email.render('index', {
                    user: req.user.name,
                    receiptno: receipt,
                    transactionID: payment.id,
                    datepurchased: payment.transactions[0].related_resources[0].sale.update_time,
                    paymentMethod: 'PayPal',
                    items: list,
                    grandtotal: payment.transactions[0].amount.total
                }).then(function (email) {
                    var mailOptions = {
                        from: 'pchubsg.official@gmail.com',
                        to: req.user.email,
                        subject: 'Receipt',
                        html: email
                    }
                    transporter.sendMail(mailOptions, function (error, info) {
                        if (error) {
                            console.log(error);
                        } else {
                            console.log("Email send : " + info.response);
                        }
                    })
                });
                receipt += 1;
                req.session.sc = [];
                req.session.scq = [];
                res.send('<script>alert("Transaction has been completed successfully"); window.location.replace("/");</script>')
            });
        }
    });
});

checkout.get("/payment_creditcard", function (req, res) {
    gateway.clientToken.generate({}, function (err, response) {
        res.render('checkout_creditcard', { token: response.clientToken });
    });
});

checkout.post("/client_checkout", function (req, res) {
    var nonceFromTheClient = req.body.nonce;
    var total_price = 0;
    listingTable.findAll({
        where: {
            ListingID: {
                [Op.or]: req.session.sc
            }
        }
    }).then(listing => {
        listing.forEach(function (item) {
            for (var i = 0; i < req.session.scq.length; i++) {
                if (item.ListingID == req.session.scq[i][0]) {
                    total_price += item.itemPrice * req.session.scq[i][1];
                }
            }
        })
        gateway.transaction.sale({
            amount: total_price,
            paymentMethodNonce: nonceFromTheClient,
            options: {
                submitForSettlement: true
            }
        }, function (err, result) {
            if (result.success || result.transaction) {
                listingTable.findAll({
                    where: {
                        ListingID: {
                            [Op.or]: req.session.sc
                        }
                    }
                }).then(listing => {
                    var list = [];
                    listing.forEach(function (item) {
                        for (var i = 0; i < req.session.scq.length; i++) {
                            if (item.ListingID == req.session.scq[i][0]) {
                                list.push({ description: item.itemDescription, quantity: req.session.scq[i][1], price: req.session.scq[i][1] * item.itemPrice });
                                transactions.upsert({
                                    transactionID: result.transaction.id,
                                    payer_payment_method: result.transaction.creditCard.cardType,
                                    transaction_total: req.session.scq[i][1] * item.itemPrice,
                                    transaction_total_currency: result.transaction.currencyIsoCode,
                                    transaction_items: item.itemDescription,
                                    transaction_items_quantity: req.session.scq[i][1],
                                    createdAt: result.transaction.createdAt,
                                    shipping_address: req.body.shipping_address,
                                    payer_firstname: req.body.fname,
                                    payer_lastname: req.body.lname,
                                    payer_id: req.user.id,
                                    seller_id: item.itemOPID,
                                    receipt_id: receipt,
                                    recipient_city: req.body.city,
                                    recipient_state: req.body.state,
                                    recipient_postalcode: req.body.postalcode,
                                    state: "completed"
                                });
                                member.findAll({
                                    where: {
                                        id: item.itemOPID
                                    }
                                }).then(seller => {
                                    if (item.itemDescription == "Hardware Checks/Assembly" || item.itemDescription == "Warranty Service") {
                                        notification.upsert({
                                            userfrom: req.user.username,
                                            userto: "PCHubSG",
                                            type: "sold",
                                            item: item.itemDescription
                                        })
                                    } else {
                                        notification.upsert({
                                            userfrom: req.user.username,
                                            userto: seller[0].username,
                                            type: "sold",
                                            item: item.itemDescription
                                        })
                                    }
                                });
                                var quantity = item.itemQuantity - req.session.scq[i][1];
                                var sales = item.itemPrice * req.session.scq[i][1];
                                if (item.itemDescription == "Hardware Checks/Assembly" || item.itemDescription == "Warranty Service") { }
                                else {
                                    if (quantity == 0) {
                                        listingTable.destroy({
                                            where: {
                                                ListingID: item.ListingID
                                            }
                                        });
                                        member.findAll({
                                            where: {
                                                id: item.itemOPID
                                            }
                                        }).then(result => {
                                            member.update({
                                                balance: result[0].balance + sales
                                            }, { where: { id: item.itemOPID } });
                                        })
                                    }
                                    else {
                                        listingTable.update({
                                            itemQuantity: quantity
                                        }, { where: { ListingID: item.ListingID } });
                                        member.findAll({
                                            where: {
                                                id: item.itemOPID
                                            }
                                        }).then(result => {
                                            member.update({
                                                balance: result[0].balance + sales
                                            }, { where: { id: item.itemOPID } });
                                        })
                                    }
                                }
                            }
                        }

                    });
                    email.render('index', {
                        user: req.user.name,
                        receiptno: receipt,
                        transactionID: result.transaction.id,
                        datepurchased: result.transaction.createdAt,
                        paymentMethod: result.transaction.creditCard.cardType,
                        items: list,
                        grandtotal: total_price
                    }).then(function (email) {
                        var mailOptions = {
                            from: 'pchubsg.official@gmail.com',
                            to: req.user.email,
                            subject: 'Receipt',
                            html: email
                        }
                        transporter.sendMail(mailOptions, function (error, info) {
                            if (error) {
                                console.log(error);
                            } else {
                                console.log("Email send : " + info.response);
                            }
                        })
                    });
                    receipt += 1;
                    req.session.sc = [];
                    req.session.scq = [];
                    res.send('<script>alert("Transaction has been completed successfully"); window.location.replace("/");</script>');
                });
            }
        })
    });
});

module.exports = checkout;