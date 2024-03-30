// Heap Is stored in array
// Parent Node at index 'n' => its left child @ index '2n+1' & right child @ '2n+2' 
// Child Node at index 'n' => its parent node @ index 'floor(n-1/2)' 

//Implementing maxHeap
//Note: Data might not be inserted in the right order. So, bubbleUp fxn. helps maintain correct order of maxHeap by swapping positions of child which is greater than its paren.

class MaxHeap{
    constructor(){
        this.heap = [];
    }

    insert(val){
        this.heap.push(val);
        this.bubbleUp();
    }
    bubbleUp(){
        let currIndex = this.heap.length - 1;
        while(currIndex>0){
            let curr = this.heap[currIndex];
            let parentIndex = Math.floor((currIndex-1)/2);
            let parent = this.heap[parentIndex];
            if(curr>parent){
                [this.heap[currIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currIndex]];
                currIndex = Math.floor((currIndex-1)/2);
            }
            else break;
        }
    }

    extractMax(){ //removes max element from heap and returns it. MaxHeap => Max Element = Root(i=0)
        if(this.heap.length === 0) return;
        if(this.heap.length === 1) {
            const max = this.heap.pop();
            return max;
        }
        const max = this.heap[0];
        const end = this.heap.pop();
        this.heap[0] = end;  //end element temporarily made new root while mainting the parent-child index relations of other nodes 
        this.bubbleDown();
        return max;
    }

    bubbleDown(){
        let index = 0;
        let lastIndex = this.heap.length - 1;
        while(true){
            let leftChildIndex = (2*index) + 1;
            let rightChildIndex = (2*index) + 2;
            let largestValueIndex = index; 
            if(leftChildIndex <= lastIndex && this.heap[leftChildIndex] > this.heap[largestValueIndex]){
                largestValueIndex = leftChildIndex;
            }
            if(rightChildIndex <= lastIndex && this.heap[rightChildIndex] > this.heap[largestValueIndex]){
                largestValueIndex = rightChildIndex;
            }
            if(largestValueIndex !== index){
                [this.heap[index], this.heap[largestValueIndex]] = [this.heap[largestValueIndex], this.heap[index]];
                index = largestValueIndex;
            }
            else break;
        }
    }
}

const maxHeap = new MaxHeap();
maxHeap.insert(4);
// maxHeap.insert(2);
// maxHeap.insert(7);
// maxHeap.insert(9);
// maxHeap.insert(5);
// maxHeap.insert(6); //heap = [9,7,6,2,5,4]
console.log(maxHeap.extractMax()); //9
console.log(maxHeap); //[7,5,6,2,4]
