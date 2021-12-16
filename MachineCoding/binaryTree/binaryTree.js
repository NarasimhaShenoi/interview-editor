class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);

const inOrderTraversal = (root) => {
    if(!root) return;
    inOrderTraversal(root.left);
    console.log(root.data); 
    inOrderTraversal(root.right);
};

inOrderTraversal(root);

const mirror = root => {
    if(!root) return null;

    let left = mirror(root.left);
    let right = mirror(root.right);
    
    root.left = right;
    root.right = left;
    return root;
}
mirror(root);
inOrderTraversal(root); // to see the mirrored tree

// https://www.geeksforgeeks.org/binary-search-tree-set-2-delete/
const deleteRecord = (root, key) => {
    
    if (!root) return null;

    if (key<root.data) {
        root.left = deleteRecord(root.left, key);
    } else if (key > root.data) {
        root.right =  deleteRecord(roo.right, key);
    } else {

        if(root.left === null) {
            return root.right;
        } else if (root.right === null) {
            return root.left;
        }

        root.data = minValue(root.right);
        root.right = deleteRecord(root.right, root.key);
    }
    return root;
};