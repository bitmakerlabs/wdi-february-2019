document.addEventListener('DOMContentLoaded', function(e){
  let robotLinks = document.querySelectorAll('.robots__robot a');
  robotLinks.forEach((robotLink) => {
    robotLink.addEventListener('click', (event) => {
      event.preventDefault();
      axios.get(robotLink.href, { 'headers' : {'X-Requested-With' : 'XMLHttpRequest'} })
        .then((response) => {
          console.log(response);
          let details = document.querySelector('.robots__box__details');
          details.innerText = '';
          let roboDiv = document.createElement('div');
          let roboName = document.createElement('h2');
          roboName.innerText = response.data.name;
          roboDiv.appendChild(roboName);
          details.appendChild(roboDiv);
        })
    })
  })
})
