var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });


function scrollToTop() {
  // Scroll to the top of the page (0, 0) when the page loads
  window.scrollTo(0, 0);
}
  function applyChangesAfterTime(className, changeTime, attribute, value) {
    const elements = document.querySelectorAll(`.${className}`);
  
    setTimeout(() => {
      elements.forEach((element) => {
        // Apply your desired changes to the element here
        element.style[attribute] = value; // Corrected property name
        // Add any other modifications as needed
      });
    }, changeTime);
  }
  function fadeInElementsByClass(className, duration, attribute, initial, final) {
    const elements = document.getElementsByClassName(className);
    const increment = (final - initial) / duration; // Calculate the increment for a smooth fade-in effect
  
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      let current = initial; // Create a new variable to track the current value
  
      const interval = setInterval(() => {
        current += increment;
        element.style[attribute] = `${current}rem`;
  
        if ((increment > 0 && current >= final) || (increment < 0 && current <= final)) {
          clearInterval(interval);
        }
      }, 20); // Update every 100 milliseconds (adjust as needed)
    }
  }
  function animateProgressBar(duration, targetPercentage) {
    return new Promise((resolve, reject) => {
      const progressBar = document.querySelector('.progress');
      let currentPercentage = 0;
      const increment = (targetPercentage / duration) * 10; // Adjust the factor for animation smoothness
  
      const interval = setInterval(() => {
        currentPercentage += increment;
        progressBar.style.width = `${currentPercentage}%`;
  
        if (currentPercentage >= targetPercentage) {
          clearInterval(interval);
          progressBar.style.width = `${targetPercentage}%`; // Set the final width to exactly the targetPercentage
          resolve(); 
          // Resolve the Promise to indicate the animation completion
        }
      }, 100);
       // Update every 100 milliseconds (adjust as needed)
    });
  }
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
    animateProgressBar(200, 65).then(() => {
      fadeInElementsByClass('progress-bar', 30, 'height', 10, 3);
      fadeInElementsByClass('bar-pkg', 40, 'margin-top', 15, 0.5);
    });
    


  // Example usage:  
  applyChangesAfterTime('progress-percentage', 2800, 'opacity', '1');
  applyChangesAfterTime('everything-else', 2800, 'opacity', '1');


window.addEventListener("scroll", reveal);
reveal();