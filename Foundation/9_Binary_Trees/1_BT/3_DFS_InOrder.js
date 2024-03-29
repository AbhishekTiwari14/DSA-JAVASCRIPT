//InOrder DFS => Left,Root,Right
//                  1
//            2            3
//         4    5       6    7      => Inorder DFS = [4,2,5,1,6,3,7]

class Node{
    constructor(val){
        this.val = val;
        this.left = null; 
        this.right = null; 
    }
}

class BT{
    constructor(){
        this.root = null;
    }

    DFS_InOrder(){
        if(!this.root) return [];
        const result = [];
        this.helperFxn(this.root, result);
        return result;
    }

    helperFxn(node, result){
        if(node.left) this.helperFxn(node.left, result);
        result.push(node.val);
        if(node.left) this.helperFxn(node.right, result);
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
console.log(Tree.DFS_InOrder()); //[4,2,5,1,6,3,7]