



function bubbleSort(array){

    for (let i = array.length - 1; i > 0; i--) {
        for (let j = 0; j < array.length; j++) {
            if(array[j]> array[j+1]){
             let temp = array[j]    
             array[j]= array[j+1]    
             array[j+1] = temp
            }

        }
        
    }
    return array



}



let numbers = [6, 2, 4, 5, 1, 3];

console.log(bubbleSort(numbers));
















// my solution 



// function bubbleSort(arr) {
//   const sortedArr = [];

//   for (let x = 0; x <= arr.length; x++) {
//     for (let j = 0; j <= arr.length; j++) {
//       if (arr[x] <= arr[j]) {
//         sortedArr.unshift(x);
//       } else {
//         sortedArr.unshift(j);
//       }
//     }
//   }

//   return sortedArr.splice(0, arr.length);
// }



// let numbers = [6, 2, 4, 5, 1, 3];

// console.log(bubbleSort(numbers));

