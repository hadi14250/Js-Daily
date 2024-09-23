function solve(expression) {
    expression = expression.replace(/\s+/g, '');
    let [left, right] = expression.split('=');

    const leftTerms = left.split(/(?=[+-])/);
    const rightTerms = right.split(/(?=[+-])/);

    let leftConstant = 0;
    let rightConstant = 0;
    let leftXCoefficient = 0;
    let rightXCoefficient = 0;

    leftTerms.forEach(term => {
        if (term.includes('x')) {
            leftXCoefficient += eval(term.replace('x', '1'));
        } else {
            leftConstant += eval(term);
        }
    });

    rightTerms.forEach(term => {
        if (term.includes('x')) {
            rightXCoefficient += eval(term.replace('x', '1'));
        } else {
            rightConstant += eval(term);
        }
    });

    const x = (rightConstant - leftConstant) / (leftXCoefficient - rightXCoefficient);
    return x;
}

console.log("x is:", solve("x     - 2     =    4   "))
