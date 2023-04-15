class BinarySearchTree {

    constructor() {
      this.mainNode = null;
    }
  
    root() {
      return this.mainNode;
    }
  
    add(data) {
      const newNode = new Node(data);
      
      if (this.mainNode === null) {
        this.mainNode = newNode;
        return this;
      } 
      
      let tempNode = this.mainNode;
  
      while (tempNode) {
        if (newNode.data === tempNode.data) {
          return this;
        }
  
        if (newNode.data < tempNode.data) {
          if (tempNode.left === null) {
            tempNode.left = newNode;
            return this;
          }
          tempNode = tempNode.left;
        } else {
          if (tempNode.right === null) {
            tempNode.right = newNode;
            return this;
          }
          tempNode = tempNode.right;
        }
      }
    }
  
    has(/* data */) {
      throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
    }
  
    find(/* data */) {
      throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
    }
  
    remove(/* data */) {
      throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
    }
  
    min(/* node */) {
      throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
    }
  
    max(/* node */) {
      throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
    }
  
  }
  
  class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  };
  
  module.exports = {
    BinarySearchTree,
    Node
  };

const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  root() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  add(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};
