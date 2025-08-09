let mothersPromise = new Promise(function(resolve, reject) {
  let homeworkDone = false; // change to false to see the reject case

  if (homeworkDone) {
    resolve("🎁 Mom: You did your homework! Here's your toy.");
  } else {
    reject("😠 Mom: No toy until you finish your homework!");
  }
});

mothersPromise
  .then(function(result) {
    console.log("Son: " + result);
  })
  .catch(function(error) {
    console.log("Son: " + error);
  });
