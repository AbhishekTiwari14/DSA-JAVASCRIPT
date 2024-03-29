//1)ar1.concat(ar2,ar3) -> creates a new array with concatenated elements; does not alter original arrays
const ar1 = [1,2];
const ar2 = [3,[4,5]];
const ar3 = [6,7];
const ar4 = ar1.concat(ar2,ar3);
console.log(ar4);  [ 1, 2, 3, [ 4, 5 ], 6, 7 ]

//2) a1.slice(start,end) -> creates new array copying elements of ar1 from [start,end) indexes. Does not alter original array. End index is not included. if only start index is passed & end index is not passed, then it copies from given index to end of array. -ve indexing -> last element => -1, 2nd last => -2 and so on.
const a1 = ['a','b','c','d','e']
console.log(a1.slice(1)); //   [ 'b', 'c', 'd', 'e' ]
 console.log(a1.slice(1,3)); // [ 'b', 'c' ]
 console.log(a1.slice(0,-2)); // [ 'a', 'b', 'c' ]

//3) arr.splice(start, deleteCount, replacements): Deletes/replaces elements in original array
const arr = [0,1,2,3,4,5,6,7,8,9];
arr.splice(7); //arr = [0,1,2,3,4,5,6]
arr.splice(2,2,'a','b'); //arr = [0,1,'a','b',4,5,6]
arr.splice(0,2); //arr = ['a','b',4,5,6]

