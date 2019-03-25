function endsWithHypen(word)        { return isHypen(lastChar(word))                                                  }
function firstName(name)            { return name.split(' ')[0]                                                       }
function isHypen(letter)            { return letter == '-'                                                            }
function isLower(letter)            { return 'abcdefghijklmnopqrstuvwxyz'.split('').includes(letter)                  }
function isSpace(letter)            { return letter == ' '                                                            }
function isUpper(letter)            { return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').includes(letter)                  }
function lastChar(word)             { return word.split('')[word.length - 1]                                          }
function lastName(name)             { return name.split(' ')[1]                                                       }
function startsWithUpper(word)      { return isUpper(word[0])                                                         }
function twoConsecutiveHypens(name) { return name.includes('--')                                                      }
function twoWords(name)             { return name.split(' ').length == 2                                              }
function validChar(letter)          { return isUpper(letter) || isLower(letter) || isHypen(letter) || isSpace(letter) }

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
