const express = require('express');
const app = express();
const port = 8700;
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const mongoUrl = "mongodb://localhost:27017";
var cors = require('cors');
let db;
app.use(cors());

//restuarent
app.get('/restaurant',(req,res) => {
    var city = req.query.city
    var query = {city:req.query.city}
    db.collection('restaurant').find(query).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})


//restuarent
app.get('/restaurantdetail/:id',(req,res) => {
    console.log(req.params.id)
    var query = {_id:req.params.id}
    db.collection('restaurant').find(query).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

//citylist
app.get('/location',(req,res)=>{
    db.collection('city').find({}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

//cuisine
app.get('/cuisine',(req,res)=>{
    db.collection('cuisine').find({}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
//mealtype
app.get('/mealtype',(req,res)=>{
    db.collection('mealtype').find({}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})



MongoClient.connect(mongoUrl,(err,client)=>{
    if(err) console.log(err)
    db=client.db('practice');
    app.listen(port,(err)=>{
        if(err) throw err 
        console.log(`Server is running on port ${port}`)
   });
}) 