function sayMyName(){
    console.log("darren")
}

sayMyName()

function add(number1,number2) {
    console.log(number1+number2)
}

// add(3,4)
// add(3,"4")
// add(3,"a")


function add(number1,number2) {
    let result = number1 + number2
    return result
}

const a = add(3,5);
console.log("result:", a)

function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username")

    }
    return `${username} just logged in`
}

console.log(loginUserMessage("darren"))
console.log(loginUserMessage())


function calculateCartPrice(...num1) {
    return num1
}

console.log(calculateCartPrice(200,400,500,2000))


const user  = {
    username : "darren",
    price : 199
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price ${anyobject.price}`)

}

handleObject(user)

handleObject({
    username:"sam",
    price: 200
})

const myNewArray = [200,400,500,600]

function returnSecondValue(getArray){
    return getArray[1];

}

console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,400,500,600]))