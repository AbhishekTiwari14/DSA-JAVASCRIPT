class Queue{
    constructor(){
        this.items = [];
    }

    push(element){
        this.items.push(element);
    }

    pop(){ //actually shift
        this.items.shift();
    }

    peek(){
        if(this.items.length>0) return this.items[0];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    size(){
        return this.items.length;
    }
}