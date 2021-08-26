

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

    get(index){
        if(index>=this.length || index < 0)  return undefined
        let temp = this.head
        if(index < this.length/2){
            for(let i = 0; i < index; i++){
                temp = temp.next
            }
        }else{
            temp = this.tail
            for (let i = this.length -1; i > index; i--) {
                temp = temp.prev
                
            }
        }
            return temp

    }

    set(index, value){
        let temp = this.get(index)
        if(temp){
            temp.value = value
            return true
        }
        return false

    }
     


}


let myDoublyLinkedList = new DoublyLinkedList(7)

myDoublyLinkedList.push(2)
myDoublyLinkedList.push(3)
myDoublyLinkedList.set(10,99)

console.log(myDoublyLinkedList)