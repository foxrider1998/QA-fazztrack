// 10 built function


//deklarasi variabel variabel 
    let angka = 123
    let string = "abc"
    let arrayNum = [1,2,3]
    let arrayStr = ['a','b,','c','1','2','3']
    let biner = true

    const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];    
//1.) typeof() digunakan untuk mengembalikan type dalam parameter
    console.log("no 1")
    console.log(typeof(angka))   // expected output: number
    console.log(typeof(string))  // expected output: string
    console.log()

// 2.) toSring()  mengubah type data  menjadi sebuah string
    console.log("no 2")
    
    console.log(typeof(angka))                       // expected output: number
    console.log(typeof(angka.toString()))            // expected output: string
    console.log(typeof(biner.toString()))            // expected output: string
    console.log()

//3.) json.parse() mengubah format json menjadi object
console.log(" no 6")

const jsonText = `{
    "browsers": {
      "firefox": {
        "name": "Firefox",
        "pref_url": "about:config",
        "releases": {
          "1": {
            "release_date": "2004-11-09",
            "status": "retired",
            "engine": "Gecko",
            "engine_version": "1.7"
          }
        }
      }
    }
  }`;
console.log("no 3")
  
console.log(typeof(typeof(jsonText)))        // expected output: string
console.log(jsonText.browsers)               // expected output: undefined              

let objFromJson=(JSON.parse(jsonText));

console.log(typeof(objFromJson.browsers))    // expected output: object
console.log()
  


//4.) JSON.stringify() mengubah paramaeter menjadi sebuah JSON string
console.log(" no 4")
result = JSON.stringify({ x: 5, y: 6 })
console.log(result + " dengan tipe data " + typeof(result));                      // expected output: "{"x":5,"y":6}"
console.log()


// 5. concat() digunakan untuk menggabungkan dua data
console.log(" no 5")

 result = arrayNum.concat(arrayStr)                                 //concating two array
 console.log(result)                                                // expected output: [  1,    2,   3,   'a',  'b,', 'c', '1', '2',  '3']

 result= arrayStr.concat(arrayNum,arrayStr)                         //concating three array (or you can use it for n array  )
 console.log(result)                                                // expected output: [  1,    2,   3,   'a',  'b,', 'c', '1', '2',  '3']
 console.log()


 // 6. Indexof(data)  mengembalikan index dari data array , case beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];     
 console.log(" no 6")

console.log(beasts.indexOf('bison'));         // expected output: 1

// start from index       
console.log(beasts.indexOf('bison', 2));      // expected output: 4

console.log(beasts.indexOf('giraffe'));       // expected output: -1
console.log()
// 7. forEach(element =>{}) untuk perulangan setiap data dalam array
console.log(" no 7")

beasts.forEach(element => {console.log("beast name  "+ element)}); 
// expected output print  all beast name 1 per line

// beast name  ant
// beast name  bison
// beast name  camel
// beast name  duck
// beast name  bison
console.log()



// 8. get.Day()  mendapatkan return berupa index hari dari  data tanggal


console.log("no 8")

const birthday = new Date('August 19, 1975 23:15:30');
const day1 = birthday.getDay();  
console.log(day1) //expected output = 2

console.log()

//9. math.abs(number) mengembalikan nilai number dengan format absolute (selalu positif)

console.log("no 9")
result = Math.abs(-100)
console.log(result) //expected output = 100

console.log()

//10.     trim() memotong whitespace pada data tipe string

console.log("no 10")
const greeting = '   Hello world!   ';

console.log(greeting);
// expected output: "   Hello world!   ";

console.log(greeting.trim());
// expected output: "Hello world!";
console.log()
