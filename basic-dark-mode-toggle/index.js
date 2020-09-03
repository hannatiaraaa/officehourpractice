const button = document.querySelector(".btn");
const body = document.querySelector("body");

button.addEventListener("click", () => {
  body.classList.toggle("dark");
});
