console.log("Hello I am type conversion and type coersion");

//###############*******(type of conversion)##########################//
//It means convert number one to another type


let myVar;
myVar = String(23);
console.log(myVar,typeof(myVar));

let booleanVar= String(true);
console.log(booleanVar,typeof(booleanVar));

let date= new Date();
console.log(date,typeof(date));

let arr= String([1,2,3,4,5]); //if we remove string ans:5 
console.log(arr.length,typeof(arr));

let i=6;
console.log(i.toString());

let str= true;
console.log(str,typeof str);

let stri= Number(true);
console.log(stri,typeof stri);

let shri= Number(new Date());
console.log(shri,typeof(shri));

let arry=[4,3,6,7,3,9];
console.log(arry,typeof(arry));

// There are two type of parse 
//1.ParseInteger
//2.Parsefloat

let j=parseInt(35.22223);
console.log(j,typeof(j));

let k=parseFloat(35.22223);
console.log(k,typeof(k));

let l=parseFloat(35.22223);
console.log(l.toFixed(2),typeof(l));//we can fix number useing toFixed method

// *****************************************************************************************************//

//###############*******(type of coercion)##########################//

let mystr='349';
let mynum=23;
console.log(mystr + mynum);