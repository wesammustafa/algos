/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  const visited = new Set();
  const keys = [0];
  visited.add(0);

  while (keys.length) {
    const currentKey = keys.pop();
    for (let key of rooms[currentKey]) {
      if (!visited.has(key)) {
        visited.add(key);
        keys.push(key);
      }
    }
  }

  return visited.size === rooms.length;
};
