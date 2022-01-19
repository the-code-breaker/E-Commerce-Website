const loginForm = document.getElementById("myform");
const loginButton = document.getElementById("submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.name.value;
    const password = loginForm.password.value;

    if (username === "sourav" ,"abhinav","kartik","himanshu","princesharma" && password === "betterbuys") {
        document.getElementById('demo1').innerHTML = `" Welcome, You Have Successfully Logged in to BetterBuys" <br> "You are being redirected, please wait...."`;
        setTimeout(function() {window.location = "../index.html" },3000);
    } else {
         document.getElementById('demo2').innerHTML = "Please enter a valid username or password";
    }
});

function Toggle() {
    var temp = document.getElementById("password");
    if (temp.type === "password") {
        temp.type = "text";
    }
    else {
        temp.type = "password";
    }
}