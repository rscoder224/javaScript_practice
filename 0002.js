

class Person{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    // static Method 
    static classInfo(){
        return`this is Class Name `;
    }
    
    static jaj = "Mai hunn Jiyaan"
    
    
    about(){
        console.log(`Your fullname is ${this.firstName} ${this.lastName} `);
    }
    
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    
    set fullName(fullName){
        let[firstName,lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
}



const user1 = new Person("Shaurya","Tiwari");

console.log(user1);


console.log(user1.fullName);

user1.fullName = "Kallu Tiwari";

console.log(user1.fullName);
console.log(Person.classInfo());
console.log(Person.jaj);

