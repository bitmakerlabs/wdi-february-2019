const cogDetailClickHandler = event => {
  event.preventDefault()
  getAndShowCogDetail(event.srcElement.href)
}

const getAndShowCogDetail = href => {
  axios.get(href).then(response => {
    const cog = response.data
    showCogDetail(cog)
  })
}

const showCogDetail = cog => {
  single.innerHTML = ''

  const h1     = document.createElement('h1')
  h1.innerText = cog.name
  single.append(h1)

  const p     = document.createElement('p')
  p.innerText = `On sale: ${cog.on_sale}`
  single.append(p)
}

