function collision(x1, y1, radius1, x2, y2, radius2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const distance = Math.sqrt(dx * dx + dy * dy);

    const radiusSum = radius1 + radius2;

    return (distance <= radiusSum);
}

console.log(collision(0, 0, 5, 3, 4, 5)); // true (circles are colliding)
console.log(collision(0, 0, 5, 7, 7, 5)); // false (circles are not colliding)
