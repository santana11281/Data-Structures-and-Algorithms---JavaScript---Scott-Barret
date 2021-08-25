
//  O (a + b)
function logItem(a,b){
    for (let index = 0; index < a; index++) {
       console.log(index)
    }

    for (let j = 0; j < b; j++) {
        console.log(j)
     }

}


//  O (a * b)
function logItem(a,b){
    for (let index = 0; index < a; index++) {
        for (let j = 0; j < b; j++) {
            console.log(index,j)
         }
    }

   

}