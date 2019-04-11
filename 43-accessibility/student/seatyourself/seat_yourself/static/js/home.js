document.addEventListener('DOMContentLoaded', function() {
  const scrollDown = document.querySelector('.scroll-down');
  const searchArea = document.querySelector('.home-search');

  scrollDown.addEventListener('click', function(e) {
    e.preventDefault();
    searchArea.scrollIntoView({
      behavior: 'smooth'
    });
  });
});