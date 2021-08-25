
// working but not length


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
    


    pop(){
        if(!this.head) return undefined
        let temp = this.head
        let pre = this.head
        while(temp.next){
            pre = temp
            temp = temp.next

        }
        this.tail = pre
        this.tail.next = null
        this.length--
        if(this.length === 0){
            this.head = null
            this.tail = null


        }
        return temp
    }



    unshift(value){

        const newNode = new Node(value)

        if(!this.head){

            this.head = newNode
            this.tail = newNode
        }else{
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this

    }


    insert(index,value){
        if(index<0 || index> this.length) return false
        if(index === this.length) return this.push(value)
        if(index ===0 ) return this.unshift(value) 

        const newNode = new Node(value)
        const temp = newNode
        newNode.next = temp.next
        temp.next= newNode
        this.length++
        return true
    }




}




let myLinkedList = new LinkedList(25)

myLinkedList.push(4)
myLinkedList.push(24)
myLinkedList.insert(1,1)
myLinkedList.insert(1,2)
myLinkedList.insert(1,3)
// myLinkedList.pop()

console.log(myLinkedList)

