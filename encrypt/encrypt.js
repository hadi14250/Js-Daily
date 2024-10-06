function isLowerAlpha(str) {
  return [...str].every((char) => char >= "a" && char <= "z");
}

export function encrypt(passcode) {
  if (passcode.length !== 9 || !isLowerAlpha(passcode)) return "BANG";
  let arr1,
    arr2,
    arr3 = "";
  arr1 = [...passcode.substr(0, 3)]
    .map((char, index) => (index === 1 ? char : char.charCodeAt(0) - 96))
    .join("");
  arr2 = [...passcode.substr(3, 3)].reverse().join("");
  arr3 = [...passcode.substr(6, 3)]
    .map((char) =>
      char === "z" ? "a" : String.fromCharCode(char.charCodeAt(0) + 1)
    )
    .join("");
  return arr2 + arr3 + arr1;
}

// console.log(encrypt("jamesbond"));
