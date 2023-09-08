var express=require('express')
var router=express.Router()

router.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html")
    
})

router.get('/newarrivals',function(req,res){
    res.sendFile(__dirname+"/newarrivals.html")
})
router.get('/boxsets',function(req,res){
    res.sendFile(__dirname+"/boxsets.html")
})
router.get('/bestsellers',function(req,res){
    res.sendFile(__dirname+"/bestsellers.html")
})
router.get('/fictionbooks',function(req,res){
    res.sendFile(__dirname+"/fictionbooks.html")
})
router.get('/awardwinners',function(req,res){
    res.sendFile(__dirname+"/awardwinners.html")
})
router.get('/signup',function(req,res){
    res.sendFile(__dirname+"/signup.html")
})
router.get('/login',function(req,res){
    res.sendFile(__dirname+"/login.html")
})
module.exports=router;