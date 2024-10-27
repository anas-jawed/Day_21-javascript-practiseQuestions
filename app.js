// Qs1. Square and sum the array elements using the arrow function and then find the
// average of the array.

// let nums = [1, 2, 3, 4, 5];
// let square = nums.map((num) => num * num);
// console.log(square);

// let sum = square.reduce((acc, cur) => acc + cur, 0);

// let avg = sum / nums.length;
// // console.log(avg)

// Qs2. Create a new array using the map function whose each element is equal to the
// original element plus 5

// let numbers = [2, 4, 6, 8, 10, -2];

// let res = numbers.map((number) => number + 5);
// console.log(res);

// Qs3. Create a new array whose elements are in uppercase of words present in the
// original array

// let strings = ['anas', 'jawaid', 'suhaib', 'usman', 'saad', 'ali', 'afauqe'];
// let res = strings.map((string) => string.toUpperCase());
// console.log(res);


// Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
// variable number of arguments. The function should return a new array with the original
// array values and all of the additional arguments doubled


// let array = (arr, ...args) => [...arr, ...args.map((v) => v*2),];
// let res1 = array([7],7);
// let res2 = array([8],8);
// console.log(res1);
// console.log(res2);

// Qs5. Write a function called mergeObjects that accepts two objects and returns a new
//  object which contains all the keys and values of the first object and second object

// let mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

// let res = mergeObjects({a: 10, b: 20},{c: 30, d: 40});
// console.log(res);