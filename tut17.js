console.log("Local & Session storage in JavaScript ");

let arr = ['mango','grapes','orange'];

//add in local storage

localStorage.setItem('name','harry');
localStorage.setItem('name2','Raj');
localStorage.setItem('fruits',JSON.stringify(arr));
//Get items from local storage

let name=localStorage.getItem('name');
//console.log(name);
name = JSON.parse(localStorage.getItem('fruits'));
console.log(name);

//clear Elements

// localStorage.clear();
//localStorage.removeItem('name2');

//session storage

sessionStorage.setItem('fatherName','xyz');
sessionStorage.setItem('motherName','byn');