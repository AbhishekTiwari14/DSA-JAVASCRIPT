class Node{
    constructor(val){
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }

    pop(){
        if(!this.head) return;
        if(this.length === 1){
            this.head = null;
            this.tail = null; 
        }
        else{
            let newTail = this.tail.prev;
            this.tail.prev = null;
            newTail.next = null;
            this.tail = newTail;
        }
        this.length--;
    }

    unshift(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
    }

    shift(){
        if(!this.head) return;
        if(this.length === 1){
            this.head = null;
            this.tail = null; 
        }
        else{
            let newHead = this.head.next;
            this.head.next = null;
            newHead.prev = null;
            this.head = newHead;
        }
        this.length--;
    }

    get(i){ //returns node at ith index
        if(i<0 || i>=this.length) return;
        
        if(i<= this.length/2){
            let curr = this.head;
            for(let j=0; j<i; j++){
                curr = curr.next;
            }
            return curr;
        }
        else{
            let curr = this.tail;
            for(let j=this.length-1; j>i; j--){
                curr = curr.prev;
            }
            return curr;
        }
    }

    set(i,newVal){ //updates val of node at ith index
        if(i<0 || i>=this.length) return;
        let curr = this.get(i);
        curr.val = newVal; 
        
    }

    insert(i, newVal){ //inserting new node at ith index of LL
        if(i<0 || i>this.length) return;
        if(i===0) this.unshift(newVal);
        else if(i===this.length) this.push(newVal);
        else{
            const newNode = new Node(newVal);
            let fwd = this.get(i);
            let bwd = fwd.prev;
            newNode.next = fwd;
            newNode.prev = bwd;
            bwd.next = newNode;
            fwd.prev = newNode;
            this.length++;
        }
    }
    remove(i){ //remove node at ith index of LL
        if(i<0 || i>=this.length) return;
        if(i===0) this.shift();
        else if(i===this.length-1) this.pop();
        else{
            let removedNode = this.get(i);
            let bwd = removedNode.prev;
            let fwd = removedNode.next;
            bwd.next = fwd;
            fwd.prev = bwd;
            removedNode.next = null;
            removedNode.prev = null;
            this.length--;
        }
    }
}

let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3); // 1<->2<->3
list.pop(); // 1<->2
list.unshift(0); // 0<->1<->2
list.shift(); // 1<->2
console.log(list.get(0)); //1
console.log(list.get(1)); //2
list.set(1,4); //1<->4
list.insert(1,2); // 1<->2<->4
list.remove(1); // 1<->4
console.log(list);