//Breadth-First-Traversal
//                  1
//            2            3
//         4    5       6    7      => BFS = [1,2,3,4,5,6,7]
class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
class BT {
    constructor() {
      this.root = null;
    }
    
    BreadthFirstTraversal(){
        if(!this.root) return [];
        const result = []; 
        const queue = [];
        queue.push(this.root);
        while(queue.length > 0){
            const curr = queue.shift();
            result.push(curr.val);
            if(curr.left) queue.push(curr.left);
            if(curr.right) queue.push(curr.right);
        }
        return result;
    }
}

let Tree = new BT();
Tree.root = new Node(1);
Tree.root.left = new Node(2);
Tree.root.right = new Node(3);
Tree.root.left.left = new Node(4);
Tree.root.left.right = new Node(5);
Tree.root.right.left = new Node(6);
Tree.root.right.right = new Node(7);
console.log(Tree.BreadthFirstTraversal()); //[1,2,3,4,5,6,7]