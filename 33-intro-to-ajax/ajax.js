window.addEventListener('DOMContentLoaded', function() {
  // GET The monster data onto the page
  // ----------------------------------
  //get a reference to the "get_monsters" button & store in a variabke
  const getMonsterBtn = document.getElementById("get_monsters");
  console.log(' GETTING MONSTER BUTTON >>> ', getMonsterBtn);

  getMonsterBtn.addEventListener('click', function() {
    console.log("Button Click 😃")

    // ON CLICK MAKE A GET REQUEST  TO  GET MONSTER\

    const request = axios.get('https://monsters-api.herokuapp.com/monsters')
    .then(function(resp){
      // console.log(" INSIDE THEN CALLBACK");
      // console.log({response})
      const dataElem = document.createElement('div');
      dataElem.innerHTML = resp.data;
      document.body.appendChild(dataElem);
    });
  });


// ---------------------------------------------------------
// Part 2: POST NEW MONSTER Data
//  ---------------------------------------------------------
const postMonsterBtn = document.getElementById('post_monsters');

postMonsterBtn.addEventListener('click', function() {
  console.log('CLICK POST Monster button');

  axios.post('https://bitmaker-monsters-api.herokuapp.com/monsters.json', {
            monster: {
                name: 'Foo Bar',
                home: 'Toronto, ON',
                creepiness: 42,
            }
        }).then(function(response) {
            console.log('SUCCESSFULLY POSTED THE NEW MONSTER');
            console.log(response);
        }).catch(function(error) {
    console.log('error', error)
  })
})

});
