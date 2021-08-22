const connectedComponentsCount = (graph) => {
    const visited = new Set();
    let count = 0;
    // Traverse every node in the graph 
    for (let node in graph) {
      console.log(visited)
    // Use Depth first to Traverse each component in the graph
      if (explore(graph, node, visited)) {
        count += 1;
      }
    }
    
    return count;
  };
  
  
  const explore = (graph, node, visited) => {
    if (visited.has(String(node))) return false;
    
    visited.add(String(node));
    
    for (let neighbor of graph[node]) {
      explore(graph, neighbor, visited)
    }
    
    return true;
  }
  
  
  module.exports = {
    connectedComponentsCount
  };