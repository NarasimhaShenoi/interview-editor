/**
 * 
 * @param {*} array 
 * @returns reversed array without using new array
 */

function reverseArray(array) {
    let swap, size=array.length-1;
    for(let i=0;i<array.length/2; i++) {
        swap = array[i];
        array[i]=array[size-i];
        array[size-i]=swap;
    }
    return array;
}

reverseArray([1,2,3,4,5])

reverseArray(['a','b'])
