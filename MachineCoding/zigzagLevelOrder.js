/**
 * https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/submissions/
 * 
 * 
 * @param {*} root 
 * @returns 
 */
let zigzagLevelOrder = function(root) {
    let results = [];
    const lot = (node, level) => {
        if(!node) return;
        if(results[level]) {
            results[level].push(node.val);
        } else {
            results[level] = [node.val];
        }
        
         lot(node.left, level+1);
         lot(node.right, level+1);
    };
    lot(root, 0);
    return results.map((result, index) => (index%2===0)? result: result.reverse());
};