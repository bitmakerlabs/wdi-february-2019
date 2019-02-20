# Problem: Pig Latin
# Pig Latin
 # "apple" => "appleay"
 # "plum" => "umplay"
 # grape => apegray
 # Natalie => atalieNay
 # "squeeze" => "eezesquay"


# define what vowels and consonants are
# go through the characters of the word until we reach the condition
  # that we've reached a vowel
# keep rest of word as is (from first vowel to end)
# move the consonants that came before the first vowel to the end of the word
# add "ay"
# def function pig_latin(word) {
#   vowels = ['a','e','i','o','u']
#   pig_latin_word = []
#   consonants_for_end_of_word = []
#
#   # pl
#   # [pl] [um]
#   # [um] + [pl] + [ay]
#   index = 0
#   while current letter is not in vowels {
#     # consonants_for_end_of_word.add(current_letter)
#     index += 1
#   }
#
#   # index is position of first vowel
  # consonants = word.from_beginning_up_to(index)
#   # [p,l]
    # rest_of_word = word.from_index_up_to_end(index)
#   # [u,m]
#   pig_latin_word = str(rest_of_word) + str(consonants) + "ay"
#
#   return pig_latin_word
# }

def pig_latin(word):
  vowels = ['a','e','i','o','u']

  index = 0

  letters = list(word)
  current_letter = letters[index]

  while current_letter.lower() not in vowels:
    index += 1
    current_letter = letters[index]

  # index is position of first vowel
  consonants = word[0:index]
  rest_of_word = word[index:]
  pig_latin_word = rest_of_word + consonants + 'ay'

  return pig_latin_word


print(pig_latin("plum"))
print(pig_latin("apple"))
print(pig_latin("PLUM"))








