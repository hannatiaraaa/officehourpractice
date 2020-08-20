/*
==================================
Array Mastery: Fish Filter
==================================
[INSTRUKSI]
Fish Filter merupakan fungsi untuk menyaring data kumpulan spesies laut dan akan mengembalikan spesies
yang berisi kumpulan ikan dalam bentuk string
[CONTOH]
input: ['ikan indosiar', 'gurita', 'cumi-cumi', 'ikan bandeng']
output: ikan indosiar, dan ikan bandeng
[RULE]
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .splice, .slice, .filter, dan .reduce!
*/

function fishFilter(fishes) {
  const returnArr = [];

  //loop ke masing-masing nama ikan
  for (let i = 0; i < fishes.length; i++) {
    //bikin array dari tiap kata di nama ikan
    const nameArr = [];
    let str = "";
    for (let j = 0; j < fishes[i].length; j++) {
      if (fishes[i][j] !== " ") {
        str += fishes[i][j];
      } else {
        nameArr.push(str);
        str = "";
      }
    }
    nameArr.push(str);
    // console.log(nameArr);

    //cek apakah ada kata "ikan" di slah satu array
    for (let j = 0; j < nameArr.length; j++) {
      if (nameArr[j] === "ikan") {
        returnArr.push(fishes[i]); // push nama ikan ke return array
      }
    }
  }

  if (!returnArr.length) {
    return `Tidak ada data`;
  }

  // return returnArr;

  // untuk return string seperti yg diminta output
  let returnStr = "";
  for (let i = 0; i < returnArr.length; i++) {
    if (i === returnArr.length - 1) {
      returnStr += `dan ${returnArr[i]}`;
    } else {
      returnStr += `${returnArr[i]}, `;
    }
  }
  return returnStr;
}

// TEST CASES
console.log(
  fishFilter(["ikan indosiar", "gurita", "cumi-cumi", "ikan bandeng"])
); // ikan indosiar, dan ikan bandeng
console.log(fishFilter(["gurita", "ikan kerapu", "ikan hiu"])); // ikan kerapu, dan Ikan hiu
console.log(
  fishFilter([
    "bintang laut",
    "spongebob",
    "patrick",
    "ikan paus",
    "ikan hiu",
    "ikan tongkol",
  ])
); // ikan paus, ikan hiu, dan ikan tongkol
console.log(fishFilter(["gurita", "udang"])); // tidak ada data
