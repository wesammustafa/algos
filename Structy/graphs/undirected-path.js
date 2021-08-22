const undirectedPath = (edges, nodeA, nodeB) => {
    // build graph from edges;
    const graph = buildGraph(edges);
    // check the path from src to dst
    return hasPath(graph, nodeA, nodeB, new Set());
  };
  
  const hasPath = (graph, src, dst, visited) => {
    if (src === dst) return true;
    
    if (visited.has(src)) return false;
    
    visited.add(src);
    
    for (let neighbor of graph[src]) {
      if (hasPath(graph, neighbor, dst, visited)) return true;
    }
    
    return false;
  }
  
  const buildGraph = (edges) => {
    const graph = {};
    
    for (let edge of edges) {
      const [a, b] = edge;
      if (!(a in graph)) graph[a] = [];
      if (!(b in graph)) graph[b] = [];
      graph[a].push(b);
      graph[b].push(a);
    }
    
    return graph;
  }
  
  
  
  module.exports = {
    undirectedPath
  }
  
  
  
  
  
  