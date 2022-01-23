function togglemenu(){
    document.getElementById('sidebar').classList.toggle('active');
}


function myfunc(){
    setTimeout(function(){
        document.getElementById('preloader').style.display = 'none';
    },1000);
  
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





function startcal() {
    var popup = document.getElementById('myModel');
    popup.style.visibility = 'visible';
  }
function closecal() {
    var popup = document.getElementById('myModel');
    popup.style.visibility = 'hidden';

  }


setInterval(popup, 15000);
function popup(){
        document.getElementById('main-box1').style.display = 'none';
}

let timeleft = 15;
let downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
  }
  document.getElementById("counter").innerHTML = timeleft - 1 + " sec";
  timeleft -= 1;
}, 1000);


function remove(){
 let remove = document.getElementById('main-box1');
 remove.style.display = 'none';

}



