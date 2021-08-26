


class Node {

    constructor (value){
        this.value = value
        this.next = null
    }

}


class Queue {

    constructor(value) {

        const newNode = new Node(value)
        this.first = newNode
        this.last  = newNode
        this.length = 1
    }


   dequeue(){

    
   }


}




let myQueue = new Queue(11)

myQueue.Enqueue(3)
myQueue.Enqueue(23)


console.log(myQueue)