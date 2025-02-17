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