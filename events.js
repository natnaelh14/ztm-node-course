const EventEmitter = require('events');
const celebrity = new EventEmitter();
//Subscribe to celebrity for Observer 1. The second parameter is an Event Emitter callback function.
celebrity.on('race', function(result) {
    if(result === 'win') {
        console.log("Congrats! you are a winner.")
    }
})
//Subscribe to celebrity for Observer 2.
celebrity.on('race', function(result) {
    if(result === 'lose') {
        console.log("Boo, I could have won.")
    }
})
process.on('exit', (code) => {
    console.log(`About to exit with code: ${code}`);
  });
celebrity.emit('race', 'win');
celebrity.emit('race', 'lose');
// Congrats! you are a winner.
// Boo, I could have won.
// About to exit with code: 0


