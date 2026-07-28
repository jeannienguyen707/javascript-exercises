const sumAll = function() {
    if (arguments[0] <0 || arguments[1] <0) {
        return 'ERROR'
    }
    
    let sum = 0
    for (let i = arguments[0]; i <= arguments[1] ; i++){
        console.log(sum)
        sum+=i
    }
    
    return sum
}

// Do not edit below this line
module.exports = sumAll;
