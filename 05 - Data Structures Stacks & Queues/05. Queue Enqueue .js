


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


    Enqueue(value){
        const newNode = new Node(value)
        if(this.length === 0){
    
        this.first = newNode
        this.last = newNode


        }else {
            this.last.next = newNode
            this.last = newNode

        }
        this.length++
        return this
    }

}




let myQueue = new Queue(11)

myQueue.Enqueue(3)
myQueue.Enqueue(23)


console.log(myQueue)