# nTimes2ToPowerOfx

### Requirement

You are given a function `nTimes2ToPowerOfx` that accepts two positive integers in the specified order, `n` and `x`, and returns the result of `n * Math.pow(2, x)`. However, there is one condition: you must shorten the code to meet the strict character count requirement of **11 characters maximum** (without altering how the function behaves for positive integers).

## Solution

```javascript
const nTimes2ToPowerOfx=(n,x)=>n<<x
```

## Number of Characters

The function code contains **11 characters**: `(n,x)=>n<<x`. This code takes advantage of JavaScript's arrow function syntax, which is a concise way of declaring functions. 

- Everything before the arrow `=>` represents the function's arguments.
- Everything after the `=>` is the function code.

There is no need for a return statement if the arrow function is not defined within curly braces.

<br>

#### Example 1: No Return Statement Required

The expression `n<<x` will be automatically returned:

```javascript
const nTimes2ToPowerOfx=(n,x)=>n<<x
```
<br>

#### Example 2: Return Statement Required

If you enclose the function code in curly braces, the compiler will require a return statement, this also exceeds the maximum character count:

```javascript
const nTimes2ToPowerOfx=(n,x)=>{ return n<<x }
```

<br>

### Code Explanation

- `const nTimes2ToPowerOfx = (n, x) =>` declares an arrow function named `nTimes2ToPowerOfx` that takes two parameters: `n` and `x`.
- `n << x` uses the left shift bitwise operator, which effectively calculates `n * 2^x`. This is a more efficient way to compute powers of two compared to using `Math.pow(2, x)`.
- The function returns the result of the bitwise operation directly because it is an expression.

<br>