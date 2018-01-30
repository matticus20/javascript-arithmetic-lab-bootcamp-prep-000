var a = 5
var b = 3 

function add(a, b) {
  return a + b 
}

function subtract(a,b) {
  return a - b 
}

function multiply(a, b) {
  return a * b 
}

function divide(a, b) {
  return a / b 
}

var n = 10

function inc(n) {
  n++
}
inc(n)
console.log(n)

function dec(n) {
  n--
}
dec(n)
console.log(n)

n = 2.222

function makeInt(n) {
  parseInt(n)
}
makeInt(n)
console.log(n)

function preserveDecimal(n) {
  parseFloat(n)
}
preserveDecomal(n)
console.log(n)