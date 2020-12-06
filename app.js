var copyRight = document.getElementById("copyright");
var contactBtn = document.getElementById("contactbtn");
var closeBtn = document.getElementById("closebtn");
var contactMeModal = document.querySelector(".contact-me-modal");

var navLinks = document.querySelector(".nav-links");
var opennavbtn = document.getElementById("opennavbtn");
var closenavbtn = document.getElementById("closenavbtn");


function copyRight_(params) {
    let date = new Date();
    let yr = date.getFullYear();
    copyRight.innerHTML = yr;
}
copyRight_();

contactBtn.addEventListener("click", ()=>{
contactMeModal.classList.add("active")
});

closeBtn.addEventListener("click", ()=>{
    contactMeModal.classList.remove("active")
});

opennavbtn.addEventListener("click", ()=>{
    opennavbtn.style.display = "none"
    closenavbtn.style.display = "block";
    navLinks.classList.toggle("nav-active")
});

closenavbtn.addEventListener("click", ()=>{
    navLinks.classList.remove("nav-active");
    opennavbtn.style.display = "block";
    closenavbtn.style.display = "none";
})