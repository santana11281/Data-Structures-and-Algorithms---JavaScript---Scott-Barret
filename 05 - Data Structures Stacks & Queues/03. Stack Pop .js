


class Node {

    constructor (value){
        this.value = value
        this.next = null
    }

}


class Stack {

    constructor(value) {

        const newNode = new Node(value)
        this.top = newNode
        this.length = 1
    }


    push(value){
        const newNode = new Node(value)
        if(this.length === 0){
            this.top = newNode
        } else {
            this.next =this.top
            this.top = newNode
        }
        this.length++
        return this

    }



    pop (){

            if(this.length === 0) return undefined

            let temp = this.top
            this.top = this.next
            temp.next = null

            this.length--
            return temp
    }
}




let myStack = new Stack(99)
myStack.push(100)
myStack.pop()
let json = JSON.stringify(myStack)

console.log(json)