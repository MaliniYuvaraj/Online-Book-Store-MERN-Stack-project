var express=require('express')
var app=express()
var routing=require('./Routing')
app.use('/',routing)

var bodyparse=require('body-parser')
var encoder=bodyparse.urlencoded({extended:true})

var {MongoClient}=require('mongodb')
var url="mongodb://0.0.0.0:27017"
var database="LoginDetails"
var Client=new MongoClient(url);

app.get('/signup',function(req,res){
    res.sendFile(__dirname+"/signup.html")
})
app.get('/login',function(req,res){
    res.sendFile(__dirname+"/login.html")
})

const postData=async(username,email,password,confirmpassword)=>{
    var result=await Client.connect()
    var dbs=result.db(database);
    var Collections=dbs.collection("UserDetails")

    Collections.insertOne({
        Username:username,
        Email:email,
        Password:password,
        ConfirmPassword:confirmpassword


    }).then(result=>{
        console.log("Result",result)
    }).catch(err=>{
        console.error("Error",error)
    })
}


app.post('/validate',encoder,function(req,res){
    var username=req.body.username;
    var email=req.body.email;
    var password=req.body.password;
    var confirmpassword=req.body.confirmpassword;

    postData(username,email,password,confirmpassword)
    res.send(username+" "+email+" "+password+" "+confirmpassword);
})


const getData=async()=>{
    let result=await Client.connect()
    let db=result.db(database)
    let collections=db.collection("UserDetails")
    let response=await collections.find({}).toArray()
    return response;
}

app.get('/getData',function(req,res){
    const myPromise=new Promise((resolve,reject)=>{
        resolve(getData())
    })
myPromise.then((getData)=>{
   
    res.send(getData)
}).catch((error)=>{
    res.status(500).send("error")
})
})

app.post('/validate',function(req,res){
    res.cookie('username','101',{expires:new Date
        (new Date().getTime()+30000)}).send('cookie set');
})

app.listen(8080)