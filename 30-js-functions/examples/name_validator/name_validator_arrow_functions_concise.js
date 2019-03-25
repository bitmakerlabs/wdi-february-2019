const endsWithHypen        = word   => isHypen(lastChar(word)),
      firstName            = name   => name.split(' ')[0],
      isHypen              = letter => letter == '-',
      isLower              = letter => 'abcdefghijklmnopqrstuvwxyz'.split('').includes(letter),
      isSpace              = letter => letter == ' ',
      isUpper              = letter => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').includes(letter),
      lastChar             = word   => word.split('')[word.length - 1],
      lastName             = name   => name.split(' ')[1],
      startsWithUpper      = word   => isUpper(word[0]),
      twoConsecutiveHypens = name   => name.includes('--'),
      twoWords             = name   => name.split(' ').length == 2,
      validChar            = letter => isUpper(letter) || isLower(letter) || isHypen(letter) || isSpace(letter)

const displayResults = (name, errors) => {
  if (errors.length == 0) {
    console.log(`${name} is valid!`)
  } else {
      console.log(`${name} is invalid:`)
     for (error of errors)
      console.log(`- ${error}`)
  }
  console.log()
}

const nameValidator = name => {

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

  displayResults(name, errors)
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
