/**
Number Letters
--------------
Implementasikan function `numberLetters` untuk mengganti angka-angka
yang ada di dalam `str` menjadi sebuah huruf yang sesuai dengan aturan:
1 = i
4 = a
3 = e
7 = u
0 = o
Contoh ada di test cases
RULES:
  - Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match
    dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
*/
/**
Number Letters
--------------
Implementasikan function `numberLetters` untuk mengganti angka-angka
yang ada di dalam `str` menjadi sebuah huruf yang sesuai dengan aturan:
1 = i
4 = a
3 = e
7 = u
0 = o
Contoh ada di test cases
RULES:
  - Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match
    dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
*/

function numberLetters(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "1":
        newStr += "i";
        break;
      case "4":
        newStr += "a";
        break;
      case "3":
        newStr += "e";
        break;
      case "7":
        newStr += "u";
        break;
      case "0":
        newStr += "o";
        break;
      default:
        newStr += str[i];
    }
  }
  return newStr;
}

// Test cases
console.log(numberLetters("s3rg31dr4g7n0v")); // sergeidragunov
console.log(numberLetters("j1nk4z4m4")); // jinkazama
console.log(numberLetters("s7m3t4l")); // sumetal
console.log(numberLetters("m04m3t4l")); // moametal
console.log(numberLetters("")); //
