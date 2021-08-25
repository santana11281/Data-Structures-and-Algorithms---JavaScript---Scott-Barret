


///// length  not working but remove is working 

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor(value) {
      const newNode = new Node(value);
      this.head = newNode;
      this.tail = this.head;
      this.length = 1;
    }
  
    push(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.length++;
      return this;
    }
    get(index) {
      if (index < 0 || index >= this.length) return undefined;
      let temp = this.head;
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
      return temp;
    }
    set(index,value){

        let temp = this.get(index)
        if(temp){
            temp.value = value
            return true
        }
        return false

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
    remove(index){
        if(index < 0 || index>= this.length) return undefined
        if(index === 0) return this.shift()
        if(index === this.length - 1) return this.pop()
    
        const before = this.get(index-1)
        const temp = before.next

        before.next = null
        this.length--
        return temp
    }


    reverse(){
        let temp = this.head
        this.head = this.tail
        this.tail = temp

        let next = temp.next
        let prev = null

        for(let x = 0 < this.length; x++){

            next = temp.next
            temp.next =prev
            prev = temp
            temp = next

        }
        return this


    }



    
  }
  
  let myLinkedList = new LinkedList(25);
  
  myLinkedList.push(4);
  myLinkedList.push(23);

  myLinkedList.set(0,69)
  myLinkedList.remove(0)
  console.log(myLinkedList);
  console.log(myLinkedList.reverse());
  