const { NotImplementedError } = require("../lib/errors");
// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);

    if (!this.rootNode) {
      this.rootNode = newNode;
    } else {
      let currentNode = this.rootNode;

      while (true) {
        if (currentNode.data === data) {
          return currentNode;
        }

        if (currentNode.data > data) {
          if (!currentNode.left) {
            currentNode.left = newNode;
          } else {
            currentNode = currentNode.left;
          }
        }

        if (currentNode.data < data) {
          if (!currentNode.right) {
            currentNode.right = newNode;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
  }

  has(data) {
    let currentNode = this.rootNode;

    while (currentNode) {
      if (currentNode.data === data) {
        return true;
      }

      if (currentNode.data > data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  find(data) {
    let currentNode = this.rootNode;

    while (currentNode) {
      if (currentNode.data === data) {
        return currentNode;
      }

      if (currentNode.data > data) {
        currentNode = currentNode.left;
      } else if (currentNode.data < data) {
        currentNode = currentNode.right;
      }
    }
    return null;
  }

  remove(data) {
    this.rootNode = deleteNode(this.rootNode, data);

    function deleteNode(nodeTree, data) {
      if (!nodeTree) {
        return null;
      }
      if (nodeTree.data < data) {
        nodeTree.right = deleteNode(nodeTree.right, data);
        return nodeTree;
      } else if (nodeTree.data > data) {
        nodeTree.left = deleteNode(nodeTree.left, data);
        return nodeTree;
      } else {
        if (!nodeTree.left && !nodeTree.right) {
          return null;
        }
        if (!nodeTree.left) {
          return nodeTree.right;
        }
        if (!nodeTree.right) {
          return nodeTree.left;
        }

        let maxLeft = nodeTree.left;

        while (maxLeft.right) {
          maxLeft = maxLeft.right;
        }
        nodeTree.data = maxLeft.data;
        nodeTree.left = deleteNode(nodeTree.left, data);
        return nodeTree;
      }
    }
  }

  min() {
    if (!this.rootNode) return;
    let currentNode = this.rootNode;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  max() {
    if (!this.rootNode) return;
    let currentNode = this.rootNode;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree,
};
