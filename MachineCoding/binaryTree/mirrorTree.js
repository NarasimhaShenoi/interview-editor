
const mirror = root => {
    if(!root) return null;

    let left = mirror(root.left);
    let right = mirror(root.right);
    
    root.left = right;
    root.right = left;
    return root;
}
mirror(root);