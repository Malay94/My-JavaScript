console.log("Creating, Removing & Replacing Elements");

// let elem= document.createElement('li');

// elem.className='no';
// elem.id='elem1';
// elem.setAttribute('title','mytitle');
// elem.innerText="<b>Hello bro!</b>";
// elem.innerHTML="<b>Hello bro!</b>";


// let no= document.querySelector('.childapp');
// no.appendChild(elem);

// console.log(elem);

//****************(Creating element)**********

// let elem1 = document.createElement('li');
// let text =document.createTextNode('Hi! Bro How are You!');

// elem1.className='elem1';
// elem1.id='elem1';
// elem1.setAttribute('title','mytitle');

// let app = document.querySelector('.myfirstchild');
// app.append(text);
// console.log(app);

//********************(Replace element)*************************** */


let elem1 = document.createElement('li');
let text =document.createTextNode('Hi! Bro How are You!');

elem1.className='elem1';
elem1.id='elem1';
elem1.setAttribute('title','mytitle');

let app = document.querySelector('.myfirstchild');
app.append(text);

let elem2=document.createElement('h2');
let text2=document.createTextNode('This is a book.');
elem2.appendChild(text2);

elem2.className='elem2';
elem2.id='elem2';

elem1.replaceWith(elem2);

console.log(elem2);

