# distanceBetweenPoints

A function that calculates the distance between two points `a` and `b` in a 2D plane. Each point is represented as an object with `x` and `y` attributes, corresponding to their coordinates.

## Formula

The distance between two points \((x_1, y_1)\) and \((x_2, y_2)\) is calculated using the Pythagorean theorem:

    distance = √((x₂ - x₁)² + (y₂ - y₁)²)


## Code Explanation

The function performs the following steps:

1. **Difference of coordinates**: It computes the difference between the `x` and `y` coordinates of the two points.
2. **Square the differences**: Each of the differences is squared.
3. **Sum and square root**: The squared differences are added together, and the square root of the sum is taken to give the Euclidean distance.

### Example Usage

```javascript
// Example 1: Distance between points (-1, 12.5) and (0.3, 14.7)
const pointA = { x: -1, y: 12.5 };
const pointB = { x: 0.3, y: 14.7 };
console.log(distanceBetweenPoints(pointA, pointB)); // Output: 10.728

// Example 2: Distance between points (0, 0) and (3, 4)
const pointA = { x: 0, y: 0 };
const pointB = { x: 3, y: 4 };
console.log(distanceBetweenPoints(pointA, pointB)); // Output: 5

```

### To Run:

Go to distanceBetweenPoints directory and run node (file_name.js):

- ```cd distanceBetweenPoints```
- ``` node distanceBetweenPoints.js```