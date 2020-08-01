/*function greet(){
    return "Say Hi to JS"
}

console.log(greet())
*/

(function(){
    console.log("Hiiii")
}())

function looping(uservalue){
    for(i=0;i<uservalue;i++){
        console.log(i)
    }
}

//es6
function * looping(uservalue){
    for(i=0;i<uservalue;i++){
        yield i
    }
}
looping(10)
looping {<suspended>}
var data = looping(5)
undefined
data.next()
{value: 0, done: false}
data.next()
{value: 1, done: false}
data.next()
{value: 2, done: false}
data.next()
{value: 3, done: false}
data.next()
{value: 4, done: false}
data.next()
{value: undefined, done: true}
data.next()
{value: undefined, done: true}