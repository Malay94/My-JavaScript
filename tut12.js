console.log("Practice Work");
//You have to create a variable which is string containg text the text which is link you have to
//instresting in.
//You have to fetch all the links  from page which contain this text.

let str='google';
let a= document.links;
console.log(a);

let href;
Array.from(a).forEach(function(element){
    href=element.href;
    if(href.includes('facebook')){
        console.log(href);
    }
})