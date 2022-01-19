function checkform(){
    if(document.getElementById("name").value == 'jayem30' && document.getElementById("password").value == 'jayem' ){
        alert("Login Successful");
        window.location = "http://www.google.com/"
    }else{
        document.getElementById('alert').innerHTML = ("Access denied. Valid username and password is required.");
        
    }
}