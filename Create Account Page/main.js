function validateform(){  
  let name=document.myform.name.value;  
  let email=document.myform.email.value;  
  let password=document.myform.password.value;  
  let password2=document.myform.password2.value;  
  let isvalid = true;
  
  if (name==null || name==""){  
    document.getElementById('name1').innerHTML = "Enter Name";
    name1.style.color = "red";
    return false;
    
  }
  else if(email==null || email == ""){
    document.getElementById('email1').innerHTML = "Enter Email Address";
    email1.style.color = "red";
    return false;
    
  }
  
  else if(password.length<6){  
    document.getElementById('pass1').innerHTML = "Enter  Password";
    pass1.style.color = "red";
    
    
    return false;  
  }  
  else if(password2.length<6){  
    document.getElementById('pass2').innerHTML = "Re-Enter Password";
    pass2.style.color = "red";
    return false;  
  }  
  
}  

   
   



