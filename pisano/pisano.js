function pisano(n) {
    if (n === 1) return 1;

    let previous = 0;
    let current = 1;
    let periodLength = 0;
    while (true) {
        let next = (previous + current) % n;
        previous = current;
        current = next;
        periodLength++;
        if (previous === 0 && current === 1) {
            break;
        }
    }
    return periodLength;
}

// Test:
console.log(pisano(3)); // Output: 8
console.log(pisano(10)); // Output: 60
