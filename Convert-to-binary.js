/*
Given a non-negative integer n, 
write a function to_binary/ToBinary 
which returns that number in a binary format.
*/


// Solution

function largestPowerOf(n, number) {
  var p = number;
  while (p < n) { p *= number; }
  return p
}

function toBinary(n) {
  let binaryString = '';
  let power = largestPowerOf(n, 2)
  while (power >= 1) {
    if (n - power >= 0) {
      n -= power;
      binaryString += '1';
    } else {
      binaryString += '0';
    }
    power /= 2;
  }
  return parseInt(binaryString)
}

// or

let toBinary = n => +n.toString(2)