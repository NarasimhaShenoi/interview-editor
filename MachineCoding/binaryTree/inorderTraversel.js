const inOrderTraversal = (root) => {
    if(!root) return;
    inOrderTraversal(root.left);
    console.log(root.data); 
    inOrderTraversal(root.right);
};

inOrderTraversal(root);