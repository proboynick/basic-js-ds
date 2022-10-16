const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    let node = new Node(data)
    if (this._root === null) {
      this._root = node;
      return;
    }

    let currentNode = this._root;

    while(currentNode) {
      if (node.data > currentNode.data) {
        if(!currentNode.right) {
          currentNode.right = node;
          return;
        }
        currentNode = currentNode.right;
      }

      if (node.data < currentNode.data) {
        if(!currentNode.left) {
          currentNode.left = node;
          return;
        }
        currentNode = currentNode.left;
      }
    }
  }

  has(data) {
    let currentNode = this._root;

    while(currentNode) {
      if(currentNode.data === data) {
        return true;
      } else if (data > currentNode.data) {
        currentNode = currentNode.right;
      } else if (data < currentNode.data) {
        currentNode = currentNode.left;
      }
    }

    return false;
  }

  find(data) {
    let currentNode = this._root;

    while(currentNode) {
      if(currentNode.data === data) {
        return currentNode;
      } else if (data > currentNode.data) {
        currentNode = currentNode.right;
      } else if (data < currentNode.data) {
        currentNode = currentNode.left;
      }
    }
    return null;
  }

  remove(data) {
    this._root = this.deleteNode(this._root, data);
  }


  deleteNode(node, data) {
      if (node === null) {
          return null;
      } else if (node.data > data) {
          node.left = this.deleteNode(node.left, data);
          return node;
      } else if (node.data < data) {
          node.right = this.deleteNode(node.right, data);
          return node;
      } else {
          if (node.left === null && node.right === null) {
              node = null;
              return node;
          }
          if (node.left === null) {
              node = node.right;
              return node;
          } else if(node.right === null) {
              node = node.left;
              return node;
          }
          let currentMinNode = node.right;
          while(true) {
            if(!currentMinNode.left) {
              break;
            }
            currentMinNode = currentMinNode.left;
          }
          node.data = currentMinNode.data;
          node.right = this.deleteNode(node.right, currentMinNode.data);
          return node;
      }
  }

  min() {
    if (!this._root) {
      return null;
    }

    let currentValue = this._root.data;
    let nextNode = this._root.left;

    while(nextNode) {
      currentValue = nextNode.data;
      nextNode = nextNode.left;
    }
    return currentValue;
  }

  max() {
    if (!this._root) {
      return null;
    }

    let currentValue = this._root.data;
    let nextNode = this._root.right;

    while(nextNode) {
      currentValue = nextNode.data;
      nextNode = nextNode.right;
    }
    return currentValue;
  }
}

module.exports = {
  BinarySearchTree
};

let treee = new BinarySearchTree();