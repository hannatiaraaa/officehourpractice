/**
--------------------
String Manipulators!
--------------------

Buatlah beberapa function berikut:

1. addTitle, yang menerima 4 parameter yaitu `name1`, `name2`, `name3` dan `name4`.
   Function akan menambahkan 'Mr. ' dan ', ' pada setiap nama dan mengembalikan nilai tersebut.
   Contoh:
   - input: addTitle('Steve Fox', 'Jin Kazama', 'Eddie Gordo', 'Geese Howard')
     output: 'Mr. Steve Fox, Mr. Jin Kazama, Mr. Eddie Gordo, Mr. Geese Howard'

2. changeSpacesWith, yang menerima 2 parameter yaitu `str` dan `to`.
   Function akan mengganti spasi di `str` dengan nilai yang kita berikan lewat parameter `to`
   dan mengembalikan nilai tersebut.
   Contoh:
   - input: changeSpacesWith('Steve Fox', '-')
     output: 'Steve-Fox'
   - input: changeSpacesWith('Sergei Dragunov', '+')
     output: 'Sergei+Dragunov'

3. cutString, yang menerima 1 parameter yaitu `str`.
   Function akan memotong string supaya tersisa 6 karakter dan mengembalikan nilai tersebut.
   Contoh:
   - input: cutString('Kazuya Mishima')
     output: 'Kazuya'
   - input: cutString('Sergei Dragunov')
     output: 'Sergei'
   - input: cutString('Dimitri W')
     output: 'Dimitr'

RULES:
- Dilarang menggunakan regex
- Dilarang menggunakan slice, split, splice, substring

*/

function addTitle(person1, person2, person3, person4) {
  console.log(`Mr. ${person1}, Mr. ${person2}, Mr. ${person3}, Mr. ${person4}`);
}

function changeSpacesWith(str, to) {
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      newString = newString + str[i];
    } else {
      newString = newString + to;
    }
  }
  console.log(newString);
  // const newString = str.replace(" ", to);
  // console.log(newString);
}

function cutString(str) {
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    if (i <= 5) {
      newString = newString + str[i];
    }
  }
  console.log(newString);
}

addTitle("Steve Fox", "Jin Kazama", "Eddie Gordo", "Geese Howard");
changeSpacesWith("Steve Fox", "-");
cutString("Kazuya Mishima");
