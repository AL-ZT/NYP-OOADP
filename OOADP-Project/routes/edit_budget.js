var express = require('express');
var edit_budget = express.Router();
var budget=require('../models/budget');
var moment = require('moment');
var auth = require('../controllers/auth');

edit_budget.get('/delete/:id', function (req, res) {
    budget.destroy({
        where: {
            budgetID: req.params.id
        }
    })
    res.redirect("/");
});

edit_budget.get('/modify/:id', function (req, res) {
    budget.find({
        where: {
            budgetID: req.params.id
        }
    }).then(budget => {
        res.render('edit_budget', { budget:budget});
    })
});

edit_budget.post('/modify/:id', function (req, res) {
    var data = req.body;
    var budgetID=req.params.id;
    console.log(req.budgetAmt);   
        budget.update(
            {
                budgetID:req.user.id,
                budgetAmt:data.budget
            },
            {where:{budgetID:budgetID}}
        );
    
    res.redirect('/');
})

edit_budget.get('/', auth.isLoggedIn ,function (req, res) {
    console.log(req.user.id)
    budget.findAll({
        where:{budgetID:req.user.id}
    }).then(budget => {
        console.log(budget.budgetAmt+'================'+req.user.id)
        res.render('budgets', { budget:budget });
    })
});




module.exports = edit_budget; 
