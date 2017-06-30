//@flow

//////////// Example 1
var name = 'Filip'
function hello() {
    return "Hello, " + name + "!" //function has lexicographical access to variable 'name'
}
console.log('Greeting: ', hello())


//////////// Example 2
function init() {
    var magicNumber = 42;
    function makeMagic() {
        console.log(magicNumber * 2 / magicNumber * 10)
    }
    makeMagic()
}

//after calling init, its block gets evaluated and makeMagic() has access to magicNumber variable
init()


//////////// Example 2
function internalFunction() {
    var magicNumber = 42;
    function sorcery() {
        console.log('Answer to life, universe, everything', magicNumber)
    }
    return sorcery
}

//internalFunction return function ('sorcery') although it is defined as intenal/private funciton of internalFunction
var magic = internalFunction()
magic()

//////////// Example 4
function multiplier(x: number, y: number) {
    return function(y: number) {
        return x *  y
    }
}

//create "function factory" which multiples by 2 and other which multiples by 3
var tripler = multiplier(3)
var doubler = multiplier(2)


console.log('2 * 2 =',doubler(2))
console.log('2 * 5 =',doubler(5))

console.log('3 * 2 =',tripler(2))
console.log('3 * 5 =',tripler(5))
