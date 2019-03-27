document.addEventListener('DOMContentLoaded', function() {
  // Function scope

  let count = 0;
  const colors = ['tomato', 'azure', 'green', 'orange', 'purple', 'chartreuse', 'gold', 'fuschia'];

  const container = document.querySelector('#container');

  container.addEventListener('click', function(event) {
    event.target.remove();
    console.log("child circle was clicked and removed");
  });

  // If you wanted to delegate from the `body`, you'll need to take into
  // consideration of the fact that you only want to be deleting circles
  // so you'll need to check if the element you clicked on is a circle first

  // const body = document.querySelector('#body').addEventListener('click', function(event) {
  //   console.log(event);
  //   if(event.target.classList.contains('circle')) {
  //     event.target.remove();
  //   }
  //
  //   console.log("clicked on something that wasn't a circle.");
  // })

  const boxMaker = document.querySelector('#box-maker');

  boxMaker.addEventListener('click', function() {
      const x = Math.ceil(Math.random() * 400),
          y = Math.ceil(Math.random() * 200),
          c = Math.ceil(Math.random() * 7);

      const circle = document.createElement('div');

      circle.className = 'circle';

      circle.style.top = y + 'px';
      circle.style.left = x + 'px';
      circle.style.backgroundColor = colors[c];

      circle.innerHTML = count++;

      container.append(circle);

      // This is totally okay 👌 but we'll be creating an infinite amount of
      // events if the user keeps clicking on the link. So a better way to
      // achieve this is by delgating the event from the parent element.

      // circle.addEventListener('click', function(event) {
      //   event.target.remove();
      //   console.log('circle was removed!!!');
      // });

      console.log('link was clicked');
  });


  // ⚠️ This didn't work because the circles didn't exist on page load
  // and this code only executes once, on page load.

  // const circles = document.querySelectorAll('.circle');
  //
  // circles.forEach(function(circle) {
  //   circle.addEventListener('click', function(event) {
  //     event.target.remove();
  //     console.log('circle was removed!!!');
  //   });
  // })
});
