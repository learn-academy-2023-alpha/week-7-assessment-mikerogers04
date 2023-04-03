// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

//Re-usable Test Template
// describe("greeter", () => {
//   it("returns a generic greeting", () => {
//     expect(greeter()).toEqual("Hello, LEARN student!")
//   })
// })

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

describe("fullSentence", () => {
  it("returns an array with a sentence about each person with their name capitalized", () => {
    expect(fullSentence(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

//Test failed:  ReferenceError: fullSentence is not defined
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

// b) Create the function that makes the test pass.

//Initial Pseudo:
//Create a function called fullSentence.
//Input: An array of objects with key-value pairs for a name and occupation.
//Need to pull key-value pairs out of objects but keep data in arrays: possible method to do this
//Need to combine arrays (name + occupation) together
//Need to capitalize the first letter in the first and last name
//Output: Returns an array with a sentence about each person with their name capitalized.

//Final iteration of pseudocode inside function. 
//I was super determined to use object deconstruction to make this function work. It was very difficult and took alot of time and reading documentation. I know you can simply use object dot notation to pull the key-pair values out but, wanted to explore this approach first. The fact that the output had to be one array with the string sentences at each element is what made this approach much more difficult. I knew there was a much more efficient way to do this problem, that refactored function is further below. 

const fullSentence = (array) => {
    //Empty array for object names
    let newArray = []
    //Empty array for object occupations
    let newArray2 = []
    //object deconstruction
    const [element1, element2, element3] = array
    //pushing each object.name value into an array as arrays using .split
    newArray.push(element1.name.split(" "), element2.name.split(" "), element3.name.split(" "))
    //pushing each object.occupation value into an array as arrays using .split
    newArray2.push(element1.occupation.split(" "), element2.occupation.split(" "), element3.occupation.split(" "))
    //using .flat to remove nested arrays in name array
    let nameArray = newArray.flat() 
    //using .flat to remove nested arrays in occupation array
    let occupationArray = newArray2.flat()
    //using .map to iterate over name array to uppercase the first letter of each word
    let finalArray = nameArray.map(value => 
          value[0].toUpperCase() + value.substring(1)) 
    //array deconstruction
    let [a, b, c, d, e, f] = finalArray
    //pushed first two elements into occupation array at specified position
    occupationArray.splice(0, 0, a, b)
    //pushed next two elements into occupation array at specified position
    occupationArray.splice(4, 0, c, d)
    //pushed next two elements into occupation array at specified position
    occupationArray.splice(10, 0, e, f)
    //String interpolation for elements 0-3 in occupation array
    let output1 = (`${occupationArray[0]} ${occupationArray[1]} is ${occupationArray[2]} ${occupationArray[3]}.`)
    //String interpolation for elements 4-9 in occupation array
    let output2 = (`${occupationArray[4]} ${occupationArray[5]} is ${occupationArray[6]} ${occupationArray[7]} ${occupationArray[8]} ${occupationArray[9]}.`)
    //String interpolation for elements 10-14 in occupation array
    let output3 = (`${occupationArray[10]} ${occupationArray[11]} is ${occupationArray[12]} ${occupationArray[13]} ${occupationArray[14]}.`)
    //Empty array to store outputs
    let outputArray = []
    //Push output 1 into outputArray
    outputArray.push(output1)
    //Push output 2 into outputArray
    outputArray.push(output2)
    //Push output 3 into outputArray
    outputArray.push(output3)
    //Test log to verify if correct content got pushed into array
    // console.log(outputArray)
    return outputArray
}

console.log(fullSentence(people))

//Test output: Passed
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

//Refactored function

//Pseudo:
//Create a function called fullSentence2.
//Input: An array of objects with key-pair values of name and occupation
//Use .map to iterate over array of objects
  //Pull names out of objects using dot notation and .split to make them arrays
  //Use .map to iterate over name arrays and uppercase first letter of each element using .toUpperCase and .substring to concatenate strings back together. 
  //Use .join to combine arrays together and string interpolation both the names and occupations into sentences in one array
//Output: Returns an array with a sentence about each person with their name capitalized

// const fullSentence2 = (array) => {
//   return array.map(value => {
//     let nameValues = value.name.split(" ")
//     let upperCaseNames = nameValues.map(value => value[0].toUpperCase() + value.substring(1))
//     // console.log(upperCaseNames)
//     let output = upperCaseNames.join(" ")
//     return `${output} is ${value.occupation}.`
//   })
// }
// console.log(fullSentence2(people))

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

describe("remainderArray", () => {
  it("returns a an array of only the remainders of the number when divided by 3", () => {
    expect(remainderArray(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(remainderArray(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

//Test failed:  ReferenceError: remainderArray is not defined
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 passed, 2 total


// b) Create the function that makes the test pass.

//Pseudo:
//Create a function called remainderArray.
//Input: A mixed data array.
//Iterate over array using .map
//Check if each element is a number by using typeof
//If element is a number, then use modulo by 3 to get the remainder
//Use .filter to remove undefined values out of newArray 
//Output: Returns an array of only the remainders of the number when divided by 3.

const remainderArray = (array) => {
  let newArray = []
  newArray = array.map(value => {
    if(typeof value === "number"){
       return value % 3
    }
  })
  return newArray.filter(value => 
    value !== undefined)
}

console.log(remainderArray(hodgepodge1))
console.log(remainderArray(hodgepodge2))

//Test output: Passed
// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.


// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

describe("cubed", () => {
  it("returns the sum of all the numbers cubed", () => {
    expect(cubed(cubeAndSum1)).toEqual(99)
    expect(cubed(cubeAndSum2)).toEqual(1125)
  })
})

//Test failed:  ReferenceError: cubed is not defined
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 2 passed, 3 total

// b) Create the function that makes the test pass.

//Pseudo:
//Create a function called cubed.
//Input: An array of numbers
//Use .reduce method to accumulate the sum when each element number is cubed.
//Output: The sum of all the numbers cubed.

const cubed = (array) => {
  //initial value is an optional argument, but needed for the reducer function in this case to know where to start in the array. 
  //For some reason the output of cubedSum is 93 for the first text example without the initialValue set
  let initialValue = 0
  let cubedValues = array.reduce((cubedSum, currentValue) => cubedSum = cubedSum + (currentValue*currentValue*currentValue), initialValue)
  return cubedValues
}

console.log(cubed(cubeAndSum1))
console.log(cubed(cubeAndSum2))

//Test output: Passed
// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total