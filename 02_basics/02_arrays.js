const marvel_heros = ["thor","Ironman","spiderman"]
const dc = ["superman","flash","batman"]

marvel_heros.push(dc)
console.log(marvel_heros)
console.log(marvel_heros[3][1])

const allheros = marvel_heros.concat(dc_heros)
console.log(allheros)

const allnewheros = [...marvel_heros, ...dc]
console.log(allnewheros)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)


console.log(Array.isArray("darren"))

console.log(Array.from("darren"))

//console.log(Array.from(name : "darren"))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))  
