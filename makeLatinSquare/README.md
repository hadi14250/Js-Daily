# Generate a Latin Square

Latin Square is an n × n grid filled with integers 1 to n, each occurring exactly once in each row and column.

## Function Overview

The `makeLatinSquare` function generates a Latin square of any size `n`, where each row contains the integers 1 to `n` without repetition.

### Function Definition

```javascript
function makeLatinSquare(n) {
  const latinSquare = [];
  
  const firstRow = Array.from({ length: n }, (_, i) => i + 1);
  
  for (let i = 0; i < n; i++) {
    latinSquare.push([...firstRow.slice(i), ...firstRow.slice(0, i)]);
  }
  return latinSquare;
}
```

### Parameters
n: A positive integer that defines the size of the Latin square (i.e., the number of rows and columns)

#### the result for ```const result = makeLatinSquare(4);```

#### will be:
```
[
  [1, 2, 3, 4],
  [2, 3, 4, 1],
  [3, 4, 1, 2],
  [4, 1, 2, 3]
]
```

## Code Explanation

#### 1) First Row Creation

```const firstRow = Array.from({ length: n }, (_, i) => i + 1);```

- This line creates the first row of the Latin square, which is an array from 1 to n.

- Array.from({ length: n }) creates an array of length n.

- The _ is a placeholder for the value of each element (not used), while i is the index, and i + 1 gives us the numbers from 1 to n.

#### 2) Creating Each Row

```
for (let i = 0; i < n; i++) {
  latinSquare.push([...firstRow.slice(i), ...firstRow.slice(0, i)]);
}

```

- This loop generates each row of the Latin square.

- For each row, the array is sliced into two parts: one starting from index i to the end, and the other from the beginning to index i.

- These two slices are combined to form the row.

## Usage

```
const result = makeLatinSquare(4);

for(let i = 0; i < result.length; i++)
    console.log(result[i]);
```

### To Run:
- `git clone <repo_url>`
- `cd Js-Daily/makeLatinSquare`
- `node makeLatinSquare.js`