


///// length  not working but set is working 

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
  }
  
  let myLinkedList = new LinkedList(25);
  
  myLinkedList.push(4);
  myLinkedList.push(23);

  myLinkedList.set(0,69)
  
  console.log(myLinkedList.get(0));
  