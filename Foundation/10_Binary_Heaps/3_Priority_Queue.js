//using min_heap bcoz priority = 1 => highest priority 
class Node{
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue{
    constructor(){
        this.heap = [];
    }

    enqueue(val, priority){
        const newNode = new Node(val, priority);
        this.heap.push(newNode);
        this.bubbleUp();
    }
    bubbleUp(){
        let currIndex = this.heap.length-1;
        while(currIndex>0){
            let curr = this.heap[currIndex];
            let parentIndex = Math.floor((currIndex-1)/2);
            let parent = this.heap[parentIndex];
            if(curr.priority < parent.priority){
                [this.heap[currIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currIndex]];
                currIndex = parentIndex;
            } 
            else break;
        }
    }

    dequeue(){
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
            if(leftChildIndex <= lastIndex && this.heap[leftChildIndex].priority < this.heap[minValueIndex].priority){
                minValueIndex = leftChildIndex;
            }
            if(rightChildIndex <= lastIndex && this.heap[rightChildIndex].priority < this.heap[minValueIndex].priority){
                minValueIndex = rightChildIndex;
            }
            if(minValueIndex !== index){
                [this.heap[minValueIndex], this.heap[index]] = [this.heap[index], this.heap[minValueIndex]];
            }
            else break;
        }
    }
}

const PQ = new PriorityQueue();
PQ.enqueue("Herpes",4);
PQ.enqueue("Cancer",2);
PQ.enqueue("Mild Fever",9);
PQ.enqueue("Flu",7);
PQ.enqueue("TB",5);
PQ.enqueue("Cold",15);
PQ.enqueue("Cough",11);
PQ.enqueue("Arthritis",12);
PQ.enqueue("Heart Attack",1); //heap: [Node { val: 'Heart Attack', priority: 1 },Node { val: 'Cancer', priority: 2 },Node { val: 'Mild Fever', priority: 9 },Node { val: 'Herpes', priority: 4 },Node { val: 'TB', priority: 5 },Node { val: 'Cold', priority: 15 },Node { val: 'Cough', priority: 11 },Node { val: 'Arthritis', priority: 12 },Node { val: 'Flu', priority: 7 }]
console.log(PQ.dequeue()); //Node { val: 'Heart Attack', priority: 1 }
console.log(PQ); //[2,7,9,4,5,15,11,12]