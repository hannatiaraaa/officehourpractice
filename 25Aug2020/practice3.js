/* Encrypt me
    Kamu adalah seorang agen rahasia yang ingin mengirimkan pesan ke partnermu,untuk menmbuat kode yang kamu kirim tetap konfidental,
    kamu harus mengikuti sebuah kamus yang dimiliki oleh H8BI (Hacktiv8 Bureau of Investigation)

  Berikut adalah kamus huruf dari HBI
  huruf biasa abcdefghijklmnopqrstuvwxyz
  huruf H8BI  !@#$%^&*()-+1234567890[]{}

  Buatlah sebuah function yang mentranslate kata kata biasa, menjadi kata kata ter enkripsi menggunakan kamus H8BI!

  Note:
  - Selain karakter huruf biasa maka tidak akan di-translate

  Contoh 1:
  encrypt(dimitri) akan menghasilkan => $(1(86(

  Contoh 2:
  encrypt(@wtian) akan menghasilkan => @[8(!2

  Selamat berjuang, agen rahasia..

  RULES:
  ------
  - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE, jika tidak ada maka dianggap tidak mengerjakan
  - DILARANG MENGGUNAKAN BUILT IN FUNCTION .indexOf !

*/
function encrypt(input) {
  const biasa = "abcdefghijklmnopqrstuvwxyz";
  const h8bi = "!@#$%^&*()-+1234567890[]{}";

  const biasaArr = [];
  for (let i = 0; i < biasa.length; i++) {
    biasaArr.push(biasa[i]);
  }
  const h8biArr = [];
  for (let i = 0; i < h8bi.length; i++) {
    h8biArr.push(h8bi[i]);
  }

  let returnStr = "";
  for (let i = 0; i < input.length; i++) {
    let change = false;

    for (let j = 0; j < biasaArr.length; j++) {
      if (input[i] === biasaArr[j]) {
        returnStr += h8biArr[j];
        change = true;
      }
    }
    if (change === false) {
      returnStr += input[i];
    }
  }
  return returnStr;
}

console.log(encrypt("dimitri")); // $(1(86(
console.log(encrypt("irsyah mardiah")); //(67{!* 1!6$(!*
console.log(encrypt("dimitr€€")); // $(1(86€€
console.log(encrypt("d!mas")); // $!1!7
console.log(encrypt("@wtian")); // @[8(!2
