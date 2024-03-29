class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  class BST {
    constructor() {
      this.root = null;
    }
  
    insert(val) {
      const newNode = new Node(val);
      if (!this.root) {
        this.root = newNode;
        return this;
      }
  
      let curr = this.root;
      while (true) {
        if (curr.val === val) {
          // Handle duplicate values (optional, can throw an error or ignore)
          return this; // Or throw an error if duplicates are not allowed
        }
  
        if (val < curr.val) {
          if (curr.left) {
            curr = curr.left;
          } else {
            curr.left = newNode;
            return this;
          }
        } else {
          if (curr.right) {
            curr = curr.right;
          } else {
            curr.right = newNode;
            return this;
          }
        }
      }
    }
  
    find(val) { // returns true is val is present in BST & false otherwise
      if (!this.root) return false;
      let curr = this.root;
      while (curr) {
        if (curr.val === val) return true;
        else if (val < curr.val) {
          curr = curr.left;
        } else {
          curr = curr.right;
        }
      }
      return false;
    }
  }
  
  const Tree = new BST();
  Tree.insert(10);
  Tree.insert(5);
  Tree.insert(12);
  Tree.insert(4);
  Tree.insert(42);
  console.log(Tree.find(42)); // Output: true
  console.log(Tree.find(9));  // Output: false
  console.log(Tree);