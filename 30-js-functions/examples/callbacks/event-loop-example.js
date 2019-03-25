function sometimeInTheFuture() {
  console.log('Hello from the future')
}

console.log('Hello')

const answer = 42 * 3.14

setTimeout(sometimeInTheFuture, 10)

console.log(answer)

console.log('Good-bye')
