

function distanceBetweenPoints(a, b) {
    return (Math.sqrt(((Math.pow((b.x - a.x), 2)) + (Math.pow((b.y - a.y), 2)))))
  }












  
  // Test case 1: Points with positive coordinates
const pointA1 = { x: 3, y: 4 };
const pointB1 = { x: 6, y: 8 };
console.log(distanceBetweenPoints(pointA1, pointB1)); // Output: 5

// Test case 2: Points with negative coordinates
const pointA2 = { x: -2, y: -3 };
const pointB2 = { x: -5, y: -7 };
console.log(distanceBetweenPoints(pointA2, pointB2)); // Output: 5

// Test case 3: Points at origin and on an axis
const pointA3 = { x: 0, y: 0 };
const pointB3 = { x: 0, y: 10 };
console.log(distanceBetweenPoints(pointA3, pointB3)); // Output: 10

// Test case 4: Points with both negative and positive coordinates
const pointA4 = { x: -1, y: 12.5 };
const pointB4 = { x: 0.3, y: 14.7 };
console.log(distanceBetweenPoints(pointA4, pointB4)); // Output: 10.728

// Test case 5: Distance between the same point
const pointA5 = { x: 5, y: 5 };
console.log(distanceBetweenPoints(pointA5, pointA5)); // Output: 0

// Test case 6: Points very close to each other
const pointA6 = { x: 1.000001, y: 1.000001 };
const pointB6 = { x: 1, y: 1 };
console.log(distanceBetweenPoints(pointA6, pointB6)); // Output: 0.000001414 (approximately)

// Test case 7: Larger coordinate values
const pointA7 = { x: 50, y: 50 };
const pointB7 = { x: -50, y: -50 };
console.log(distanceBetweenPoints(pointA7, pointB7)); // Output: 141.42
