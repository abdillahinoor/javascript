async function motherGivesToy(homeworkDone) {
  if (homeworkDone) {
    return "🎁 Mom: Here's your toy!";
  } else {
    throw "😠 Mom: No toy until you finish your homework!";
  }
}

async function askForToy() {
  try {
    let result = await motherGivesToy(false); // change to true to get the toy
    console.log("Son: " + result);
  } catch (error) {
    console.log("Son: " + error);
  }
}

askForToy();
