function seleksiNilai(min,max,data) {
// conditional for ensure that max is biger than min
    if (max <= min) {
    console.log("Nilai akhir harus lebih besar dari nilai awal")        
    }else{
//conditional for ensure that array data have data at least 5 data
        if (data.length<5) {
            console.log("Jumlah angka dalam data array harus lebih besar dari 5")
        }else{
            let result=[];
//repeating searching for array data which have the phrase match            
            for (let i = 0; i < data.length; i++) {
//sorting than save the data are having phrase                 
               if (min <= data[i] && data[i] <= max) {
                result.push(data[i])
               }
               
            } 
//checking if there any matched with pharse            
            if (result.length==0) {
                console.log("Nilai tidak ditemukan")
                
            }else{
                result.sort(function(a, b){return a-b }) // if number sorted as string it is usualy done like this
                console.log(result)}
        }
    }
}

seleksiNilai(3,1,[1,2,8,9,9,95]) //nilai akhir harus lebih besar dari nilai awal

seleksiNilai(5,20,[2.25,4,14,17,30,8]) //[8,14,17]

seleksiNilai(15,3,[2,25,4,14,17,30,8]) //Nilai akhir harus lebih besar dari nilai awal

seleksiNilai(4,17,[2,25,4])//Jumlah angka dalam data array harus lebih besar dari 5

seleksiNilai(5,17,[2,25,4,1,30,18])//Nilai tidak ditemukan
