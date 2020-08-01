Map> help yo iterate over the data 
> Return type of map is array and it always return same length

Filter> Help to filter out the values
> Return type of map is array and it can be or cannot of same length
> Filter only return those value for which output is true




var a = [2,4,6,8,9,5]
a.map((data) => {return data*2})
[4,8,12,16,18,10]

var b =[10,23,43,54,27,41,18]
b.filter((data) => { return data>30})
[43, 54, 41]
b.map((data) => { return data>30})
[false, false, true, true, false, true, false]


var a = [0,1,2,3]
a.map((data) => {return data*2})
(4) [0, 2, 4, 6]
a.filter((data) => {return data*2})
(3) [1, 2, 3]
