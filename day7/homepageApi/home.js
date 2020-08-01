const express = require('express');
const app = express();
const port = 8900;


app.get('/',(req,res)=>{
    res.status(200).send("This is homepage")
});
app.get('/about',(req,res)=>{
    res.send('this is about page')
})

app.listen(port,(err)=>{
    if(err) throw err;
    console.log('server is running on port ${port}')
})