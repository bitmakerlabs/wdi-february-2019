const names = [
  'Margaret Hamilton',
  'Ada Lovelace',
  'Tim Berners-Lee',
  'Alan Turing',
  'Grace Hopper',
  'Yukihiro Matsumoto',
  'Dennis Ritchie',
  'Bill Gates',
  'Barbara Liskov'
]

const toLiTag = content => `<li>${content}</li>`

const liTags = names.map(toLiTag)

liTags.forEach(liTag => console.log(liTag))
