function delay(time) {
    return new Promise((resolve, reject) => {
       if(isNaN(time)) {
           reject(console.error("You have passed a invalid number"));
       } else {
           setTimeout(()=> {
               resolve(console.log("Success....."));
           }, time);
       }
    });
}

async function callDelay(time) {
    console.log("before function call");
    await delay(time);
    console.log("after function call");
}

async function callDelayWithTryCatchBlock(time) {
    try {
        console.log("before function call");
        await delay(time);
        console.log("after function call");
    } catch(e) {
        console.log("promise returned an error: ", e);
    } finally {
        console.log("Executed the finally statement as well");
    }
}

callDelay(4000)
/**
 * 
 * output for the above code:
 
    before function call
    Success.....
    after function call
 
 * 
 */

callDelay('p')

/**
 * 
 * output for the above code:

    before function call
    You have passed a invalid number
 * 
 */