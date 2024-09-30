# collision

### Requirement

A function `collision` that determines whether two circles are colliding based on their positions and radii.

<br>

<div align="center">
<a href="https://github.com/hadi14250">
    <img src="images/circles.png" alt="3d cube" width="150" height="150">
  </a>
  <br>
  <br>
</div>

## Output Example

### Example 1:
Input: `(0, 0, 5, 3, 4, 5)`  
Output: `true`

### Example 2:
Input: `(0, 0, 5, 7, 7, 5)`  
Output: `false`

### Example 3:
Input: `(1, 1, 1, 2, 2, 1)`  
Output: `true`

### Example 4:
Input: `(0, 0, 1, 2, 2, 1)`  
Output: `false`

<br>

## Code Explanation

The function performs the following steps:

1. **Calculate the distance between the centers**: The differences in the x and y coordinates of the two circles are calculated.

2. **Use the Pythagorean theorem**: The distance between the centers is computed using the formula: \( \text{distance} = \sqrt{(dx^2 + dy^2)} \).

3. **Sum of the radii**: The sum of the radii of the two circles is calculated.

4. **Collision detection**: If the distance is less than or equal to the sum of the radii, the function returns `true`, indicating a collision. Otherwise, it returns `false`.

### Example Usage
```javascript
function collision(x1, y1, radius1, x2, y2, radius2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const radiusSum = radius1 + radius2;

    return distance <= radiusSum;
}

console.log(collision(0, 0, 5, 3, 4, 5));  // Output: true
console.log(collision(0, 0, 5, 7, 7, 5));  // Output: false
