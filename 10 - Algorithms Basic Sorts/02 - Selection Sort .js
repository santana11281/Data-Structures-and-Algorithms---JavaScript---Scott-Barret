function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if(i !== min){
        let temp = array[i]
        array[i] = array[min]
        array[min] = temp
    }
  }

  return array
}

let numbers = [6, 2, 4, 5, 1, 3];
let newNumbers = selectionSort(numbers)

console.log(newNumbers,"newNumbers")
