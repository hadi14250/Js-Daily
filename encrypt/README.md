# encrypt

A function that takes a 9-character word (all lowercase letters from "a" to "z") and returns a jumbled string according to specific rules. If the input doesn't meet the requirements, the function returns "BANG!" with no second chances.

## Conditions

1. The input string must be exactly 9 characters long and consist only of lowercase English letters.
2. If the input does not meet these requirements (or if no input is provided), the function returns `"BANG!"`.

The string is divided into three equal parts of 3 characters each:
- **Part 1 (first three letters)**: The first and third letter are converted to their respective positions in the alphabet (e.g., 'a' = 1, 'b' = 2, ..., 'z' = 26).
- **Part 2 (middle three letters)**: These are reversed.
- **Part 3 (last three letters)**: Each letter is replaced by the next letter in the alphabet (with 'z' wrapping to 'a').

Finally, the returned string is constructed in the following order: Part 2 + Part 3 + Part 1.

## Output Example

### Example 1:
Input: `"jamesbond"`  
Output: `"bsepoe10a13"`

### Example 2:
Input: `"I'll kill you, 007!"`  
Output: `"BANG!"`  
Explanation: The input doesn't meet the requirement of being 9 lowercase letters.

<br>

## Code Explanation

1. **Input validation**: The function first checks if the input string is 9 characters long and only contains lowercase letters. If not, it returns `"BANG!"`.

2. **Splitting the string**: The string is divided into three parts. Each part undergoes specific transformations:
   - Part 1: Converts the first and third letters to their alphabetic positions, while the second letter remains unchanged.
   - Part 2: Reverses the middle three characters.
   - Part 3: Shifts each of the last three letters to the next in the alphabet, with 'z' turning into 'a'.

3. **Return the final result**: The result is returned by concatenating Part 2, Part 3, and Part 1 in the specified order.

### Example Usage

```javascript
function isLowerAlpha(str) {
  return [...str].every((char) => char >= "a" && char <= "z");
}

function encrypt(passcode) {
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

console.log(encrypt("jamesbond"));   // Output: "bsepoe10a13"
