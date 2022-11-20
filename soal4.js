
import fetch from 'node-fetch';



const nama =async   ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    data.forEach(element => {
        console.log(element.name)
    });
    

}

nama()