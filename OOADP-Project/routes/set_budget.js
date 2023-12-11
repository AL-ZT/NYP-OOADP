
var express=require("express");
var set_budget=express.Router();
var auth = require('../controllers/auth');
var budget=require("../models/budget");

set_budget.get("/",auth.isLoggedIn,(req,res)=>{
    res.render('set_budget',{
        user:req.user
    });
});

    set_budget.post('/',(req,res)=>{
        var data=req.body;
        console.log(data+'===================')        
        
        budget.upsert({
            budgetID:req.user.id,
            budgetAmt:data.budget
            
        });
        
        res.status(200);
        res.redirect('/');
    })

    module.exports = set_budget;