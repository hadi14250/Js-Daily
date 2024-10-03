function jumpTo(x, y) {
    let queue = [[x, 0]];
    let visited = new Set();
    while (queue.length > 0) {
      let [pos, steps] = queue.shift();
      if (pos === y) return steps;
      if (visited.has(pos)) continue;
      visited.add(pos);
      if (pos + 1 <= y && !visited.has(pos + 1))
        queue.push([pos + 1, steps + 1]);
      if (pos * 2 <= y && !visited.has(pos * 2))
        queue.push([pos * 2, steps + 1]);
    }
    return -1;
  }