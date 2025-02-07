//primitive
 const score = 100
 const scoreValue = 100.3
 const isLoggedIn = false
 const outsideTemp = null
 let userEmail;

 const id = Symbol('123')
 const anotherId = Symbol('123')

 console.log(id === anotherId)

 const bigNumber = 343536546757567554n

 //non primitive

 const heros = ["thor","ironman","hulk"]
 
 let myObj = {
    name: "darren",
    age: 20,
 }

 const myFunction = function(){
    console.log("hello world")
 }

console.log(typeof bigNumber)
console.log(typeof myFunction)


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=

//stack(primitive) , heap(non-primitive)

let myName = "darren"
let anotherName = myName
anotherName = "jhfjfjd"
console.log(myName)
console.log(anotherName)

let user1 = {
   email : "darrenponnappa@gmail.com",
   upi : "user"
}

let user2 = user1
user2.email = "darren@nie"

console.log(user1.email)
console.log(user2.email)
