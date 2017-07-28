//@flow
import fs from 'fs'

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


/////////////// Example 5

//declaration of cuuryable function
let champions =
    team =>
        year =>
            loosers =>
                team + ' have won NBA Championship in ' +
                year + ' by beating ' +
                loosers + '.'


let gsw = champions("Golden State Warriors")
let champs = gsw(2017)
console.log(champs("Cleveland Cavaliers"))



/////////////// Example 6

//read roster data
var data = fs.readFileSync('../02_Map_Reduce/data/data.txt', 'utf8')//.trim() //remove empty line

var rosters = data.split('\n')
  .filter(line => line.length > 0)                //can use trim instead
  .map(line => line.split(','))                   //convert line to array of csv values
  .reduce((roster, player) => {
    roster[player[0]] = roster[player[0]] || []   //create empty array or reuse exising
    roster[player[0]].push({                      //add new player to team roster
      name: player[1],
      height: player[2],
      position: player[3]
    })
    return roster
  }, {})

// console.log(rosters)


//create curryable function that checks if player is playing on specified position
let isPlayingOnPosition =
    position =>
        player => player.position === position

let pointguards = isPlayingOnPosition('PG')
let centers = isPlayingOnPosition('C')

for (var team in rosters) {
    //use created curryable funcion in filter operator
    console.log('Point guards in ' + team + ': ' + JSON.stringify(rosters[team].filter(pointguards, null, 4)))
}

for (var team in rosters) {
    //use created curryable funcion in filter operator
    console.log('Centers in ' + team + ': ' + JSON.stringify(rosters[team].filter(centers, null, 4)))
}
