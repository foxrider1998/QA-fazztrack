let bilangan =[1,2,3,4,5]
let hasil =[]

for (let i = 0; i < bilangan.length; i++) {
  let sum = 0
  for (let n = 0; n < bilangan.length; n++) {
    if (i!=n) { 
  
     sum += bilangan[n]
    }
  }
  console.log("hasil tambah tanpa index-" +i +" adalah "+sum)
   hasil.push(sum)
}
console.log("\ndengan maximal = " +Math.max(...hasil))
console.log("dengan minimal = " +Math.min(...hasil)+"\n")

