// My way

var firstArray = ['cat', 'dog', 'fish', 'zebra'];
var secondArray = ['lion', 'aardvark', 'gorilla'];

function combineArray(first, second) {
  var newArray = firstArray.concat(secondArray);
  return newArray.sort();
}

console.log('New Array ' , combineArray(firstArray, secondArray));

console.log('First Array ' , firstArray);
console.log('Second Array ' , secondArray);

// Michaels way

function combineAndSort(firstArray, secondArray) {
  var newArray = firstArray.slice();
  secondArray.forEach(function(el) {
    newArray.push(el)
  })
  return newArray.sort();
}
console.log('New Array ' , combineAndSort(firstArray, secondArray));

console.log('First Array ' , firstArray);
console.log('Second Array ' , secondArray);
