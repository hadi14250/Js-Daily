# Pisano Period

A function that calculates the length of the Pisano period for a given integer \( n \). The Pisano period is the length of the sequence of Fibonacci numbers taken modulo \( n \) before it starts repeating.

## Conditions

The function should accept a non-negative integer \( n \). The following conditions must be met:
1. \( n \) must be greater than or equal to \( 1 \).

If \( n = 1 \), the function will return \( 1 \) since the sequence is \( 0, 1, 0, 1, \ldots \).

## Output Example

### Example 1:
Input: `n = 3`  
Output: `8`  
Explanation: The Fibonacci sequence modulo \( 3 \) is \( 0, 1, 1, 2, 0, 2, 2, 1 \) with a period of \( 8 \).

### Example 2:
Input: `n = 10`  
Output: `60`  
Explanation: The Fibonacci sequence modulo \( 10 \) has a period of \( 60 \).

### Example Usage

```javascript
console.log(pisano(3));   // Output: 8
console.log(pisano(10));  // Output: 60
