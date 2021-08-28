

function merge (array1,array2){

    let combined = []
    let i = 0
    let j = 0

    while(i<array1[i]<array2[j]){
        if(array1[i]< array2[j]){
            combined.push(array1[i])
            i++
        } else {
            combined.push(array2[j])
            j++
        }

    }
    while (i<array1.length) {
        combined.push(array1[i])
        i++
    }
    while(j<array2.length){
        combined.push(array2[j])
        j++
    }

    return combined

}


let arr1 = [1,3,7,8]
let arr2 = [2,4,5,6]


console.log(merge(arr1,arr2))