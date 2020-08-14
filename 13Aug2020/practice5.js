/**

Drone Position
==============

Implementasikan function dronePosition untuk mencari koordinat drone yang
ada di dalam `grid`. Drone akan direpresentasikan sebagai karakter '*'.

Format koordinat: <baris>, <kolom>

# Asumsi:
- Drone ('*') selalu berjumlah 1, tidak mungkin ada drone lain

Contoh input ada di test case.

# Aturan coding:
- WAJIB menyertakan algoritma / pseudocode

*/

function dronePosition(grid) {
  let xPos = 0;
  let yPos = 0;
  let hasDrone = false;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "*") {
        xPos = j;
        yPos = i;
        hasDrone = true;
      }
    }
  }

  if (hasDrone === false) {
    return "NO DRONE";
  }
  return [xPos, yPos];
}

console.log(
  dronePosition([
    ["", "", ""],
    ["", "", ""],
    ["", "", "*"],
  ])
); // 2, 2

console.log(
  dronePosition([
    ["", "", ""],
    ["", "*", ""],
    ["", "", ""],
  ])
); // 1, 1

console.log(
  dronePosition([
    ["", "", "*"],
    ["", "", ""],
    ["", "", ""],
  ])
); // 0, 2

console.log(
  dronePosition([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ])
); // No drone
