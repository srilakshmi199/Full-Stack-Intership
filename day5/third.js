Date()
"Sat Jul 11 2020 12:48:11 GMT+0530 (India Standard Time)"

var mydate = new Date()
undefined
mydate
Sat Jul 11 2020 12:49:04 GMT+0530 (India Standard Time)
mydate.getDate()
11
mydate.getMonth()
6
mydate.getFullYear()
2020
mydate.getDay()
6

if we have one condition and multiple output go with switch
if multiple condition multiple output use IFELSE


var name ="John"
switch(name){
    case 'Aakash':
        console.log('You are user')
        break;
    case 'Alvin':
        console.log('You are Admin')
        break;
    case 'John':
        console.log('You are Super Admin')
        break;
    default:
        console.log('I Dont know you')
}

var a = 10
switch(a%2){
    case 0:
        console.log('Number is even')
        break;
    default:
        console.log('Number is odd')
}


switch(mydate.getDay()){
    case 1:
        console.log("Today is monday")
        break;
    case 2:
        console.log("Today is tuesday")
        break;
    case 6:
        console.log("Today is saturday")
        break;
    default:
        console.log("Wrong input")
}
