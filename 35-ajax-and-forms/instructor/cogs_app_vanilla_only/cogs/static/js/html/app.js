addEventListener('DOMContentLoaded', () => {
  axios.get('/cogs_html_api/cogs').then(response => {
    main.innerHTML = response.data
    const detailLinks = document.querySelectorAll('.detail')

    detailLinks.forEach(detailLink => {
      detailLink.addEventListener('click', htmlCogClickEventHandler)
    })
  })
})

const htmlCogClickEventHandler = event => {
  event.preventDefault()

  // Pretend ajax call to get cog's details

  single.innerHTML = "The cog's details"
}
