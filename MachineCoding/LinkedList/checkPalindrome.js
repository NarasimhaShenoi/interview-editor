// check if linked list is palindrome or not
const checkPalindrome = (root) => {
    let flist = blist = '';
    const iterateLinkedList = root => {
        if(!root) return;
        flist =  flist +  root.data;
        blist =  root.data + blist;
        iterateLinkedList(root.next); 
    };
    iterateLinkedList(root);
    console.log({blist, flist});
    if(flist === blist) return true;
    return false;
};

checkPalindrome(one);