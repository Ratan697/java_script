// let a = 10
// const b = 20
// var c = 30

// console.log(a)      //10
// console.log(b)      //20
// console.log(c)      //30



// {} is scope in case of function and loops etc.

// if (true) {             //block scope
//     let a = 10
//     const b = 20
//     var c = 30
// }

// console.log(a)      //a is not defined
// console.log(b)      //console.log(b)
// console.log(c)      //30



// let a = 100

// if(true){
//     let a = 10
//     console.log(`block scope ${a}`)     //block scope 10
// }

// console.log(`global scope ${a}`)        //global scope 100



// -----NESTED SCOPE----

// function one(){                         //global scope cannot use a local scope but local scope can use global scope
//     const username = "Ratan"

//     function two(){
//         const website = "youtube"
//         console.log(username)
//     }
//     // console.log(website)     //error because i cannot access website from function two into function one

//     two()
// }

// one()       //Ratan



// if(true){
//     const username = "Ratan"
    
//     if(username === "Ratan"){
//         const website = " youtube"
//         console.log(username + website)
//     }

//     // console.log(website)     //i cannot access website outside the if block scope
// }

// console.log(username)       //i cannot print it because the scope is inside the if block

// ----------------  INTERESTING    -------------

// console.log(addone(1))      //2
// function addone(num){
//         return num+1
// }


// addTwo(5)       //Cannot access 'addTwo' before initialization
// const addTwo = function(num){
//     return num+2
// }

