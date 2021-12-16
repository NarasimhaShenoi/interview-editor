const sortRestParam = (...args) => {
    let sortedArray =  args.sort();
    return sortedArray;
}

console.log(sortRestParam(5,4,3,2,1));

const sortArguments = () => {
    // arguments.sort() will not work since arguments is not an array
    let argsArray = Array.from(arguments);
    let sortedArray = argsArray.sort();
    return sortedArray; 
}

console.log(sortArguments(5,4,3,2,1));