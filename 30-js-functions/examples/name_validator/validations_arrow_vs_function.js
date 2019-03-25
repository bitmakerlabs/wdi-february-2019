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
