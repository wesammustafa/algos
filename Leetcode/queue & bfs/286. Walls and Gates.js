/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function (rooms) {
  const rows = rooms.length;
  const cols = rooms[0].length;
  const queue = new Array();
  const visited = [...Array(rows)].map((r) => new Array(cols).fill(false));

  function addRooms(r, c) {
    const checkValidation =
      r < 0 ||
      r == rows ||
      c < 0 ||
      c == cols ||
      visited[r][c] ||
      rooms[r][c] == -1;

    if (checkValidation) return;
    queue.push([r, c]);
    visited[r][c] = true;
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (rooms[r][c] == 0) {
        queue.push([r, c]);
        visited[r][c] = true;
      }
    }
  }

  let dist = 0;

  while (queue.length) {
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      let [r, c] = queue.shift();

      rooms[r][c] = dist;

      addRooms(r + 1, c);
      addRooms(r - 1, c);
      addRooms(r, c + 1);
      addRooms(r, c - 1);
    }

    dist += 1;
  }
};
