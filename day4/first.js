JavaScript is Scripting Language

Es5 > EcmaScript5 > Old Version
Es6 > EcmaScript6 > New Version   
..................
JavaScript
TypeScript

/////////////////
DataTypes
---------------------
String = "Aakash" 'developer' "343" '454' 'dfv44' 'true' "false"
Number = 545, 543654263, 565.56578
Boolean = true/false


//Es5
variables

var name="John"
var marks = 99
var percent="99"
var pass = true

name
"John"
marks
99
pass
true

var percent="99"
undefined
percent
"99"

typeof(name)
"string"
typeof(marks)
"number"
typeof(percent)
"string"
typeof(pass)
"boolean"

var a = 10
var b = 20

a+b
30
a-b
-10
a*b
200
a/b
0.5
4%2
0
3%2
1
2%3
2
20%30
20

modules of smaller to larger is always smaller

>>>>>>>>>>>>>>>>>
var a = "Hi"
var b = " JavaScript"
undefined
a+b
"Hi JavaScript"

if we add string they will concat

var a = "Hi"
var b = " JavaScript"
undefined
a+b
"Hi JavaScript"
a-b
NaN
a*b
NaN
a/b
NaN
a%b
NaN

var a = 10
undefined
var b = "Hi "
undefined
b+a
"Hi 10"
b-a
NaN > Not a number

string+string=string(concat)
string+number=string(concat)
number+string=string(concat)
number+number=number(sum)

10+'10'+10
"101010"
10+10+'10'
"2010"
'10'+10+10
"101010"


10+'10'+10-1
101009
10+10+'10'-1
2009
'10'+10+10-1
101009



'10'-'a'
NaN
'a'-'1'
NaN
'10'-"2"
8
'43235435'-1
43235434
'43235435'-'1'
43235434
'43235435'-'1a'
NaN
'43235435a'-'1'
NaN
'43235435a'-1
NaN


'10'+'1'
"101"
'10'-'1'
9
'10'*'2'
20
'10'/'2'
5
'10'%'2'
0
'10'+'2'
"102"


true is equal to 1
false is equal to 0

var a = true
undefined
var b = false
undefined
a+b
1
a+a
2
a+5
6
a-5
-4
a+'hi'
"truehi"

var a = true
undefined
var b = 5
undefined
a-b
-4
var c = "hi"
undefined
a-c
NaN
a-b-c
NaN
a-b+c
"-4hi"

var a = 'true'
undefined
var b = 'true'
undefined
a+b
"truetrue"
a-b
NaN