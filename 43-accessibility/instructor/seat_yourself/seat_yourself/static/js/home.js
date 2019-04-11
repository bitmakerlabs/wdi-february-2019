document.addEventListener('DOMContentLoaded', function() {
  const scrollDown = document.querySelector('.scroll-down');
  const searchArea = document.querySelector('.home-search');

  scrollDown.addEventListener('click', function(e) {
    e.preventDefault();
    searchArea.scrollIntoView({
      behavior: 'smooth'
    });

    // move focus to <main>
    searchArea.setAttribute('tabindex', -1);
    searchArea.addEventListener('focusout', function() {
      searchArea.removeAttribute('tabindex');
    })
    searchArea.focus();
  });
});





