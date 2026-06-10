const localstockuser = new Object()

localstockuser.id = "123abc"
localstockuser.name = "Ratan"
localstockuser.isLoggedIn = true

// console.log(localstockuser)

const regularUser = {
    email: "ratanjana7600@gmail.com",
    fullname:{
        userfullname:{
            firstname: "Ratan",
            lastname: "Jana"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {
    1:"a",
    2: "b"
}

const obj2 = {
    3:"c",
    4: "d"
}

const obj3 = {obj1, obj2}
console.log(obj3)       //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const obj4 = Object.assign(obj1,obj2)
console.log(obj4)       //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj5 = Object.assign({}, obj1,obj2)
console.log(obj4)       //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }  same result

