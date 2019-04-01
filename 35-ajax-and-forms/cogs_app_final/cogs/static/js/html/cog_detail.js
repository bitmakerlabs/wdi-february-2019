const htmlCogDetailClickHandler = event => {
  event.preventDefault()

  htmlGetAndShowCogDetail(event.srcElement.href)
}

const htmlGetAndShowCogDetail = href => {
  axios.get(href).then(response => {
    single.innerHTML = response.data
  }).catch(error => {
    console.log('oh no!')
  })
}
