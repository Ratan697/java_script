const user = {
    username: "Ratan",
    price: 99,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }
}

user.welcomeMessage()       //Ratan , welcome to website
user.username = "Piyali"
user.welcomeMessage()       //Piyali , welcome to website

console.log(this)       //{}

function one(){
    let username = "Ratan"
    console.log(this.username)      //undefined (this keyword does not work on function)
}

one()



// -------ARROW FUNCTION-------


const one = () => {
    let username = "Ratan"
    console.log(this.username)
}

one()       //undefined (this keyword is not work on arrow function also)

syntax = () => {}

    const addTwo = (num1,num2) => {
        return num1 + num2               //explicit return
    }

console.log(addTwo(2,2))        //4



const addTwo = (num1,num2) => num1 + num2        //implicit return
console.log(addTwo(2,4))        //6

// NOTE** when i use arrow function with curly braces then i should write return keyword but if i use first bracket then i don't have to use return keyword

