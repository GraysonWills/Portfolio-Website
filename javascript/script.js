document.addEventListener('DOMContentLoaded', function() {
    var textOverlay = document.querySelector('.text-overlay');
    var parallaxSection = document.getElementById('home');
    
    if (textOverlay && parallaxSection) {
      textOverlay.addEventListener('mouseover', function() {
        parallaxSection.style.filter = 'blur(8px)';
      });
  
      textOverlay.addEventListener('mouseout', function() {
        parallaxSection.style.filter = 'none';
      });
    }
  });

  document.getElementById('hoverArea').addEventListener('mouseover', function() {
    let dynamicLink = document.getElementById('dynamicLink');
    dynamicLink.href = 'Projects/projects.html'; // Change URL dynamically if needed
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, {
      threshold: 0.3 // Trigger when half of the element is visible
    });
  
    document.querySelectorAll('.fade-in-section').forEach(section => {
      observer.observe(section);
    });
  });