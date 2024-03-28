class Node{
    constructor(val){
        this.val = val;
        this.next = null; 
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){  //push => insert at tail
        const newNode = new Node(val);
        if(!this.head){ //First node of LL
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    
    pop(){  //pop => remove tail element
        if(!this.head) return;
        let curr = this.head;
        let newTail = curr;
        while(curr.next){
            newTail = curr;
            curr = curr.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
    }
    
    unshift(val){  // unshift => insert at head
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }
    
    shift(){ // shift => delete head node
        if(!this.head) return;
        let newHead = this.head.next;
        this.head = newHead;
        this.length--;
        if(this.length === 0) this.tail = null;
    }

    get(i){ //returns node at 'i'th index on LL
        if(i<0 || this.length < i) return;
        let ans = this.head;
        for(let j=0; j<i; j++){
            ans = ans.next;
        }
        return ans.val;
    }

    set(i, newVal){ //updates the val of node at ith index
        if(i<0 || this.length < i) return;
        let curr = this.head;
        for (let j=0; j<i ; j++) {
            curr = curr.next;
        }
        curr.val = newVal;
    }

    insert(i, newVal){ //inserts new node at ith index 
        if(i<0 || this.length<i) return;
        if(i===0) this.unshift(newVal);
        else if(i=== this.length) this.push(newVal);
        else{
            let prev = this.head;
            for(let j=1; j<i; j++){
                prev = prev.next;
            }
            let newNode = new Node(newVal);
            let fwd = prev.next;
            prev.next = newNode;
            newNode.next = fwd; 
            this.length++;
        }
    }
    remove(i){ //removes node at 'i'th index out of the LL 
        if(i<0 || i>=this.length) return;
        if(i===0) this.shift();
        else if(i===this.length-1) this.pop();
        else{ 
            let prev = this.head;
            for(let j=1; j<i; j++){
                prev = prev.next;
            } 
            let curr = prev.next;
            prev.next = curr.next;
            curr.next = null;
            this.length--; 
        }
    }

    reverse(){ // reversing the LL in-place
        if(this.length <=1) return;
        let newTail = this.head;
        let newHead = this.tail;

        let prev = null;
        let curr = this.head;
        let fwd = null;
        for(let i=0; i<this.length; i++){
            fwd = curr.next;
            curr.next = prev;
            prev = curr; 
            curr = fwd;
        }
        this.tail = newTail;
        this.head = newHead;
    }
}

let list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.pop(); // 1->2
list.unshift(0); // 0->1->2
list.shift(); // 1->2
console.log(list.get(0)); // 1
list.set(0,4); // 4->2
list.insert(1,5); // 4->5->2
list.remove(1); // 4->2
list.reverse(); // 2->4

console.log((list)); // 

