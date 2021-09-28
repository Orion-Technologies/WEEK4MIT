//Array flattenr activity
// Define a function arrayFlattener with a 2 dimensional array as parameter:
// example of 2 dimensional array: [1,[2,3],4,5]

//Return a new 1 dimensional array like, [1,2,3,4]

//your code here

function arrayFlattener (TwoDimentionalArray) {
  var aux;
  var arrFinal = [];
  
  for (let num = 0; num < TwoDimentionalArray.length; num++) {

    if (Number.isInteger(TwoDimentionalArray[num])) {
    arrFinal.push(TwoDimentionalArray[num]);
    }
    
    for(let num2 = 0; num2 < TwoDimentionalArray[num].length; num2++) {
    aux = TwoDimentionalArray[num][num2];
  
    arrFinal.push(aux);
    
    }
  }
  return arrFinal;
}

//uncomment next line one by one, then check the console for results
  console.log(arrayFlattener([1,[2,3],4,5]))

//don't change this line
if (typeof module !== "undefined") {
  module.exports = {
    arrayFlattener,
  };
}
