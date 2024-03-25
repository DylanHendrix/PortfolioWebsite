// Function to create typing animation
function typeWriter(text, i, element) {
    if (i < text.length) {
        document.getElementById(element).innerHTML += text.charAt(i);
        i++;
        setTimeout(function() {
            typeWriter(text, i, element);
        }, 100); // Change typing speed here (milliseconds)
    }
}

// Call the typing animation function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    var text = "Hello, my name is Dylan Hendrix"; // Change name here
    typeWriter(text, 0, 'typing-text');
});

document.addEventListener('DOMContentLoaded', function() {
    var content = document.getElementById('content');
    var button = document.getElementById('explore-button');

    setTimeout(function() {
        content.style.opacity = 1;
        button.style.display = 'block';
    }, 1000); // Adjust the delay as needed (in milliseconds)
});


let recent1 = document.getElementById("recent1")
let recent2 = document.getElementById("recent2")

window.addEventListener("scroll", () => {
    let value = window.scrollY;

    recent1.style.marginLeft = value * 2.5 + "px";
    recent2.style.marginLeft = value * 2.5 + "px";
});


function validate() {
    let name =
        document.getElementById("name").value;
    let subject =
        document.getElementById("subject").value;
    let phone =
        document.getElementById("phone").value;
    let email =
        document.getElementById("email").value;
    let message =
        document.getElementById("message").value;
    let error_message =
        document.getElementById("error_message");

    error_message.style.padding = "10px";

    let errors = [];

    if (name.length < 5) {
        errors.push("Please Enter a valid Name");}
    if (subject.length < 10) {
        errors.push("Please Enter a Correct Subject");}
    if (isNaN(phone) || phone.length != 10) {
        errors.push("Please Enter a valid Phone Number");}
    if (email.indexOf("@") == -1 || email.length < 6) {
        errors.push(
            "Please Enter a valid Email");}
    if (message.length <= 40) {
        errors.push(
            "Please Enter More Than 40 Characters");}

    if (errors.length > 0) {
        error_message.innerHTML =
            errors.join("<br>");
        return false;}
    else {
        alert(
            "Form Submitted Successfully!");
        return true;}}











let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}