// basic filter
const a = [
  {
    name: "ajmal",
    Amount: "30",
  },
  {
    name: "hisham",
    Amount: "50",
  },
  {
    name: "ajith",
    Amount: "60",
  },
];

// let b = a.filter(a=>a.name!=="ajmal") // filter the rest of the data
// let b = a.filter(a=>a.name =="ajmal") //return the same array but you need just the object use find
// let c = a.find(a=>a.name =="ajmal") //return only the object

// console.log(c)

const D = [1, 2, 3, 4, true, false, "ajmal", { name: "ajmal" }]; // filter the type
console.log(
  D.filter((a) => ["boolean", "string", "object"].includes(typeof a))
);

const totalSum = a.reduce((sum, invoice) => sum + parseInt(invoice.Amount), 0); //  in the case where the array contains numbers as strings, use the parseInt() method to convert them to numbers
console.log(totalSum);

const aa = [1, 2, 5];
const bb = [1, 4, 6, 5];
let c = aa.filter((a) => bb.includes(a));
console.log(c);
