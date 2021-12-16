async function aggregateData() {
    try {
      // executing the promises concurrently
      const facebook = http.get('https://api.facebook.com/v1/user/1234/');
      const linkedin = http.get('https://api.linkedin.com/v1/user/1234/');
      const instagram = http.get('https://api.instagram.com/v1/user/1234/');
      const twitter = http.get('https://api.twitter.com/v1/user/1234/');
      const reddit = http.get('https://api.reddit.com/v1/user/1234/');
      const gmail = http.get('https://api.gmail.com/v1/user/1234/');
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