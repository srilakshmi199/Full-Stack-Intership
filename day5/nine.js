var a = [1,2,3,4]
var b = ['a','b','c']
var c = [true,false,false,true]
var d = [1,2,3,'f','df',4,true]

var city = ["London","Newyork","Delhi","Boston"]
undefined
typeof(city)
"object"
city.length
4
city[0]
"London"
city[2]
"Delhi"

var city = ["London","Newyork","Delhi","Boston"]
undefined
city.push('Amsterdam')
5
city
(5) ["London", "Newyork", "Delhi", "Boston", "Amsterdam"]
city.push('Venice')
6
city
(6) ["London", "Newyork", "Delhi", "Boston", "Amsterdam", "Venice"]
(6) ["London", "Newyork", "Delhi", "Boston", "Amsterdam", "Venice"]
city.pop()
"Venice"
city
(5) ["London", "Newyork", "Delhi", "Boston", "Amsterdam"]
city.pop(2)
"Amsterdam"

var city = ["London", "Newyork", "Delhi", "Boston", "Amsterdam", "Venice"]
undefined
city.unshift("Helsinki")
7
city
(7) ["Helsinki", "London", "Newyork", "Delhi", "Boston", "Amsterdam", "Venice"]
city.shift()
"Helsinki"

>push > add in the end of the Array
>pop > remove from the end of the Array
>shift> remove from the begining of the Array
>unshift> add in the begining of the array4

var city = ["Helsinki", "London", "Newyork", "Delhi", "Boston", "Amsterdam", "Venice"]
undefined
city.slice(1)
(6) ["London", "Newyork", "Delhi", "Boston", "Amsterdam", "Venice"]
city.slice(2,5)
(3) ["Newyork", "Delhi", "Boston"]
city
(7) ["Helsinki", "London", "Newyork", "Delhi", "Boston", "Amsterdam", "Venice"]

var city = ["Helsinki", "London", "Newyork", "Delhi", "Boston", "Amsterdam", "Venice"]

undefined
city.splice(1,2)
(2) ["London", "Newyork"]
city
(5) ["Helsinki", "Delhi", "Boston", "Amsterdam", "Venice"]
city.splice(3,0,'Pune','Mumbai')
[]
city
(7) ["Helsinki", "Delhi", "Boston", "Pune", "Mumbai", "Amsterdam", "Venice"]


Array.isArray(city)
true

