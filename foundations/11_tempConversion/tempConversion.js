const convertToCelsius = function() {
  let num = arguments[0]
  num = ((num -32)*5)/9
  console.log(Math.round(num*10)/10)
  num = Math.round(num*10)/10
  return num
};

const convertToFahrenheit = function() {
  let num = arguments[0]
  num = (num * (9/5)) +32
  num = Math.round(num*10)/10
  return num
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
