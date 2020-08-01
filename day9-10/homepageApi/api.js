const express = require('express');
const app = express();
const port = 8800;
const bodyParser = require('body-parser');
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const mongourl = "mongodb://localhost:27017";
var cors = require('cors')
let db;
let col_name="films";

app.get('/',(req,res) => {
    res.status(200).send("Api is Running")
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use(cors());


var token = "8586ruvbn4yv78"
//Get 
app.get('/films',(req,res) => {
    db.collection(col_name).find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    });
});

//Post
app.post('/addFilms',(req,res)=>{
    console.log(req.body);
    db.collection(col_name).insert(req.body,(err,result) => {
        if(err){
            throw err
        }else{
            res.send('Data Added')
        }
    });
});

//Update Put
app.put('/updateFilms',(req,res) => {
    db.collection(col_name).update(
        {_id:req.body._id},
        {
            $set:{
                name:req.body.name,
                language: req.body.language,
                rate: req.body.rate,
                type: req.body.type,
                imageUrl:req.body.imageUrl
            }
        },(err,result) => {
            if(err){
                throw err
            }else{
                res.send('Data Updated')
            }
        }
    )
});


//Delete
app.delete('/deleteFilms',(req,res) => {
    db.collection(col_name).remove({_id:req.body._id},(err,result) => {
        if(err){
            throw err
        }else{
            res.send('Data Deleted')
        }
    })
})

MongoClient.connect(mongourl,(err,client) => {
    if(err) console.log(err);
    db = client.db('practice')
    app.listen(port,(err) => {
        if(err) throw err;
        console.log(`Server is running on port ${port}`)
    });
})