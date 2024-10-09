# contamination

A function `contamination` that accepts a string `text` and a single character `char`, and returns the `text` after it has been fully "contaminated" (i.e., all characters in the text are replaced by the given `char`). If either the `text` or the `char` is empty, the function returns an empty string.

## Output Example

### Example 1:
Input: `"abc"`, `"z"`  
Output: `"zzz"`

### Example 2:
Input: `"hello"`, `"?"`  
Output: `"?????"`

### Example 3:
Input: `""`, `"z"`  
Output: `""`

### Example 4:
Input: `"infect"`, `""`  
Output: `""`

<br>

## Code Explanation

The function performs the following steps:

1. **Convert the text to an array of characters**: The string `text` is spread into an array of its characters using `[...text]`.

2. **Replace each character**: Each character of the array is replaced with the given character `char` using the `map()` method.

3. **Join the array back into a string**: The array of replaced characters is joined back into a single string using `join("")`.

### Example Usage
```javascript
console.log(contamination("abc", 'z'));      // Output: "zzz"
console.log(contamination("hello", '?'));    // Output: "?????"
console.log(contamination("", 'z'));         // Output: ""
console.log(contamination("infect", ''));    // Output: ""
