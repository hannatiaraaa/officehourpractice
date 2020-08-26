/*

=======================
Initial Object Grouping
=======================

[INSTRUCTION]

Disediakan sebuah function initialObjectGrouping yang bertugas untuk menerima sebuah parameter
berupa array satu dimensi berisikan nama-nama. Function initialObjectGrouping akan
mengelompokkan nama-nama tersebut berdasarkan huruf depannya dan dipisahkan ke dalam
sebuah object.


[EXAMPLE]
Input: ['Budi', 'Badu', 'Joni', 'Jono']
Proses:
Huruf depan yang ditemukan: B dan J
Pisahkan nama yang depannya B, dan nama yang depannya J. Masukkan ke object berdasarkan huruf Awal nama

{
  B: ['Budi', 'Badu'],
  J: ['Joni', 'Jono']
}

[CONSTRAINTS]
Dilarang menggunakan sintaks Set atau Regex

*/

function initialObjectGrouping(studentsArr) {
  // get initial array
  const initialArr = [];
  for (let i = 0; i < studentsArr.length; i++) {
    let isDoubled = false;
    for (let j = 0; j < initialArr.length; j++) {
      if (studentsArr[i][0] === initialArr[j]) {
        isDoubled = true;
      }
    }
    if (isDoubled === false) {
      initialArr.push(studentsArr[i][0]);
    }
  }
  // console.log(initialArr);

  // fill out the array based on the initial array
  const returnArr = [];
  for (let i = 0; i < initialArr.length; i++) {
    const innerArr = [initialArr[i]];
    for (let j = 0; j < studentsArr.length; j++) {
      if (initialArr[i] === studentsArr[j][0]) {
        innerArr.push(studentsArr[j]);
      }
    }
    returnArr.push(innerArr);
  }

  return returnArr;
}

console.log(initialObjectGrouping(["Budi", "Badu", "Joni", "Jono"]));
/*
{
  B: [ 'Budi', 'Badu' ],
  J: [ 'Joni', 'Jono' ]
}
*/

console.log(
  initialObjectGrouping(["Mickey", "Yusuf", "Donald", "Ali", "Gong"])
);
/*
{
  M: [ 'Mickey' ],
  Y: [ 'Yusuf' ],
  D: [ 'Donald' ],
  A: [ 'Ali' ],
  G: [ 'Gong' ]
}
*/

console.log(
  initialObjectGrouping(["Rock", "Stone", "Brick", "Rocker", "Sticker"])
);
/*
{
  R: [ 'Rock', 'Rocker' ],
  S: [ 'Stone', 'Sticker' ],
  B: [ 'Brick' ]
}


*/
