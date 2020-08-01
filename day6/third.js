var moviesname = "MadMAx"
var moviesrating =4
var moviesgenre="Action"

var movies = {
    name:'MadMax',
    rating:4.5,
    genre:'Action'
}
undefined
movies
{name: "MadMax", rating: 4.5, genre: "Action"}
typeof(movies)
"object"
movies.name
"MadMax"
movies.rating
4.5
movies.langauge="English"
"English"
movies
{name: "MadMax", rating: 4.5, genre: "Action", langauge: "English"}
movies.rating=4.3
4.3
movies
{name: "MadMax", rating: 4.3, genre: "Action", langauge: "English"}
delete movies.genre
true

movies['genre']
"Action"

//JSON///> javascript Object notation
var movies = [
    {
        name:'MadMax',
        rating:4.5,
        genre:'Action'
    },
    {
        name:'Avengers',
        rating:3.5,
        genre:'thril'
    }
]
movies[1].name
"Avengers"

var calc ={
    name:'Calc',
    add:function(a,b){return a+b},
    sub:(a,b)=>{return a-b}
}
undefined
calc
{name: "Calc", add: ƒ, sub: ƒ}
calc.add(2,4)
6
calc.add(4,55)
59
calc.sub(4,55)
-51

var dbquery={
    find:(table) => { return `Select * from ${table}`},
    insert:(table,dbobj) => { return `Insert into ${table} name,city VALUES(${dbobj.name},${dbobj.city})`}
}


dbquery.find('Employee')
"Select * from Employee"
dbquery.insert('student',{name:'John',city:'Delhi'})
"Insert into student name,city VALUES(John,Delhi)"
