# descendingOrder

### Requirement

A function `descendingOrder` that accepts a non-negative integer and returns it with its digits rearranged in descending order to create the highest possible number.

## Output Example

### Example 1:
Input: `42145`  
Output: `54421`

### Example 2:
Input: `145263`  
Output: `654321`

### Example 3:
Input: `123456789`  
Output: `987654321`

### Example 4:
Input: `0`  
Output: `0`

<br>

## Code Explanation

The function performs the following steps:

1. **Convert the number to a string**: The input number `n` is converted to a string using the toString() method.

2. **Split the string into an array**: The string is split into an array of its characters (digits) using `split("")`.

3. **Sort the digits**: The array is sorted in *`ASCENDING`* order first which then are sorted in `descending` order using the reverse() method which reverses an array.

4. **Join the sorted array**: The sorted array of digits is joined back into a single string.

5. **Convert back to a number**: The final string is converted back to a number using the unary plus (`+`) operator.

### Example Usage
```javascript
console.log(descendingOrder(42145));     // Output: 54421
console.log(descendingOrder(145263));    // Output: 654321
console.log(descendingOrder(123456789)); // Output: 987654321
console.log(descendingOrder(0));          // Output: 0
```

<br>