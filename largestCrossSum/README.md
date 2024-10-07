# largestCrossSum

The task is to find the largest cross sum in a given matrix. A cross is defined by a specific row and a specific column, and the sum includes all elements in the selected row and column, ensuring that the intersecting element is counted only once.

## Problem Description

Given a matrix, find the cross (row and column) with the largest sum of elements. The matrix may not be square, and all elements will be positive integers.

### Example

For the input matrix:
```
[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
```
The largest cross is formed by the last column `[3, 6, 9]` and the last row `[7, 8, 9]`. 

The sum of the elements is:
```
3 + 6 + 7 + 8 + 9 = 33
```
So the return of `largestCrossSum(matrix)` will be `33`.
