/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * https://leetcode.com/problems/intersection-of-two-arrays-ii/
 */
 var intersect = function(num1, num2) {
    let hashmap = num1.reduce((acc,curr) => {
        if(acc[curr]) {
            acc[curr]++;
        } else {
            acc[curr] = 1;
        }
        return acc;
    }, {});
    
    return num2.reduce((acc, curr) => {
        if(hashmap[curr]) {
            acc.push(curr);
            hashmap[curr]--;
        }
        return acc;
    }, [])
};
