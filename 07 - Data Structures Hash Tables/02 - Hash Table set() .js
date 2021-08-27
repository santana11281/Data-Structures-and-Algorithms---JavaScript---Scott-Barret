

class HashTable{

    constructor(size = 7){
        this.dataMap = new Array(size)

    }

    _hash(key) {

        let hash = 0
        for (let i = 0; key.length; i++){
            hash = (hash + key.charCodeAt(i)*23) % this.dataMap.length

        }
        return hash

    }

    set(key,value) {
        let index = this._hash(key)
        if(!this.dataMap[index]) this.dataMap[index] = []
        
        this.dataMap[index].push([key, value])
        return this
    }

}

let myHashTable= new HashTable()

myHashTable.set("Drug",2500)
myHashTable.set("Drug",2500)
myHashTable.set("klk",2500)
console.log('object')
console.log(myHashTable)