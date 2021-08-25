

class Node {

    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}


class DoublyLinkedList{


    constructor(value){

            const newNode = new Node(value)
            this.head = newNode
            this.tail = newNode
            this.length = 1 

    }





    pop(){

        if(this.length === 0) return undefined
        let temp = this.tail
        if(this.length === 1){
            this.head = null
            this.head = null

        } else {
            this.tail = this.tail.prev
            this.tail.next = null
            temp.prev = null
        }
        this.length--
        return temp
}

push(value){
    const newNode = new Node(value)
    if(this.length === 0){

        this.head = newNode
        this.tail =  newNode
    }else{
        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
    }
    this.length++
    return this
}

}


let myDoublyLinkedList = new DoublyLinkedList(7)

// myDoublyLinkedList.push(2)
// myDoublyLinkedList.push(3)
myDoublyLinkedList.pop()

console.log(myDoublyLinkedList)