//singleton

//object literals
const mysym = Symbol("key1")

const jsUser = {
    name: "darren",
    "fullname": "darren ponnappa",
    [mysym] : "mykey1",
    age: 20,
    loation: "bangalore",
    email: "abc@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","saturday"]
}
console.log(jsUser)
console.log(jsUser.email)
console.log(jsUser["email"])
//console.log(jsUser.fullname) //error
console.log(jsUser["fullname"])
console.log(jsUser[mysym])

jsUser.email = "darren@gmail.com"
//Object.freeze(jsUser) freezing the object so that no changes takes place
jsUser.email = "darren@yahoo.in"
console.log(jsUser)

jsUser.gretting = function(){
    console.log("hello js user")
}

console.log(jsUser.greeting())
console.log(jsUser.greeting)

jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`)
}

console.log(jsUser.greetingTwo()) 


