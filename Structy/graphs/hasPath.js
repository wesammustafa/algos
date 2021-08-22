// Depth First Recursive
const hasPath = (graph, src, dst) => {
  if (src === dst) return true;

  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst) === true) return true;
  }

  return false;
};

// Depth First Iterative
const hasPath = (graph, src, dst) => {
  if (src === dst) return true;
  const stack = [src];

  while (stack.length > 0) {
    const current = stack.pop();
    if (current === dst) return true;
    for (let neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }
  return false;
};

// Breadth First Search Iterative
const hasPath = (graph, src, dst) => {
  if (src === dst) return true;

  const queue = [src];

  while (queue.length > 0) {
    const current = queue.shift();
    if (current === dst) return true;
    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }

  return false;
};
