const a = [1, 2, 3, 4, 5, 5, 6, 6, 7, 6, 6, 7];

for (let i = 0; i < a.length; i++) {
  if (a[i] % 2 !== 0) {
    console.log(a[i],"Odd"); // Print only the odd numbers
  }else {
    console.log(a[i])
  }
}
