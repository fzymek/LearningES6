//@flow

//normal javascript function
function multiply(a: number, b: number) {
  return a * b;
}

//anonymous function assigned to variable
var mul = function(a: number, b: number) {
  return a * b;
}
var mul2 = mul;
debug(mul2(5, 6));


//animals
var animals = [
  {name: 'Venus', species: 'dog'},
  {name: 'Tiger', species: 'cat'},
  {name: 'Venus', species: 'horse'},
  {name: 'Dżeki', species: 'dog'},
  {name: 'Daisy', species: 'dog'},
  {name: 'Ogonek', species: 'cat'},
]

//store filter function in variable
var isDog = function(animal) {
  return animal.species === 'dog'
}
//filter animals array for dogs and store result in variable
var dogs = animals.filter(isDog)

//print results by mapping each 'dog' object to its name using 'arrow function'
debug("There are "+ dogs.length + " dogs: " + dogs.map((dog) => dog.name).join(", ") + ".")
