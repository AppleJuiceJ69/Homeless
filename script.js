document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 1;

    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides((slideIndex += n));
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("slideshow")[0].getElementsByTagName("img");

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            slides[i].classList.remove("active");
        }

        slides[slideIndex - 1].style.display = "block";
        slides[slideIndex - 1].classList.add("active");
    }

    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    prevButton.addEventListener("click", () => {
        plusSlides(-1);
    });

    nextButton.addEventListener("click", () => {
        plusSlides(1);
    });

    const toggleButton = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    toggleButton.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });

    // Get the form element
    const form = document.getElementById("contact-form");


  
});



var slideshow = document.getElementsByClassName("slideshow")[0];
var images = slideshow.getElementsByTagName("img");
var currentIndex = 0;


function changeSlide() {
  // Hide all images
  for (var i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  
  // Show current image
  images[currentIndex].style.display = "block";
  
  // Move to the next image
  currentIndex = (currentIndex + 1) % images.length;
}

// Call changeSlide function every interval



// hamburger menu functionality 
const navtoggle = document.querySelector('#nav-toggle')

navtoggle.style.display
