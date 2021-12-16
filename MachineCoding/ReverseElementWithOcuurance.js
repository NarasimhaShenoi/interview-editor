/**
 * 
    Replace every element in an array with its number of occurrence in the same array
    Input1:
    var array[] = {1, 2, 2, 3, 3, 3, 4, 4, 4, 4}
    Output1:
    var array[] = {1, 2, 2, 3, 3, 3, 4, 4, 4, 4}

    Input2:
    var array[] = {4, 3, 3, 2, 2, 2, 1, 1, 1, 1}
    Output2:
    var array[] = {1, 2, 2, 3, 3, 3, 4, 4, 4, 4}
 *
 */
function countNumberOfTimes(array) {
    let occurance = array.reduce((acc, curr) => {
        if(acc[curr]) {
            acc[curr]= acc[curr]+1;
        } else {
            acc[curr] = 1;
        }
        return acc;
    }, {});
    for(let i=0;i<array.length;i++) {
        array[i]= occurance[array[i]];
    }
    return array;
}

countNumberOfTimes([1, 2, 2, 3, 3, 3, 4, 4, 4, 4])

countNumberOfTimes([4, 3, 3, 2, 2, 2, 1, 1, 1, 1])

countNumberOfTimes(['a','b','c','a','a'])
