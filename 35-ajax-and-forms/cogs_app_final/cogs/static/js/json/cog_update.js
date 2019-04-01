const cogUpdateSubmitHandler = event => {
  event.preventDefault()
  postAndShowCogDetail(event.srcElement.action)
}

const postAndShowCogDetail = href => {
  const params = {
    name:    cog_name.value,
    on_sale: cog_on_sale.checked
  }

  axios.post(href, params).then(response => {
    getAndShowCogList('/cogs_json_api')
    const cog = response.data
    showCogDetail(cog)
  })
}
