const sumAll = function() {
    if (arguments[0] <0 || arguments[1] <0) {
        return 'ERROR'
    }
      if (!Number.isInteger(arguments[0]) || !Number.isInteger(arguments[1])) {
        return 'ERROR'
    }

    let left = arguments[0]
    let right =  arguments[1]
    if (left > right) {
        left = arguments[1]
        right = arguments[0]
    }
    let sum = 0
    for (let i = left; i <= right ; i++){
        sum+=i
    }
    
    return sum
}

// Do not edit below this line
module.exports = sumAll;
