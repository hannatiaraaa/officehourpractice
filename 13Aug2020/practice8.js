/**

Virus Percentage
================

Implementasikan function virusPercentage untuk menghitung
persentase virus yang ada. Hanya akan ada 4 tipe virus, yaitu:
- *
- #
- @
- $

# Contoh:
- `input` -> **##@
  output -> 40% *, 40% #, 20% @
- `input` -> **#*##
  output -> 50% *, 50% #

Contoh lain ada di test case

# Asumsi:
- `input` tidak akan pernah kosong
- `input` pasti berisi virus

# Aturan coding:
- DILARANG menggunakan regex

*/

function virusPercentage(input) {
  let counter = 0;
  let virStar = 0;
  let virHash = 0;
  let virAt = 0;
  let virDollar = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "*") {
      virStar++;
      counter++;
    } else if (input[i] === "#") {
      virHash++;
      counter++;
    } else if (input[i] === "@") {
      virAt++;
      counter++;
    } else if (input[i] === "$") {
      virDollar++;
      counter++;
    }
  }

  let returnArr = [];
  if (virStar !== 0) {
    const percentage = (virStar / counter) * 100;
    returnArr.push(`${percentage}% *`);
  }
  if (virHash !== 0) {
    const percentage = (virHash / counter) * 100;
    returnArr.push(`${percentage}% #`);
  }
  if (virAt !== 0) {
    const percentage = (virAt / counter) * 100;
    returnArr.push(`${percentage}% @`);
  }
  if (virDollar !== 0) {
    const percentage = (virDollar / counter) * 100;
    returnArr.push(`${percentage}% $`);
  }

  returnStr = "";
  for (let i = 0; i < returnArr.length; i++) {
    if (i !== 0) {
      returnStr += ", ";
    }
    returnStr += returnArr[i];
  }

  return returnStr;
}

console.log(virusPercentage("**#*##")); // 50% *, 50% #
console.log(virusPercentage("**######")); // 75% #, 25% *
console.log(virusPercentage("**##@")); // 40% *, 40% #, 20% @
console.log(virusPercentage("@")); // 100% @
console.log(virusPercentage("#$*@")); // 25% #, 25% $, 25% *, 25% @
