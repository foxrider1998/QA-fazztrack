const cekHariKerja =(day) => { 
    return new Promise((resolve, reject) => { 
        setTimeout(()=>{
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek= dataDay.find((item) => {
            return item === day
         })
        if (cek) {
            resolve(cek)
        } else {
            reject(new Error('Hari ini bukan hari kerja'))
        }
        },1000)
    })
    }

    

    //penggunaan then and catch
    const Hari=(day)=>{ cekHariKerja(day).then((value) => {
        console.log( value);
      })
      .catch((error) => {
        console.log( error.message);
      })
    }

    // fungsi di definisikan  Hari dengan parameter day , dimana berisikan pemanggilan fungsi cekHariKerja yang membawa parameter day 
    //  dengan built in func then yang membawa hasil kembalian resolve sebagai variable value untuk kemudian di tampilkan
    // kemudian ketika hasilnya reject program akan mengalihkan hasil reject ke built in func catch dalam variable error yang kemudian di tampilkan dengan methode error.message



    // Hari("senin") // expected output = senin
    // Hari("selasa") // expected output = selasa
    // Hari("rabu") // expected output = rabu
    // Hari("kamis") // expected output = kamis
    // Hari("jumat") // expected output = jumat
    // Hari("sabtu") // expected output = Hari ini bukan hari kerja
    // Hari("minggu") // expected output = Hari ini bukan hari kerja



    // penggunaan try and catch 
    async function Hari2(day) {
        try {
            const resolve=await  cekHariKerja(day)
          console.log(resolve);
        } catch (e) {
          console.error(e.message);
        }
      }

    // fungsi di definisikan  Hari2 dengan parameter day , dimana berisikan pemanggilan fungsi cekHariKerja yang membawa parameter day 
    //  dengan function try yang mendefinisikan variable "resolve" sebagai hasil kembalian resolve  value untuk kemudian di tampilkan
    //  ketika hasilnya reject program akan mengalihkan hasil reject ke  catch dalam variable e yang kemudian di tampilkan dengan methode e.message


    Hari2("senin") // expected output = senin
    Hari2("selasa") // expected output = selasa
    Hari2("rabu") // expected output = rabu
    Hari2("kamis") // expected output = kamis
    Hari2("jumat") // expected output = jumat
    Hari2("sabtu") // expected output = Hari ini bukan hari kerja
    Hari2("minggu") // expected output = Hari ini bukan hari kerja

