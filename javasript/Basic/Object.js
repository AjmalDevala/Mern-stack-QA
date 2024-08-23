// an object is a fundamental data structure that represents a collection of key-value pairs. //
const user = {
    name: 'test',
    age: 27,
    genderr: 'male'
  }
  
  const data = Object.entries(user) // object.value(user) // object.keys(user)
  console.log(data)

// how to get the rest of ajmal 
  const a = [
    {
      name: "ajmal"
    },
    {
      name: "hisham"
    },
    {
      name: "ajith"
    }]
    
    let b = a.filter(a=>a.name!=="ajmal")
    // console.log(b)