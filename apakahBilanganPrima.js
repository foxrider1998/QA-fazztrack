function cekPrima(bilanganbulat) {
let isPrima = true

for (let i = 2; i < bilanganbulat; i++) {
    if (bilanganbulat%i==0) {
        isPrima=false
    }
}

if (isPrima==true) {  
    console.log("bilangan "+bilanganbulat+" adalah bilangan prima")    
} else {

    // console.log("bilangan "+bilanganbulat+" bukan bilangan prima")  
}
}


let bilanganbulat = 5;
cekPrima(bilanganbulat) 

// check 1-100
// for (let x = 0; x < 100; x++) {
//     console.log(x)
//     cekPrima(x)
// }
