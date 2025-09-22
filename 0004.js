

person.prototype.userMethods = {
    fullName: function(){
        return `${this.firstName} ${this.lastName}`
        },
}



function person(firstName,lastName,age,email){
    const user = Object.create(person.prototype.userMethods)
    
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.email = email
       
      return user;
      
}



 const user1 = person("Shaurya","Tiwari",22,"ltsmart990@gmail.com");



console.log(user1.fullName());
