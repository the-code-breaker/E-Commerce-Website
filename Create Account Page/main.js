const f_name = document.querySelector("#full_name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirm_password = document.querySelector("#password2");
const submitButton = document.querySelector("#submit");
const loading = document.querySelector(".loading");
var noErors = true;

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  setButtonLoading(true);

  validateInputs(f_name);
  validateEmail(email);
  validateInputs(password);
  validateConfirmPasswordInput(confirm_password);

  setTimeout(() => {
    // simulate checking
    setButtonLoading(false);
    if (noErors) {
      submitButton.classList.add("success");
      console.log("no errors");
    }
  }, 2000);
});

function setButtonLoading(status) {
  if (status === true) {
    loading.classList.add("active");
  } else {
    loading.classList.remove("active");
  }
}

function validateInputs(input) {
  if (input.value === "") return setErrorFor(input);
  setSuccessFor(input);
}

function validateEmail(input) {
  if (input.value === "") return setErrorFor(input);
  const regx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const success = regx.test(input.value);
  if (success) {
    setSuccessFor(input);
  } else {
    setErrorForInvalidEmail();
  }
}

function validateConfirmPasswordInput(input) {
  if (input.value === "") return setErrorFor(input);
  if (input.value !== password.value) return setConformPasswordError();
  setSuccessFor(input);
}

function setErrorFor(name) {
  noErors = false;
  const formControl = name.parentElement;
  formControl.classList.remove("success");
  formControl.classList.add("error");
  const errorHolder = formControl.querySelector("small");
  errorHolder.innerText = `This field cannot be empty`;
}

function setConformPasswordError() {
  noErors = false;
  const formControl = confirm_password.parentElement;
  formControl.classList.remove("success");
  formControl.classList.add("error");
  const errorHolder = formControl.querySelector("small");
  errorHolder.innerText = `Password does not match with the above field`;
}

function setErrorForInvalidEmail() {
  noErors = false;
  const formControl = email.parentElement;
  formControl.classList.remove("success");
  formControl.classList.add("error");
  const errorHolder = formControl.querySelector("small");
  errorHolder.innerText = `Enter a valid email`;
}

function setSuccessFor(name) {
  noErors = true;
  const formControl = name.parentElement;
  formControl.classList.remove("error");
  formControl.classList.add("success");
}