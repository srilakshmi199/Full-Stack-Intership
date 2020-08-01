var fs = require('fs');

/*fs.writeFile('Myflie.txt','edureka',function(err){
    if(err) throw err;
    console.log('file is created');
})


fs.appendFile('Myflie.txt','edureka \n',function(err){
    if(err) throw err;
    console.log('file created');
})


fs.readFile('Myflie.txt','utf-8',(err,data)=>{
    if(err) throw err;
    console.log(data);
})


fs.rename('Myflie.txt','Mytest.txt',(err)=>{
    if(err) throw err;
    console.log('file renamed');
})*/

fs.unlink('Mytest.txt',(err)=>{
    if(err) throw err;
    console.log('file deleted');
})