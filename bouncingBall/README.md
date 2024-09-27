# bouncingBall

A function that simulates a ball being dropped from a certain height and bouncing back. The ball is seen passing a window each time it falls or bounces above the window height. The function returns the number of times the ball passes the window.

## Conditions

Three conditions must be met for a valid experiment:
1. The height `h` (in meters) must be greater than 0.
2. The bounce factor `bounce` must be greater than 0 and less than 1.
3. The window height `window` must be less than the initial height `h`.

If all conditions are satisfied, the function will return the number of times the ball is seen passing the window. If not, the function will return `-1`.

## Output Example

### Example 1:
Input: `h = 3, bounce = 0.66, window = 1.5`  
Output: `3`

### Example 2:
Input: `h = 3, bounce = 1, window = 1.5`  
Output: `-1`  
Explanation: Condition 2 is not fulfilled (`bounce` must be less than 1).

<br>

## Code Explanation

The function performs the following steps:

1. **Initial checks**: It first checks if the height (`h`), bounce factor (`bounce`), and window height (`window`) meet the required conditions. If not, the function returns `-1`.

2. **Count the ball passes**: The function uses a loop to simulate the ball falling and bouncing. Each time the ball falls and is seen passing the window, it increments the count. If the ball bounces high enough to pass the window again, the count is incremented again.

3. **Terminate when height is too low**: The loop continues until the height of the bounce becomes less than or equal to the window height.

### Example Usage

```javascript
console.log(bouncingBall(3, 0.66, 1.5));   // Output: 3
console.log(bouncingBall(3, 1, 1.5));      // Output: -1
