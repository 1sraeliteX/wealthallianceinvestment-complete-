  // Reduce preloader to 1.2 seconds - faster user feedback while still showing loading state
  setTimeout(function(){
    var preloader = document.querySelector('.preloader');
    if (preloader) {
      preloader.style.opacity = '0';
      preloader.style.transition = 'opacity 0.3s ease';
      setTimeout(function() {
        preloader.style.display = 'none';
      }, 300);
    }
  }, 1200);