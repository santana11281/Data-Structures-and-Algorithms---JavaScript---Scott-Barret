function insertionSort(array){
    let temp 
    for (let i = 0; i < array.length; i++) {
      temp = array[i]
            for (var j = i-1; array[j] > temp && j > -1; j--) {
                array[j+1] = array[j]

                
            }
            array[j+1] = temp
    }

    return array
}

 


let numbers = [6, 2, 4, 5, 1, 3];
let newNumbers = insertionSort(numbers)

console.log(newNumbers,"newNumbers")