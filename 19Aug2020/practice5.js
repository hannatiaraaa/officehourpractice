/**
CSV to Object
==============
Implementasikan function `csvToObject` untuk merubah string yang
diberikan menjadi sebuah object baru.
`csvToObject` menerima 2 parameter yaitu `keys` dan `values`
yang merupakan sebuah CSV (Comma Separated Values)
Keys & values di dalam object baru nantinya akan diambil dari kedua
parameter yang diberikan.
Contoh:
- Input: 'name,age', 'Aang,112'
  Output: { name: 'Aang', age: '112' }
- Input: 'title,description,content', 'Foobar,Foo and Bar,Foobar content'
  Output: { title: 'Foobar', description: 'Foo and Bar', content: 'Foobar Content' }
- Input: '', ''
  Output: { }
*/

function csvToObject(keys, values) {
  const keyArr = [];
  let keyStr = "";
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] !== ",") {
      keyStr += keys[i];
    } else {
      keyArr.push(keyStr);
      keyStr = "";
    }
  }
  keyArr.push(keyStr);

  const valueArr = [];
  let valueStr = "";
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== ",") {
      valueStr += values[i];
    } else {
      valueArr.push(valueStr);
      valueStr = "";
    }
  }
  valueArr.push(valueStr);

  const returnObj = {};
  if (!keys) {
    return returnObj;
  }

  for (let i = 0; i < keyArr.length; i++) {
    returnObj[keyArr[i]] = valueArr[i];
    // returnObj["name"] = "Dimitri"
  }
  return returnObj;
}

console.log(csvToObject("name,phoneNumber", "Dimitri,+666123654"));
// { name: 'Dimitri', phoneNumber: '+666123654' }

console.log(
  csvToObject("firstName,lastName,nationality", "Sergei,Dragunov,Russia")
);
// { firstName: 'Sergei', lastName: 'Dragunov', nationality: 'Russia' }

console.log(csvToObject("", ""));
// { }
