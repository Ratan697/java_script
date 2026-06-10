<<<<<<< HEAD
// singleton

// object literals

const mySym = Symbol("key1")
const JsUser = {
    name: "Ratan",
    age: 20,
    location: "Kolkata",
    email: "ratanjana7600@gmail.com",
    [mySym]: "mykey1"
}

console.log(JsUser.name)        //Ratan  this is not recomment method
console.log(JsUser["name"])     //Ratan  this is the modern method

console.log(JsUser[mySym])      //mykey1 adding a symbon into object

JsUser.age = 22

// Object.freeze(JsUser)       //freeze any changes doing in the object

JsUser.greeting = function(){
    console.log("Hello Js User")
}

console.log(JsUser.greeting)        //[Function (anonymous)]
console.log(JsUser.greeting())      //Hello Js User

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`)
}

console.log(JsUser.greetingTwo())       //Hello Js User, Ratan

=======
// singleton

// object literals

const mySym = Symbol("key1")
const JsUser = {
    name: "Ratan",
    age: 20,
    location: "Kolkata",
    email: "ratanjana7600@gmail.com",
    [mySym]: "mykey1"
}

console.log(JsUser.name)        //Ratan  this is not recomment method
console.log(JsUser["name"])     //Ratan  this is the modern method

console.log(JsUser[mySym])      //mykey1 adding a symbon into object

JsUser.age = 22

// Object.freeze(JsUser)       //freeze any changes doing in the object

JsUser.greeting = function(){
    console.log("Hello Js User")
}

console.log(JsUser.greeting)        //[Function (anonymous)]
console.log(JsUser.greeting())      //Hello Js User

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`)
}

console.log(JsUser.greetingTwo())       //Hello Js User, Ratan

>>>>>>> f2eabd8cfd2c9e7c6f8fe621670ec67506a7eddc
