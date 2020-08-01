const express = require('express');
const app = express();
const port = 9900;
const bodyParser = require('body-parser');
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const mongourl = "mongodb://localhost:27017";
let db;
let col_name="movies";
 

app.get('/',(req,res)=>{
    res.status(200).send("Api is running")
});
//get
app.get('/movies',(req,res)=>{
    db.collection(col_name).find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    });
});


    MongoClient.connect(mongourl,(err,client)=>{
        if(err) console.log(err);
        db=client.db('edurekaintership')
        app.listen(port,(err)=>{
            if(err) throw err;
            console.log(`Server is running on port ${port}`)
    });

})