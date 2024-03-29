class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enque(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    deque(){ //actually shift
        if(!this.head) return;
        if(this.size === 1){
            this.head = null;
            this.tail = null;
        }
        else{
            const newHead = this.head.next;
            this.head.next = null;
            this.head = newHead;
        }
        this.size--;
    }

    peek(){
        if(this.head) return this.head;
    }

    isEmpty(){
        return this.size === 0;
    }

    length(){
        return this.size;
    }
}

