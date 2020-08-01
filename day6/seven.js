function language(name,country) {
    this.name = name;
    this.country = country;
    this.add = (a,b) => {return a+b}
}

var Hindi = new language('Hindi','India')
Hindi
language {name: "Hindi", country: "India", add: ƒ}
Hindi.add(2,4)
6
//////// Es6///////
class language1{
    constructor(name,country){
        this.name = name;
        this.country = country;   
    }

    add(a,b){
        return a+b
    }
}
var English = new language1('English','USA')