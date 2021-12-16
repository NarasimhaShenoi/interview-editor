function secondLargest(array) {
    let max = secondMax = Number.NEGATIVE_INFINITY;
    for(let i=0;i<array.length;i++){
        if(array[i]>max) {
            secondMax=max;
            max = array[i];
        } else if(array[i]>secondMax) {
            secondMax = array[i];
        }
    }
    return secondMax;
}

secondLargest([5,4,3,2,1])   // 4