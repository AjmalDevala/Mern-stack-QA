// basic filter
const a = [
  {
    name: "ajmal",
  },
  {
    name: "hisham",
  },
  {
    name: "ajith",
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



