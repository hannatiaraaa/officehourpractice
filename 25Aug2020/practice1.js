/*
==================================
Array Mastery: Average Length Word
==================================
Nama:________
[INSTRUKSI]
Disediakan sebuah kalimat. Function averageLengthWord akan menerima satu parameter berupa string
yang berisikan kalimat tersebut, dan akan mendapatkan rata-rata jumlah huruf dari setiap kata,
kemudian mengembalikan nilai berupa array of string yang berisikan kata mana saja yang jumlahnya
sama dengan rata-rata jumlah kata.

NOTE:
 - Spasi tidak dihitung
 - Jika hasil rata-rata adalah desimal maka dibulatkan

[CONTOH]
input (kalimat): Do you want to become a great coder.
rata-rata panjang kata dalam kalimat: 3
output: ['you']

input (kalimat): You dont know what you have until you lose it!.
rata-rata panjang kata dalam kalimat: 4
output: ['dont', 'know', 'what', 'have', 'lose']
*/

function averageLengthWord(words) {
  const wordArr = [];
  let word = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i] !== " ") {
      word += words[i];
    } else {
      wordArr.push(word);
      word = "";
    }
  }
  wordArr.push(word);
  //   console.log(wordArr);

  const wordLength = [];
  for (let i = 0; i < wordArr.length; i++) {
    let count = 0;
    for (let j = 0; j < wordArr[i].length; j++) {
      count++;
    }
    wordLength.push(count);
  }
  //   console.log(wordLength);

  let avgNum;
  let count = 0;
  for (let i = 0; i < wordLength.length; i++) {
    count += wordLength[i];
    // console.log(count);
  }
  avgNum = Math.round(count / wordLength.length);
  //   console.log(avgNum);

  const returnArr = [];
  for (let i = 0; i < wordArr.length; i++) {
    if (wordArr[i].length === avgNum) {
      returnArr.push(wordArr[i]);
    }
  }
  return returnArr;
}

console.log(averageLengthWord("dd dddd dddddd dddddddd"));
console.log(averageLengthWord("Do you want to become a great coder ?")); // ['you']
console.log(
  averageLengthWord("You dont know what you have until you lose it!")
); // [ 'dont','know','what','have','lose']
console.log(averageLengthWord("I am diligent")); // []
