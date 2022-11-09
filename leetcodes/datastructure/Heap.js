/**
 * heap
 * default is big heap
 */
class Heap{
    data;
    comparator;
    constructor(arr, comparator){
        this.comparator = comparator || ((a, b) => a - b)
        if(Array.isArray(arr) && arr.length){
            this.data = [...arr]
            this.heapify()
        }
        else{
            this.data = []
        }
    }

    size(){
        return this.data.length
    }

    isEmpty(){
        return this.size() === 0
    }

    parent(i){
        if(i === 0){
            throw new Error("index-0 doesn't have parent")
        }
        return Math.floor((i - 1) / 2)
    }

    leftChild(i){
        return i * 2 + 1
    }

    rightChild(i){
        return i * 2 + 2
    }

    add(e){
        this.data.push(e)
        this.shiftUp(this.data.length - 1)
    }

    peek(){
        if(this.isEmpty()){
            throw new Error('heap is empty!!!')
        }
        return this.data[0]
    }

    poll(){
        const ret = this.peek()
        this.data[0] = this.data[this.data.length - 1]
        this.data.pop()
        this.shiftDown(0)

        return ret
    }

    shiftUp(k){
        while(k > 0 && this.comparator(this.data[k], this.data[this.parent(k)]) >= 0){
            this.swap(k, this.parent(k))
            k = this.parent(k)
        }
    }

    shiftDown(k){
        while(this.leftChild(k) < this.size()){
            let j = this.leftChild(k)
            if(j + 1 < this.size() && this.comparator(this.data[j], this.data[j + 1]) < 0){
                j++
            }

            if(this.comparator(this.data[k], this.data[j]) >= 0){
                break
            }

            this.swap(k, j)
            k = j
        }
    }

    swap(i, j){
        const t = this.data[i]
        this.data[i] = this.data[j]
        this.data[j] = t
    }

    heapify(){
        if(this.size() === 1)   return

        for (let k = this.parent(this.size() - 1); k >= 0; k--) {
            this.shiftDown(k)            
        }
    }
}


module.exports = {
    Heap
}