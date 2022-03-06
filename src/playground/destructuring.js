//* -------------------------------
//* Object destructuring
//* -------------------------------


const person = {
  name: "Juan",
  age: 39,
  location: {
    city: "Santo Domingo",
    temp: 86,
  }
}

// const { name: firstName = "Anonymous", age, location:{city, temp: temperature} } = person

// console.log(
//   `${firstName} is ${age} years old. He lives in ${city}. The temperature there at moment is ${temperature} degrees Farenheigh.`
// );

const book = {
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  publisher: {
    name: "Penguin",
  }
}

const { name: publisherName = "Self-Published" } = book.publisher

console.log(publisherName)

//* -------------------------------
//* Array destructuring
//* -------------------------------
const address = ["123 Jonson Street", "Philadelphia", "Pennsylvania", "12345"]
const [, city, state = "New York",] = address
console.log(`You are in ${city} ${state}.`)

const item = ["Coffee (hot)", "$2.00", "$2.50", "$3.20"]
const [coffee, sSize, mSize, LSize] = item

console.log(`A medium ${coffee} costs ${sSize}.`)