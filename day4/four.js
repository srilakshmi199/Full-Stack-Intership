var city = "amsterdam"
undefined
city.toUpperCase()
"AMSTERDAM"
city.toLowerCase()
"amsterdam"

var city = "aMSterDam"


var city ="London"

var city ="London"
undefined
city[0]
"L"
city[5]
"n"
city.length
6
city.charAt(2)
"n"
city.charAt(5)
"n"


var city = "amsterdam"
undefined
city.slice(1)
"msterdam"
city.slice(2)
"sterdam"
city.slice(3)
"terdam"
city.slice(1,4)
"mst"
city.slice(1,5)
"mste"

var city = "amsterdam"
undefined
city.slice(-1)
"m"
city.slice(1)
"msterdam"
city.slice(1,-1)
"msterda"
city.slice(1,-2)
"msterd"
city.slice(-1,-2)
""
city.slice(-3,-2)
"d"
city.slice(-5,-2)
"erd"
city.slice(-4,-1)
"rda"
city.slice(-4,1)
""
city.slice(-0)
"amsterdam"

///////////////
var city = "aMSterDam"

city.charAt(0).toUpperCase()
"A"
city.slice(1)
"MSterDam"
city.slice(1).toLowerCase()
"msterdam"
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
"Amsterdam"


var city = " Paris    "
undefined
city.length
10
city.trim()
"Paris"
var city = " Paris .    "
undefined
city.trim()
"Paris ."
city.trim().length
7


var data = "I am learning JavaScript"
undefined
data.replace('JavaScript','JS')
"I am learning JS"
data.replace('Javascript','JS')
"I am learning JavaScript"


var data = "I am learning JavaScript"
undefined
data.toLowerCase()
"i am learning javascript"
data.toLowerCase().replace('javascript','JS')
"i am learning JS"



var data = "JavaScript I am learning JavaScript"
data.replace('JavaScript','JS')
"JS I am learning JavaScript"

data.replace(/JavaScript/g,'JS')
"JS I am learning JS"

var city = " Paris .    "
undefined
city.trim()
"Paris ."
city.replace(/ /g,'')
"Paris."
city.replace(/ /g,'-')
"-Paris-.----"