class Person
{
    constructor(name,age)
    {
        this.name = name
        this.age = age
    }
    
    greetings()
    {
        console.log(`my name is ${this.name} and age is ${this.age}`);
    }

}

module.exports=Person;  //MODULE IS A GLOBAL OBJECT