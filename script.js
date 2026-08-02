// ================================
// MOBILE NAVBAR
// ================================


const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");


menuBtn.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

});



// Close menu after clicking link

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

    });

});








// ================================
// SCROLL REVEAL ANIMATION
// ================================


const reveals = document.querySelectorAll(".reveal");


window.addEventListener("scroll",()=>{


    reveals.forEach((element)=>{


        const windowHeight = window.innerHeight;


        const elementTop = element.getBoundingClientRect().top;


        const revealPoint = 120;



        if(elementTop < windowHeight - revealPoint){


            element.classList.add("active");


        }


    });



});









// ================================
// NAVBAR BACKGROUND CHANGE
// ================================


window.addEventListener("scroll",()=>{


const header = document.querySelector("header");


if(window.scrollY > 50){


    header.style.background="rgba(5,8,22,0.95)";


}

else{


    header.style.background="rgba(5,8,22,0.8)";


}



});









// ================================
// CONTACT FORM
// ================================


const contactForm = document.getElementById("contactForm");


contactForm.addEventListener("submit",(e)=>{


e.preventDefault();



let name = contactForm.querySelector("input[type='text']").value;

let email = contactForm.querySelector("input[type='email']").value;

let phone = contactForm.querySelector("input[type='tel']").value;



if(name==="" || email==="" || phone===""){


alert("Please fill all required details");


}

else{


alert("Thank you "+name+"! We will contact you soon 🚀");


contactForm.reset();


}



});









// ================================
// CURRENT YEAR FOOTER
// ================================


document.querySelector("footer p").innerHTML =

`© ${new Date().getFullYear()} Aashish Digital Marketing | All Rights Reserved`;
