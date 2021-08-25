


///// working 

class Node{


    constructor(value){
            this.value = value
            this.next = null
    }
}



class LinkedList {

    constructor(value){
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }

    
push(value){
    const newNode = new Node(value)
    if (!this.head) {

        this.head = newNode
        this.tail = newNode
    } else {
        this.tail.next = newNode
        this.tail = newNode
    }
    this.length++
    return this
}



shift(){

    if(!this.head) return undefined

    let temp = this.head
    this.head= this.head.next
    this.length--

    if(this.length ===0){
        this.tail = null
    }
    temp.next = null
    return temp
}



}




let myLinkedList = new LinkedList(25)

myLinkedList.push(4)
myLinkedList.push(23)

myLinkedList.shift()
console.log(myLinkedList)


