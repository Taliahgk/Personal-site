document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide.fade");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
  
    
    function showSlide(index) {
      if (index >= slides.length) {
        slideIndex = 0;
      } else if (index < 0) {
        slideIndex = slides.length - 1;
      } else {
        slideIndex = index;
      }
      slides.forEach((slide, i) => {
        slide.style.display = (i === slideIndex) ? "block" : "none";
      });
    }
  
    // Initial call to display the first slide
    showSlide(slideIndex);
  
    // Event listeners for the carousel controls
    nextBtn.addEventListener("click", function() {
      showSlide(slideIndex + 1);
    });
  
    prevBtn.addEventListener("click", function() {
      showSlide(slideIndex - 1);
    });
  
    // Optional: Automatic slideshow every 2 seconds
    setInterval(function() {
      showSlide(slideIndex + 1);
    }, 5000);
  });
  