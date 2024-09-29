# betterThanAverage

A function that determines if a student has scored better than the average score of their classmates on a test. The function takes an array of peer test scores and the score of the student, returning `true` if the student's score is above average, and `false` otherwise.

## Code Explanation

The function performs the following steps:

1. **Convert Class Points**: It converts all class scores to numbers (if they aren't already).
2. **Calculate Average**: It sums the scores of the classmates and divides by the number of classmates to find the average score.
3. **Comparison**: It compares the student's score to the calculated average and returns `true` if the student's score is higher, and `false` if it is not.

### Example Usage

```javascript
// Example 1: Class scores [2, 3], student's score 5
console.log(betterThanAverage([2, 3], 5)); // Output: true

// Example 2: Class scores [100, 40, 34, 57, 29, 72, 57, 88], student's score 75
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)); // Output: true

// Example 3: Class scores [12, 23, 34, 45, 56, 67, 78, 89, 90], student's score 9
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9)); // Output: false
