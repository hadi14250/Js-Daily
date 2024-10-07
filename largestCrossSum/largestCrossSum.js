function largestCrossSum(matrix) {
    if (matrix.length === 0) return 0;

    const rows = matrix.length;
    const cols = matrix[0].length;

    const rowSums = new Array(rows).fill(0);
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            rowSums[i] += matrix[i][j];
        }
    }
    const colSums = new Array(cols).fill(0);
    for (let j = 0; j < cols; j++) {
        for (let i = 0; i < rows; i++) {
            colSums[j] += matrix[i][j];
        }
    }

    let maxCrossSum = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const crossSum = rowSums[i] + colSums[j] - matrix[i][j];
            maxCrossSum = Math.max(maxCrossSum, crossSum);
        }
    }
    return maxCrossSum;
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(largestCrossSum(matrix));
