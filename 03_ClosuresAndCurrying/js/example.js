//@flow

//define counter module with atomic operations
var counter = (function() {
        //internal counter
        var counter: number = 0;
        //internal util function
        function update(val: number) {
                counter += val;
        }

        //return object with defined functions to operate on it
        return {
            inc: function() {
                return update(1)
            },
            dec: function() {
                update(-1)
            },
            val: function() {
                return counter
            }
        }
    }
)();


console.log('initial value', counter.val())
counter.inc()
counter.inc()
counter.inc()
console.log('after 3 inc', counter.val())
counter.dec()
console.log('after 1 dec', counter.val())
