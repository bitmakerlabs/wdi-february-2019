document.addEventListener('DOMContentLoaded', function(e){
  // CODE GOES HERE
  let title = document.querySelector('#page-title');
  title.innerText = "Some other title";

  var ul = document.querySelector('ul');

  for (var i = 1; i <= 1000; i++) {
    var item = document.createElement('li');
    item.className = "item";
    item.innerText = "Item " + i;
    ul.appendChild(item);
  }
})
