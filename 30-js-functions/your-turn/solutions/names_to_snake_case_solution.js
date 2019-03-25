// Your Turn: map each name to snake_case
//
// For example:
// 'Margaret Hamilton' becomes 'margaret_hamilton'
// 'Tim Berners-Lee' becomes 'tim_berners_lee'

const toSnakeCase = name => name.toLowerCase()
                                .replace(' ', '_')
                                .replace('-', '_')

const uppercaseFirstLetter = word =>
  word[0].toUpperCase() + word.split('').slice(1).join('')

const snakeCaseToCamelCase = snakeCaseName => {
  const names = snakeCaseName.split('_')
  return names[0] + names.slice(1).map(uppercaseFirstLetter).join('')
}

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

const snakeCaseNames = names.map(toSnakeCase)

console.log(snakeCaseNames)

const camelCaseNames = snakeCaseNames.map(snakeCaseToCamelCase)

console.log(camelCaseNames)

// Bonus: map each snake_case name to camelCase
// (Yukihiro Matsumoto becomes yukihiroMatsumoto)
