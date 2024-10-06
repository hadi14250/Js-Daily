const wordle = (guess, answer) => {
  if (guess === answer) return "g-g-g-g-g";
  let result = ["b", "b", "b", "b", "b"];
  let answerCount = [];

  for (let i = 0; i < 5; i++) {
    if (guess[i] === answer[i]) {
      result[i] = "g";
    } else {
      answerCount[answer[i]] =
        answerCount[answer[i]] === undefined
          ? 1
          : (answerCount[answer[i]] += 1);
    }
  }

  for (let i = 0; i < 5; i++) {
    if (result[i] === "g") continue;
    if (answerCount[guess[i]]) {
      result[i] = "y";
      answerCount[guess[i]]--;
    }
  }

  return result.join("-");
};

console.log(wordle("xxxxx", "xxxxx"));
