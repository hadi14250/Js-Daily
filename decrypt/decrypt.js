import {encrypt} from "../encrypt/encrypt.js"

function isLowerAlpha(str) {
    return [...str].every((char) => char >= "a" && char <= "z");
  }

function decrypt(encryptedPasscode) {
    let arr1,
    arr2,
    arr3,
    match = "";
    

    match = encryptedPasscode.slice(6).match(/(\d+)([a-zA-Z])(\d+)/);

    arr1 = String.fromCharCode(Number(match[1]) + 96) + match[2] + String.fromCharCode(Number(match[3]) + 96);

    arr2 = [...encryptedPasscode.substr(0, 3)].reverse().join("");
    arr3 = [...encryptedPasscode.substr(3, 3)].map((char) => char === "a" ? "z" : String.fromCharCode(char.charCodeAt(0) - 1)).join("");

    const passcode = arr1 + arr2 + arr3;
    if (passcode.length !== 9 || !isLowerAlpha(passcode)) return "WRONG PASSCODE TO DECRYPT";
    return (passcode);
}


console.log("Encrypting jamesbond turned into:", encrypt("jamesbond"));

console.log("Decrypting bsepoe10a13 turned into:", decrypt(encrypt("jamesbond")));