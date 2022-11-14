 const callbackFunc=(kata)=> {
    let result =[]
        for (let i = 0; i < names.length; i++) {
            names[i].toLowerCase().match(kata)!=null ? result.push(names[i]):{}
        }
    return result              
   }

    function searchName(phrase,limit,names,cbFunc) {
            let havingPharse= cbFunc(phrase)
            console.log(havingPharse.slice(0,limit))
    }


    const names= [   "Abigail","Alexandra","Alison",
                "Amanda","Angela","Bella",
                "Carol","Carolline","Carolyn",
                "Deirdre","Diana","Elizabeth",
                "Ella","Faith","Olivia","Penelope"
    ]



  searchName("an",3,names,callbackFunc) // ['Alexandra' ,'Armanda','Angela']

  searchName("bi",3,names,callbackFunc) // ['Alexandra' ,'Armanda','Angela']