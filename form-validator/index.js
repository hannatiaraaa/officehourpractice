const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPass = document.querySelector("#confirmPassword");
const submit = document.querySelector("#submitBtn");

submit.addEventListener("click", (e) => {
  e.preventDefault();

  if (email.value.trim() === "") {
    setError(email, "This field can't be empty");
  } else if (!validateEmail(email.value)) {
    setError(email, "This email format is invalid");
  } else {
    setSuccess(email);
  }

  if (password.value.trim() === "") {
    setError(password, "This field can't be empty");
  } else if (password.value.length < 8) {
    setError(password, "Password has to be more than 8 characters");
  } else {
    setSuccess(password);
  }

  if (confirmPassword.value.trim() === "") {
    setError(confirmPassword, "This field can't be empty");
  } else if (password.value !== confirmPass.value) {
    setError(confirmPassword, "Password are not the same");
  } else {
    setSuccess(confirmPassword);
  }
});

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function setError(input, message) {
  const form = input.parentElement;
  const span = form.querySelector("span");
  span.style.display = "block";
  span.innerText = message;
}

function setSuccess(input) {
  const form = input.parentElement;
  const span = form.querySelector("span");
  span.style.display = "none";
}
