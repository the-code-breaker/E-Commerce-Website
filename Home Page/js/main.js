function togglemenu(){
    document.getElementById('sidebar').classList.toggle('active');
}


function myfunc(){
    setTimeout(function(){
        document.getElementById('preloader').style.display = 'none';
    },1300);
  
}



function myfunc3(){
    for (var clickButton of
        document.getElementsByClassName("buy-now"))
        clickButton.addEventListener("click", buynow);
        function buynow() {
           window.location.href= "../payment/index.html";
        }

}
function myfunc4(){
    for (var clickButton of
        document.getElementsByClassName("addtocart"))
        clickButton.addEventListener("click", cart);
        function cart() {
           window.location.href= "../cart/index.html";
        }

}

function myfunc2(){
    for (var clickButton of
        document.getElementsByClassName("addtocart"))
        clickButton.addEventListener("click", alertMeessage);
        function alertMeessage() {
           alert("Your item was successfully Added");

        }

}
