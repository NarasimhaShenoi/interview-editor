/**
 * Util function to return a promise which is resolved in provided milliseconds
 */
 function waitFor(millSeconds) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, millSeconds);
    });
  }
  
  async function retryPromiseWithDelay(promise, nthTry, delayTime) {
    try {
      const res = await promise;
      return res;
    } catch (e) {
      if (nthTry === 1) {
        return Promise.reject(e);
      }
      console.log('retrying', nthTry, 'time');
      // wait for delayTime amount of time before calling this method again
      await waitFor(delayTime);
      return retryPromiseWithDelay(promise, nthTry - 1, delayTime);
    }
  }
  

async function aggregateData() {
    try {
      const retry = 4;
      const wait = 2000;
      // executing the promises concurrently
      const facebook = retryPromiseWithDelay(
        http.get('https://api.facebook.com/v1/user/1234/'),
        retry,
        wait
      );
      const linkedin = retryPromiseWithDelay(
        http.get('https://api.linkedin.com/v1/user/1234/'),
        retry,
        wait
      );
      const instagram = retryPromiseWithDelay(
        http.get('https://api.instagram.com/v1/user/1234/'),
        retry,
        wait
      );
      const twitter = retryPromiseWithDelay(
        http.get('https://api.twitter.com/v1/user/1234/'),
        retry,
        wait
      );
      const reddit = retryPromiseWithDelay(
        http.get('https://api.reddit.com/v1/user/1234/'),
        retry,
        wait
      );
      const gmail = retryPromiseWithDelay(
        http.get('https://api.gmail.com/v1/user/1234/'),
        retry,
        wait
      );
      // waiting for all of them to settle
      await facebook;
      await linkedin;
      await instagram;
      await twitter;
      await reddit;
      await gmail;
      // this will be resolved immediately as our promises at this point are already
      // resolved
      const results = await Promise.all([
        facebook,
        instagram,
        twitter,
        linkedin,
        reddit,
        gmail
      ]);
      return transform(results);
    } catch (e) {
      throw e;
    }
  }
  
  
aggregateData();