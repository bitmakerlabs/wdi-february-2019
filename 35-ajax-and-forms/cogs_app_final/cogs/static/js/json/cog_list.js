const cogListClickHandler = event => {
  event.preventDefault()
  window.history.pushState({}, '', '/cogs')
  getAndShowCogList(event.srcElement.href)
}

const getAndShowCogList = href => {
  axios.get(href).then(response => {
    const cogs = JSON.parse(response.data)
    showCogList(cogs)
  })
}

const showCogList = cogs => {
  main.innerHTML = ''

  const h2     = document.createElement('h2')
  h2.innerText = 'Cogs'
  main.append(h2)

  const section = document.createElement('section')

  cogs.forEach(cog => {
    const pk = cog.pk

    const aDetail      = document.createElement('a')
    aDetail.innerText  = cog.fields.name
    aDetail.href       = `/cogs_json_api/${pk}`
    aDetail.addEventListener('click', cogDetailClickHandler)
    aDetail.classList.add('detail')
    main.append(aDetail)

    const aEdit     = document.createElement('a')
    aEdit.innerText = 'edit'
    aEdit.href      = `/cogs_json_api/${pk}/edit`
    aEdit.addEventListener('click', cogEditClickHandler)
    main.append(aEdit)

   const br = document.createElement('br')
    main.append(br)
  })
}
