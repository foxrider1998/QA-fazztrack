import { resolve } from "path"


const menanamPadi=(musim)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (musim=="hujan") {resolve("ayo menanam padi")
            }else{if (musim == "kemarau")          
            {reject(new Error("bukan waktunya menanam"))}
                else{reject(new Error("musim tidak dikenal"))
                }}
        },2000)
    })

}

const controllerMenanam =async(musim)=>{
    menanamPadi(musim).then((value) => {
        console.log( value);
      })
      .catch((error) => {
        console.log( error.message);
      })
}

controllerMenanam("hujan")      // expected outout ="ayo menanam padi"
controllerMenanam("kemarau")    // expected outout ="bukan waktunya menanam"
controllerMenanam("semi")       // expected outout ="musim tidak dikenal"






const daftar=(tanggal)=>{
    return new Promise((resolve, reject) => { 
        setTimeout(()=>{
            const dataDate = [1,2,3,4,5,6]
            let cek= dataDate.find((item) => {
            return item === tanggal
         })
        //  console.log(tanggal)
        if (cek) {
            resolve("Ayo mendaftar sekarang waktunya")
        } else { if (1<= tanggal && tanggal <=31) {
            reject(new Error('Aktivitas pendaftaran sedang ditutup'))
        } else {
            reject(new Error('tanggal invalid'))
        }
            
        }
        },1000)
    })
}


async function controllerDaftar(tanggal) {
    try {
        const resolve=await  daftar(tanggal)
      console.log(resolve);
    } catch (e) {
      console.error(e.message);
    }
  }


  controllerDaftar(2)       //expected output = Ayo mendaftar sekarang waktunya
  controllerDaftar(10)       //expected output = Aktivitas pendaftaran sedang ditutup
  controllerDaftar(32)       //expected output = tanggal invalid