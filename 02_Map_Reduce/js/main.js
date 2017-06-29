//@flow

import fs from 'fs'
//import old way
// var fs = require('fs')

//path is relative to 'comipled' file in build/js directory
var data = fs.readFileSync('data/data.txt', 'utf8')//.trim() //remove empty line

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
  }, {})                                          // start reducing with empty rosters

console.log('rosters', JSON.stringify(rosters, null, 4))
