class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    push(val){   //actually unshift
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            newNode.next = this.head; 
            this.head = newNode;
        }
        this.size++;
    }

    pop(){ //actually shift
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

let St = new Stack();
St.push(1);
St.push(2);
St.push(3);
console.log(St.peek()); //3
St.pop(); 
console.log(St.peek()); //2
console.log(St.isEmpty()); //false
console.log(St.length()); //2
console.log(St); 