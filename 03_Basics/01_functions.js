// ----Function Defination----
function sayMyName() {
    console.log("Ratan");
}

sayMyName    //Function referance
sayMyName()     //Ratan  (function call)

function addTwoNumber(num1,num2){       //num1 and num2 are the parameters
    console.log(num1 + num2);
}

addTwoNumber()      //NaN (didnot pass any argument inside the funtion call)
addTwoNumber(1,0)   //1

addTwoNumber(2, "1")    //21

addTwoNumber(2 ,"r")    //2r

const result = addTwoNumber(1,2);
console.log(result)     //3 & undefined (because console.log() prints a value, but it does not return it.)

function addTwoNumber2(num1,num2){
    let result2 = num1 + num2
    return result2
}

let result3 = addTwoNumber2(1,1)
console.log(result3)



function loginUserMessege(username){
        return `${username} just logged in`
}

loginUserMessege("Ratan")       //does not do anything because i didnot print it
console.log(loginUserMessege("Ratan"))      //Ratan just logged in

console.log(loginUserMessege())     //undefined just logged in

function loginUserMessege2(username2){
        if(username2 === undefined){        //username2 === undefined is same as !username2
            console.log("Enter a valid name")
        }
        else
        return `${username2} is just logged in`
}

console.log(loginUserMessege2())        //Enter a valid name







// ---------------## FUnction part 2 ##---------------

function calculateCartPrice(num1){      //here we pass only one defined parameter
        return num1
}

console.log(calculateCartPrice(100))        //100

// ... is a rest operator and spread operator 

function calculateCartPrice2(...num1){
    return num1
}

console.log(calculateCartPrice2(100,200,300,400))       //[ 100, 200, 300, 400 ]  all the numbers are stored in an array by usng this rest operator(...)



const user = {
    username : "Ratan",
    price : 99
}


function handleObject(anyobject){
        console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user)      //[ 100, 200, 300, 400 ]

const myNewArray = [100,200,300,400]

function returnSecondValue(getArray){
        return getArray[1]
}

console.log(returnSecondValue(myNewArray))      //200

