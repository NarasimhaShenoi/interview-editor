// https://practice.geeksforgeeks.org/problems/count-pairs-whose-sum-is-equal-to-x/1/?company[]=Amazon&company[]=Amazon&problemType=functional&page=2&query=company[]AmazonproblemTypefunctionalpage2company[]Amazon

const countPairs = (head1, head2, x) => {
    //your code here
    let hashmap = {};
    let count = 0;
    
    // iterating through first linked list
    while(head1 !== null) {
        hashmap[head1.data] = true;
        head1 = head1.next;
    }
    
    //iterating through second element
    while(head2 !== null) {
        let rem = x - head2.data;
        if(hashmap[rem]) {
            count++;
        }
        head2 = head2.next;
    }
    
    return count;
};
