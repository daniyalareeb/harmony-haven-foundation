let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  // Move to next slide
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  
  // Update dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Show current slide and activate corresponding dot
  if (slides[slideIndex-1] && dots[slideIndex-1]) {
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  }
  
  // Change image every 5 seconds
  setTimeout(showSlides, 5000);
}

// Add click functionality to dots
function currentSlide(n) {
  slideIndex = n;
  showSlides();
}

/*--------------------SignUp Section--------*/

let signupbtn = document.getElementById('signupbtn')
let signinbtn = document.getElementById('signinbtn')
let namefield = document.getElementById('namefield')
let title = document.getElementById('title')

signupbtn.onclick = function(){
  namefield.style.maxHeight="0";
}

// Form validation
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const firstName = formData.get('firstname');
            const lastName = formData.get('lastname');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Basic validation
            if (!firstName || !lastName || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }
            
            if (!isValidEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Simulate form submission
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}