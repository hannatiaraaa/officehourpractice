const name = "Rocky";
const score = 90;
let scoreNumber;

if (score > 100 || score < 0) {
  console.log("Nilai invalid");
} else if (score >= 80) {
  console.log(`Nilai ${name} mendapatkan nilai A`);
} else if (score >= 65) {
  scoreNumber = "B";
  console.log(`Nilai ${name} mendapatkan nilai B`);
} else if (score >= 50) {
  scoreNumber = "C";
  console.log(`Nilai ${name} mendapatkan nilai C`);
} else if (score >= 35) {
  scoreNumber = "D";
  console.log(`Nilai ${name} mendapatkan nilai D`);
} else {
  scoreNumber = "E";
  console.log(`Nilai ${name} mendapatkan nilai E`);
}
