const firstName       = name   => name.split(' ')[0]
const isUpper         = letter => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').includes(letter)
const startsWithUpper = word   => isUpper(word[0])
const twoWords        = name   => name.split(' ').length == 2

const nameValidator = name => {
  const errors = []

  // - must have two words separated by a space
  if (!twoWords(name))
    errors.push('name must be two words')

  // - each word's first letter must be an uppercase
  if (!startsWithUpper(firstName(name)))
    errors.push(`first name '${firstName(name)}' must start with an uppercase letter`)

  // YOUR TURN - try implementing more validations:
  // - can only contain letters, numbers and hypens
  // - each word cannot begin with a hyphen
  // - each word cannot end with a hyphen
  // - two consecutive hyphens are not allowed

   displayResults(name, errors)
}
const displayResults = (name, errors) => {
  if (errors.length == 0) {
    console.log(`${name} is valid!`)
  } else {
      console.log(`${name} is invalid!`)
     for (error of errors)
      console.log(`- ${error}`)
  }
  console.log()
}

// Valid Names
nameValidator('Margaret Hamilton')
nameValidator('Ada Lovelace')
nameValidator('Tim Berners-Lee')

// Invalid Names
nameValidator('Mr. Alan Turing')
nameValidator('grace hopper')
nameValidator('Yukihiro- Matsumoto')
nameValidator('Dennis Ritchie-')
nameValidator('Bill Gate$')
nameValidator('Barbara Lis--kov')
