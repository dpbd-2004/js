 const myArr = [ 1,2,3,5,true,"darren"]
 const myHeroes = ['iron man','thor']
 const myArr2 = new Array(1,2,3,4)
 console.log(myArr[0])

 //array methods
 myArr.push(6)
 myArr.push(7)
 myArr.pop()

 myArr.unshift(0)
 myArr.shift()

 console.log(myArr.includes(9))
 console.log(myArr.indexOf(3))
 const newArr = myArr.join()

 console.log(myArr)
 console.log(newArr)

 console.log("A",myArr)

 const myn1 = myArr.slice(1,3)

 console.log(myn1)

 console.log("A",myArr)

 const myn2 = myArr.splice(1,3)
 console.log(myn2);

