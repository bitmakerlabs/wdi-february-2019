const htmlGetAndShowCogList = () => {
  axios.get('/cogs_html_api/cogs').then(response => {
    main.innerHTML = response.data

    document.querySelectorAll('.cog-html-detail').forEach(detailLink => {
      detailLink.addEventListener('click', htmlCogDetailClickHandler)
    })
  })
}
