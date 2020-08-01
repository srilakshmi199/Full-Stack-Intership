if(condition){
    //do something
}else{
    //do something
}

var a = 10
if(a%2==0){
    console.log("Number is even")
}else{
    console.log("Number is odd")
}
VM309:3 Number is even
undefined


var a = 11
if(a%2==0){
    console.log("Number is even")
}else{
    console.log("Number is odd")
}
VM314:5 Number is odd
undefined

var a =15
if(a%2==0){
    console.log("Number is even")
}else if(a%3===0){
    console.log("Number is divisible by 3")
}else{
    console.log("Number is odd")
}


var a = 0
if(a){
    console.log("first")
}else{
    console.log("second")
}

truthy > expect 0 ,,,,,,,,, 1,2,3,-1,-2, true , 'dfvf'
flasy > 0,false,null,undefined


var a = null
undefined
typeof(a)
"object"
var b = undefined
undefined
typeof(b)
"undefined"

null we can assign to a varible
undefined is return type

var a;
var b = 10
if(a){
    console.log(a+b)
}else{
    console.log(a-b)
}
a+b


///////Ternory oper///////
single line if else condition

condition ? if condition is true : if condition is false

var a = 10

a>10?"hiii":"bie"

"bie"
var a = 10

a==10?"hiii":"bie"

"hiii"


var a = 10
a>10?a+1:a-1
9