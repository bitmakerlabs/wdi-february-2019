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

names.sort((name1, name2) => name1.length - name2.length)

console.log(names)

names.sort((name1, name2) => name1.split(' ')[1].charCodeAt(0) - name2.split(' ')[1].charCodeAt(0))

console.log(names)
