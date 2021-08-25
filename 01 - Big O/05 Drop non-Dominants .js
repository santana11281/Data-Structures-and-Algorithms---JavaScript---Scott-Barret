


// O (n2 + n)
// Drop Non-Dominiants
//O (n2)



function logItem(n){
    for (let index = 0; index < n; index++) {
        for (let j = 0; j < n; j++) {
            console.log(index,j)
         }
    }

    for (let k = 0; k < n; k++) {
 
        console.log(k)
    }
  

}



logItem(10)