# Solve Linear Equations

```
a + b = c + x
```

## Function Overview

The `solve` function takes a string representation of a linear equation and calculates the value of `x`.

### Function Definition

```javascript
function solve(expression) {
    ...
}
```

### Parameters

- **`expression`**: A string that represents the linear equation to be solved.

### Example Input

```javascript
const result = solve("3 + 5 = x - 2"); // Returns 10
```

## Explanation of the Code

### 1. Removing Whitespace

```javascript
expression = expression.replace(/\s+/g, '');
```

- This line removes all whitespace characters from the input string using a regular expression.
- 's' will look for white spaces.
- '+' will look for more than one white space.
- 'g' will search globally and will not stop at the first match. 

### 2. Splitting the Equation

```javascript
let [left, right] = expression.split('=');
```

- The equation is split into two parts: the left side (`left`) and the right side (`right`) based on the `=` sign.

In Javascript, the above code is called array desctrucuting, ex:
```
    let [one, two, three] = function returnArray() {
        return [1, 2, 3];
}
```

The result will be: one = 1, two = 2, three = 3.

### 3. Splitting Terms

```javascript
const leftTerms = left.split(/(?=[+-])/);
const rightTerms = right.split(/(?=[+-])/);
```

- This splits both sides of the equation into individual terms while preserving their signs (`+` or `-`).
- '?' specifies that we do not want to exlude the '+' or '-' preserving them after split.
- [] creates a character class to look for either '+' or '-'.

### 4. Processing Left Terms

```javascript
leftTerms.forEach(term => {
    if (term.includes('x')) {
        leftXCoefficient += eval(term.replace('x', '1'));
    } else {
        leftConstant += eval(term);
    }
});
```

- **Purpose**: This code processes each term on the left side of the equation to separate the coefficients of `x` from the constant terms.

1. **Iterating Over Terms**:
   - `leftTerms.forEach(term => {...})` iterates through each term in the `leftTerms` array.

2. **Checking for `x`**:
   - `if (term.includes('x'))` checks whether the current term contains the variable `x`. 
   - This determines whether the term is contributing to the coefficient of `x` or is simply a constant.

3. **Calculating Coefficient of `x`**:
   - If the term includes `x`, we calculate its contribution to the coefficient of `x`.
   - `leftXCoefficient += eval(term.replace('x', '1'));`:
     - `term.replace('x', '1')` replaces `x` with `1`, allowing us to evaluate the term as if `x` were `1`. 
     - For example, if the term is `3x`, this becomes `3 * 1`, resulting in `3`.
     - The `eval` function evaluates the modified term, and the result is added to `leftXCoefficient`.

4. **Accumulating Constant Terms**:
   - If the term does not include `x`, it is treated as a constant.
   - `leftConstant += eval(term);`:
     - The `eval` function is used to evaluate the term directly, adding its value to `leftConstant`.

### 5. Processing Right Terms

The same logic is applied to the right side of the equation:

```javascript
rightTerms.forEach(term => {
    if (term.includes('x')) {
        rightXCoefficient += eval(term.replace('x', '1'));
    } else {
        rightConstant += eval(term);
    }
});
```

- **Purpose**: This code processes each term on the right side of the equation in the same manner as the left side.

1. **Iterating Over Terms**:
   - `rightTerms.forEach(term => {...})` iterates through each term in the `rightTerms` array.

2. **Checking for `x`**:
   - `if (term.includes('x'))` checks if the current term contains `x`, determining its contribution.

3. **Calculating Coefficient of `x`**:
   - If `x` is present, we calculate its contribution:
   - `rightXCoefficient += eval(term.replace('x', '1'));`:
     - The term is modified to replace `x` with `1`, allowing for evaluation.
     - The evaluated result is added to `rightXCoefficient`.

4. **Accumulating Constant Terms**:
   - If the term does not contain `x`, it is treated as a constant:
   - `rightConstant += eval(term);`:
     - The term is evaluated and its value added to `rightConstant`.

### 6. Calculating `x`

```javascript
const x = (rightConstant - leftConstant) / (leftXCoefficient - rightXCoefficient);
```

- This line calculates the value of `x` using the formula derived from rearranging the equation. It finds the difference between constants and coefficients, implementing the formula:
  \[
  x = \frac{(d - b)}{(a - c)}
  \]

## Usage

To use this function, simply call it with a string representing a linear equation:

```javascript
const result = solve("equation");
```

#### Example Usage
```console.log("x is:", solve("x     - 2     =    4   "))```

#### To Run

Go to terminal and run:
``` node solveForX.js```

