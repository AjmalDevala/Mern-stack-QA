const data = [1, 2, 3, 4, 5, 5, 6, 6, 7, 6, 6, 7];

// Separate the odd and even numbers
let odd = [];
let even = [];
for (let i = 0; i < data.length; i++) {
  if (data[i] % 2 !== 0) {
    odd.push(data[i]);
  } else {
    even.push(data[i]);
  }
}
// console.log("Odd numbers:", odd);
// console.log("Even numbers:", even);

// ........//...........................................................................................................

function isValidParentheses(s) {
  let balance = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      balance++;
    } else if (s[i] === ")") {
      balance--;
    }
    if (balance < 0) {
      return false;
    }
  }
  return balance === 0;
}
// ........//...........................................................................................................

// console.log(isValidParentheses("([])()"));
