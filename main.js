var firstArray = ['cat', 'dog', 'fish', 'zebra'];
var secondArray = ['lion', 'aardvark', 'gorilla'];

function combineArray(first, second) {
  var newArray = firstArray.concat(secondArray);
  return newArray.sort();
}

console.log('New Array ' , combineArray(firstArray, secondArray));

console.log('First Array ' , firstArray);
console.log('Second Array ' , secondArray);
