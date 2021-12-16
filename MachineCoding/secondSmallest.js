function secondSmallest(array) {
    let min = secondMin = Number.POSITIVE_INFINITY;
    for(let i=0;i<array.length;i++){
        if(array[i]<min) {
            secondMin=min;
            min = array[i];
        } else if(array[i]<secondMin) {
            secondMin = array[i];
        }
    }
    return secondMin;
}

secondSmallest([1,2,3,4,5]) // 2
