class queue{
    constructor() {
        this.items = [];
    }

    enqueue(element){
        this.items.push(element);
    }

    dequeue(){
        if(this.isEmpty()){
            return "underflow";
        }
        return this.items.shift;
    }
    peek(){
        if(this.isEmpty()) return "Queue is Empty";
        return this.items[0];
    }
    isEmpty(){
        return this.items.length === 0;
    }
    size(){
        return this.items.size();
    }
}