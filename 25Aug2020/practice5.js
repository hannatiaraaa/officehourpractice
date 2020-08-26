/**
Highest Top Speed
=================
Implementasikan function `highestTopSpeed` untuk mencari
top speed yang paling tinggi dari data yang diberikan.

Function ini akan menerima satu parameter yaitu `data`
yang memiliki tipe data string.

Di dalam string `data` terdapat nama orang dan top speed orang
tersebut. Tiap orang akan dipisah dengan tanda koma ','
Tugas kamu adalah untuk mencari top speed tertinggi dari
string yang telah diberikan

# Contoh I/O
Contoh input dan output bisa kamu lihat di test case

# Kondisi khusus
- Jika string kosong, maka tampilkan 'No data'

# Constraints
- DILARANG menggunakan built-in function .map, .filter, .reduce
- DILARANG menggunakan built-in object Math
- DILARANG menggunakan built-in function .sort
- DILARANG menggunakan built-in function .indexOf
*/

function highestTopSpeed(data) {
  if (data.length === 0) {
    return "No Data";
  }

  const speedArr = [];
  let name = "";
  for (let i = 0; i < data.length; i++) {
    if (data[i] !== ",") {
      name += data[i];
    } else {
      speedArr.push(name);
      name = "";
    }
  }
  speedArr.push(name);

  const speedArrInt = [];
  for (let i = 0; i < speedArr.length; i++) {
    let speed = "";
    for (let j = 0; j < speedArr[i].length - 5; j++) {
      if (speedArr[i][j] === ":") {
        speed = speedArr[i][j + 1] + speedArr[i][j + 2] + speedArr[i][j + 3];
      }
    }
    speedArrInt.push(parseInt(speed));
  }

  let maxSpeed = speedArrInt[0];
  for (let i = 0; i < speedArrInt.length; i++) {
    if (maxSpeed < speedArrInt[i]) {
      maxSpeed = speedArrInt[i];
    }
  }
  return maxSpeed;
}

console.log(
  highestTopSpeed("Nakazato:140 km/h,Ryosuke:180 km/h,Iketani:110 km/h")
);
// 180

console.log(highestTopSpeed("Bunta:200 km/h,Takumi:180 km/h,Sudo:160 km/h"));
// 200

console.log(highestTopSpeed("Joshima:175 km/h,Hoshino:150 km/h,Inui:175 km/h"));
// 175

console.log(highestTopSpeed(""));
// No data
