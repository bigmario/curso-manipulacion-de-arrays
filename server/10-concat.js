const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];

const newArray = array1.concat(array2)
console.log(newArray);

const newArray2 = [...array1, ...array2];
console.log(newArray2);