const pass = document.querySelector("#password");
const confirmPass = document.querySelector("#confirmPassword");
const alertSuccess = document.querySelector("#alertSuccess");
const alertDanger = document.querySelector("#alertDanger");

confirmPass.addEventListener("keyup", () => {
  if (pass.value == confirmPass.value) {
    alertSuccess.style.display = "block";
    alertDanger.style.display = "none";
  } else {
    alertSuccess.style.display = "none";
    alertDanger.style.display = "block";
  }
});

pass.addEventListener("keyup", () => {
  if (pass.value == confirmPass.value) {
    alertSuccess.style.display = "block";
    alertDanger.style.display = "none";
  } else {
    alertSuccess.style.display = "none";
    alertDanger.style.display = "block";
  }
});
