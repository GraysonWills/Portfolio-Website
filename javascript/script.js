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