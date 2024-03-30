class MinHeap{
    constructor(){
        this.heap = [];
    }

    insert(val){
        this.heap.push(val);
        this.bubbleUp();
    }
    bubbleUp(){
        let currIndex = this.heap.length-1;
        while(currIndex>0){
            let curr = this.heap[currIndex];
            let parentIndex = Math.floor((currIndex-1)/2);
            let parent = this.heap[parentIndex];
            if(curr<parent){
                [this.heap[currIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currIndex]];
                currIndex = parentIndex;
            } 
            else break;
        }
    }

    extractMin(){
        if(this.heap.length===0) return;
        if(this.heap.length === 1){
            const min = this.heap.pop();
            return min; 
        }
        const min = this.heap[0];
        const end = this.heap.pop();
        this.heap[0] = end;
        this.bubbleDown();
        return min;
    }
    bubbleDown(){
        let index = 0;
        let lastIndex = this.heap.length - 1;
        while(true){
            let leftChildIndex = (2*index) + 1;
            let rightChildIndex = (2*index) + 2;
            let minValueIndex = index;
            if(leftChildIndex <= lastIndex && this.heap[leftChildIndex] < this.heap[minValueIndex]){
                minValueIndex = leftChildIndex;
            }
            if(rightChildIndex <= lastIndex && this.heap[rightChildIndex] < this.heap[minValueIndex]){
                minValueIndex = rightChildIndex;
            }
            if(minValueIndex !== index){
                [this.heap[minValueIndex], this.heap[index]] = [this.heap[index], this.heap[minValueIndex]];
            }
            else break;
        }
    }
}

const minHeap = new MinHeap();
minHeap.insert(4);
minHeap.insert(2);
minHeap.insert(9);
minHeap.insert(7);
minHeap.insert(5);
minHeap.insert(15);
minHeap.insert(11);
minHeap.insert(12);
minHeap.insert(1); //heap =[1,2,9,4,5,15,11,12,7]
console.log(minHeap.extractMin()); //1
console.log(minHeap); //[2,7,9,4,5,15,11,12]