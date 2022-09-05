console.log("Strings: Properties, Methods & Template Literals");

let name='Malay';
let greeting='Good morning';

console.log(greeting +' '+name +'!');

let html;
html = "<h1>this is a bussiness</h1>"+
       "<p>this Bussiness teach us lot</p>";

    //    html = html.concat('this' , ' ','str2');
    //    console.log(html);
    //    console.log(html.length);
    //    console.log(html.toUpperCase());
    //    console.log(html.toLowerCase());

    // console.log(html[1]);
    // console.log(html.indexOf('1'));
    // console.log(html.charAt(5));
    // console.log(html.lastIndexOf('s'));
    // console.log(html.endsWith('</p>'));
    // console.log(html.includes('us'));
    // console.log(html.substring(2,5));//if we write -4 then we make values full sting but not last 4 variable
    // console.log(html.slice(0,4));//if we write -4 then we make values from last 4 variable
    // console.log(html.split('>'));//break and make array when you get it
    // console.log(html.replace('this','it'));
    
    let fruit1='orange';
    let fruit2='mango';
    let myhtml=`hello! ${name} !
              <h1>This is about fruits</h1>
              <p>I like ${fruit1} but I love ${fruit2}</p>`;

        document.body.innerHTML=myhtml;

//         let name='Raj';
// let fruit1='Mango';
// let fruit2='Grapes';

// let html;
// html = `hello ${name} 
//      <h2>You are like ${fruit1} not ${fruit2}</h2>`;
     
//      document.body.innerHTML=html;