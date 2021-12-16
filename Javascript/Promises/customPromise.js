// custom promise
function delay(time) {
    return new Promise((resolve, reject) => {
        if(isNaN(time)) reject(new Error("time is not a valid number"));
        else setTimeout(() => resolve('Promise resolved'), time);
    })
}

delay(1000)
    .then(response => console.log(response))
    .catch(error =>  console.log(error));

delay('x')
    .then(response => console.log(response))
    .catch(error =>  console.log(error));