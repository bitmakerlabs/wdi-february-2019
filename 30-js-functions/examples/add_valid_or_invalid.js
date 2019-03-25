const endsWithHypen        = word   => isHypen(lastChar(word))
const firstName            = name   => name.split(' ')[0]
const isHypen              = letter => letter == '-'
const isLower              = letter => 'abcdefghijklmnopqrstuvwxyz'.split('').includes(letter)
const isSpace              = letter => letter == ' '
const isUpper              = letter => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').includes(letter)
const lastChar             = word   => word.split('')[word.length - 1]
const lastName             = name   => name.split(' ')[1]
const startsWithUpper      = word   => isUpper(word[0])
const twoConsecutiveHypens = name   => name.includes('--')
const twoWords             = name   => name.split(' ').length == 2
const validChar            = letter => isUpper(letter) || isLower(letter) || isHypen(letter) || isSpace(letter)

const nameValidator = (name, index, names) => {

  const errors = []

  if (!twoWords(name))
    errors.push('name must be two words')

  if (!startsWithUpper(firstName(name)))
    errors.push(`first name '${firstName(name)}' must start with an uppercase letter`)

  if (!startsWithUpper(lastName(name)))
    errors.push(`last name '${lastName(name)}' must start with an uppercase letter`)

  if (endsWithHypen(firstName(name)))
    errors.push(`first name '${firstName(name)}' must not end with a hypen`)

  if (endsWithHypen(lastName(name)))
    errors.push(`last name '${lastName(name)}' must not end with a hypen`)

  if (twoConsecutiveHypens(name))
    errors.push("name can't contain two consecutive hypens")

  for (letter of name.split(''))
    if (!validChar(letter))
      errors.push(`name cannot contain ${letter}`)

  return errors.length == 0

}

const names = [
  'Margaret Hamilton',
  'Ada Lovelace',
  'Tim Berners-Lee',
  'Mr. Alan Turing',
  'grace hopper',
  'Yukihiro- Matsumoto',
  'Dennis Ritchie-',
  'Bill Gate$',
  'Barbara Lis--kov'
]

const namesWithValidOrInvalid = []

const addNameToArrayWithValidOrInvalid = name => {
  namesWithValidOrInvalid.push(`${name}: ${nameValidator(name)}`)
}

names.forEach(addNameToArrayWithValidOrInvalid)

console.log(namesWithValidOrInvalid)

const withValidOrInvalid = name => `${name}: ${nameValidator(name)}`
console.log(names.map(withValidOrInvalid))
