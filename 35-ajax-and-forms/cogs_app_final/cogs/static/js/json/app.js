document.addEventListener('DOMContentLoaded', () => {
  cog_list_json_ajax.addEventListener('click', cogListClickHandler)
  getAndShowCogList('/cogs_json_api/cogs')
})
