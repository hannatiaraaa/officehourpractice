/*
=============
UNIQUE FINDER
=============
Name :_____________

[INSTRUCTIONS]
uniqueFinder adalah sebuah function yang menerima satu parameter berupa kalimat.
Function akan mereturn array yang berisi setiap kata yang ditemukan dalam kalimat.
Tidak boleh ada kata yang berulang, dan besar kecil dari kata tidak dianggap.
Sehingga, Hello dan HELLO di anggap kata yang sama.
Function harus mereturn string "NO WORD" jika di kalimat tersebut tidak ditemukan kata apapun.
[CONSTRAINTS]
Tidak ada batasan untuk soal ini.
[EXAMPLE]
uniqueFinder('saya dan SAYA suka makan nasi')
kata unik: saya, dan, suka, makan, nasi
output: ['saya', 'dan', 'suka', 'makan', 'nasi']


[RULE]
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .filter, dan .reduce!
- Dilarang menggunakan .split, indexOf!

*/

function uniqueFinder(sentence) {
  const lowerCaseSentence = sentence.toLowerCase(); // jadiin semua lower case
  // "hello hello hello hlloe"
  // bikin array, yg isinya setiap kalimat [hello, hello, hello, hlleo]
  let newSentence = "";
  const sentenceArr = [];
  for (let i = 0; i < lowerCaseSentence.length; i++) {
    if (lowerCaseSentence[i] === " ") {
      sentenceArr.push(newSentence);
      newSentence = "";
    } else {
      newSentence = newSentence + lowerCaseSentence[i];
    }
  }
  sentenceArr.push(newSentence);

  //[hello, hello, hello, hlleo] => [hello, hlleo]
  const finalSentence = [];
  for (let i = 0; i < sentenceArr.length; i++) {
    let isDouble = false;
    for (let j = 0; j < finalSentence.length; j++) {
      if (sentenceArr[i] === finalSentence[j]) {
        isDouble = true;
      }
    }
    if (isDouble === false) {
      finalSentence.push(sentenceArr[i]); // [hello]
    }
  }
  if (finalSentence[0] === "") {
    return "NO WORDS";
  }
  return finalSentence;
}

console.log(uniqueFinder("hello black dragon and hello red dragon")); // ['hello', 'black', 'dragon', 'and', 'red']
console.log(uniqueFinder("hello HELLo hEllO hlloe")); // ['hello', 'hlloe']
console.log(uniqueFinder("john is coding and he is coding")); // ['john', 'is', 'coding', 'and', 'he']
console.log(uniqueFinder("blue blue red blue violet red violet")); // ['blue', 'red', 'violet']
console.log(uniqueFinder("")); // 'NO WORDS'
