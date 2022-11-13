const sum = (a,b) =>{
    return a+b
}

const div=(a,b)=>{
    return a/b
}
const kalkulasi = (kata, cb, num1, num2 )=> {
    const result =kata + cb(num1,num2)
    console.log(result)

}

kalkulasi('hasl jumlah : ',sum,1,3)
kalkulasi('hasl bagi : ',div,3,1)
