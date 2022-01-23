var testimonials = document.getElementById('testimonials');
        var control1 = document.getElementById('control1');
        var control2 = document.getElementById('control2');
        var control3 = document.getElementById('control3');
        var control4 = document.getElementById('control4');
        var control5 = document.getElementById('control5');
        
        
        control1.onclick=function(){
            testimonials.style.transform = "translateX(1740px)";
            control1.classList.add("active");
            control2.classList.remove("active");
            control3.classList.remove("active");
            control4.classList.remove("active");
            control5.classList.remove("active");
        }
        
        control2.onclick=function(){
            testimonials.style.transform = "translateX(870px)";
            control1.classList.remove("active");
            control2.classList.add("active");
            control3.classList.remove("active");
            control4.classList.remove("active");
            control5.classList.remove("active");
        }
        
        control3.onclick=function(){
            testimonials.style.transform = "translateX(0px)";
            control1.classList.remove("active");
            control2.classList.remove("active");
            control3.classList.add("active");
            control4.classList.remove("active");
            control5.classList.remove("active");
        }
        control4.onclick=function(){
            testimonials.style.transform = "translateX(-870px)";
            control1.classList.remove("active");
            control2.classList.remove("active");
            control3.classList.remove("active");
            control4.classList.add("active");
            control5.classList.remove("active");

        }
        control5.onclick=function(){
            testimonials.style.transform = "translateX(-1740px)";
            control1.classList.remove("active");
            control2.classList.remove("active");
            control3.classList.remove("active");
            control4.classList.remove("active");
            control5.classList.add("active");
        }