function callME(num){
    return (arr.filter(item => item != num))
}
const removeFromArray = function(arr, val) {
    
    return val.forEach(num => callME(num))
};


// Do not edit below this line
module.exports = removeFromArray;
