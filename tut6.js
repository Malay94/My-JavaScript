console.log("Arrays and Objects in JS.");

//Arrays in JS.

const marks=[34,56,23,78,47];
const fruits=['orange','mango','Apple','grapes'];
const mixed=['orange',45,[43,54,43]];

const arry= new Array(23,78,76,'orange');

// console.log(arry);
// console.log(mixed,typeof(mixed));
// console.log(fruits[1]);
// console.log(arry.length);
// console.log(Array.isArray('orange'));

// arry[0]='meFirst';
// let arryelement= arry[0];

// console.log('element :',arryelement);
// console.log(arry);

//*****************(Index of)

let value = marks.indexOf(78);
console.log(value);

let value2= fruits.indexOf('mango');
console.log(value2);


// ************( my object)****************//

let myobj={
     name:'malay',
     channel:'nochannel',
     isActive:true,
     marks:[1,5,3,7],
}
console.log(myobj);
console.log(myobj.name);
console.log(myobj['name']);
console.log(myobj.channel);
console.log(myobj.marks);