
const removeFromArray = function() {

    // for (const arg of arguments)
    //     result.filter(item => item != val[i])
        
    // }
    // return result
    for (let i = 1; i < arguments.length; i++) {
        
        arguments[0] = arguments[0].filter(items => (items !== arguments[i]))
        console.log(arguments[0])
    }
    return arguments[0]
};



// Do not edit below this line
module.exports = removeFromArray;
