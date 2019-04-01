const cogEditClickHandler = event => {
  event.preventDefault()
  getAndShowCogEditForm(event.srcElement.href)
}

const getAndShowCogEditForm = href => {
  axios.get(href).then(response => {
    const cog = response.data
    showCogEditForm(cog)
  })
}

const showCogEditForm = cog => {
  single.innerHTML = ''

  const h1     = document.createElement('h1')
  h1.innerText = `Edit ${cog.name}`
  single.append(h1)

  const form  = document.createElement('form')
  form.action = `/cogs_json_api/${cog.id}/edit`
  form.method = 'post'
  single.append(form)

  const pName = document.createElement('p')
  form.append(pName)

  const labelName     = document.createElement('label')
  labelName.innerText = 'Name: '
  labelName.setAttribute('for', 'cog_name')
  pName.append(labelName)

  const inputName = document.createElement('input')
  inputName.type  = 'text'
  inputName.name  = 'name'
  inputName.value = cog.name
  inputName.id    = 'cog_name'
  pName.append(inputName)

  const pOnSale = document.createElement('p')
  form.append(pOnSale)

  const labeOnSale     = document.createElement('label')
  labeOnSale.innerText = 'On sale: '
  pOnSale.append(labeOnSale)

  const inputOnSale   = document.createElement('input')
  inputOnSale.type    = 'checkbox'
  inputOnSale.name    = 'on_sale'
  inputOnSale.checked = cog.on_sale
  inputOnSale.id      = 'cog_on_sale'
  labeOnSale.append(inputOnSale)

  const inputSave = document.createElement('input')
  inputSave.type  = 'submit'
  inputSave.value = 'Save'
  form.append(inputSave)

  form.addEventListener('submit', cogUpdateSubmitHandler)
}

