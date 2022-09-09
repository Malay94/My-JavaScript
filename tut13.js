console.log("DOM Selectors");

//There are two types of elements Selectors
//1.Single element selector
//2.Multi element Selector

//************************(Single Element Selectors)*********************************/ 
//1.Single Element Selector

//let element=document.getElementById('myfirst');
//element=element.className;
//element= element.parentElement;
//element=element.childElementCount;
// element.style.color='red';
// element.innerHTML='<b>\"Hi bro ! How are you!\"</b>';
//element.innerText='Hi bro!';  ==> //console.log(element.innertext)
//console.log(element);

//******(Query Selector)*/

//let sel= document.querySelector('#myfirst');
//sel=document.querySelector('.child2');
// document.querySelector('.child2').style.color='red';
// sel=document.querySelector('.child3');
// sel.style.color='green';
 
// console.log(sel);


//************************(Multi Element Selectors)*********************************/

// let elems =document.getElementsByClassName('child');
// elems =document.getElementsByClassName('container');
// elems=document.getElementsByTagName('div');

// console.log(elems);

let elems =document.getElementsByClassName('container');
elems=document.getElementsByTagName('div');
Array.from(elems).forEach(function(element){
    console.log(element);
    element.style.color="blue";
})

console.log(elems);