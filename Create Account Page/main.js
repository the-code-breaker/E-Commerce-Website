// We access to the inputs by their id's
let fullname1 = document.getElementById("fullname");
let emailaddress1 = document.getElementById("email");
let passcode1 = document.getElementById("password1");
let passcode2 = document.getElementById("password2");
let username1 = document.getElementById("user");

// Error messages
let errorElement = document.getElementById("name1");
let errorElementEmail = document.getElementById("email1");
let errorElementPassword1 = document.getElementById("pass1");
let errorElementPassword2 = document.getElementById("pass2");
let errorElementUsername1 = document.getElementById("user1");

// Form
let contactForm = document.getElementById("form");

// Event listener
contactForm.addEventListener("submit", function (e) {
  let messageName = [];
  let messageEmail = [];
  let messagePassword1 = [];
  let messagePassword2 = [];
  let messageUsername1 = [];


  if (fullname1.value === "" || fullname1.value === null) {
    messageName.push("* This field is required");
  }

  if (emailaddress1.value === "" || emailaddress1.value === null) {
    messageEmail.push("* This field is required");
  }

  if (passcode1.value === "" || passcode1.value === null) {
    messagePassword1.push("* This field is required");
  }

  if (passcode2.value === "" || passcode2.value === null) {
    messagePassword2.push("* This field is required");
  }
  if (username1.value === "" || username1.value === null) {
    messageUsername1.push("* This field is required");
  }

  // Statement to shows the errors
  if (messageName.length || messageEmail.length || messagePassword1.length || messagePassword2.length || messageUsername1.length > 0) {
    e.preventDefault();
    errorElement.innerText = messageName;
    errorElementEmail.innerText = messageEmail;
    errorElementPassword1.innerText = messagePassword1;
    errorElementPassword2.innerText = messagePassword2;
    errorElementUsername1.innerText = messageUsername1;
  }

  // if the values length is filled and it's greater than 2 then redirect to this page
  if (
    (fullname1.value.length > 2,
      emailaddress1.value.length > 2,
      passcode1.value.length > 2,
      passcode2.value.length > 2,
      username1.value.length > 2)
  ) {
    e.preventDefault();
  window.location.assign("../account created/index.html");
  }
  

});