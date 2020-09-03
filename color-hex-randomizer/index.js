const btn = document.querySelector(".btn");
const h2 = document.querySelector("h2");

btn.addEventListener("click", () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = `#${randomColor}`;
  h2.innerText = `#${randomColor}`;
  console.log("here");
});
