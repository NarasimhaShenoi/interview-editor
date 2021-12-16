class Node {
    constructor(data) {
        this.next = null;
        this.data =  data;
    }
}

let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
one.next = two;
two.next = three;
three.next = four;

// display the linked list
const displayLinkedList = (root) => {
    if(!root) return;
    console.log(root.data);
    displayLinkedList(root.next);
};

displayLinkedList(one);

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

