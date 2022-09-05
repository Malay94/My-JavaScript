console.log("Loops  while,do-while ,for");

//For loop

// for (let i=0;i<10;i++){
// console.log(i)
// }

//while loop

// let j=0;
// while(j<15)
// {
//     console.log(j);
//     j++;
// }

// let k=0;
// do
// {
//     console.log(k+1);
//     if(k===5){
//         console.log('break');
//         break;
//     }
//     k++;
// }while(k<10);

// console.log('Done');

let l=0;
do
{
    if(l===5){
        l++;
        console.log('continue');
        continue;
    }
    console.log(l+1);
    l++;
}while(l<15);

console.log('Done');

// let m=3;
// do{
//     if(m===5){
//         m++;
//         console.log('continue');
//         continue;
//     }
//     console.log(m+1);
//     m++;
// }while (m<10)\

// let j=0;
// do{
//     if(j===3){ 
//         j++;
//         console.log('break');
//         break;
//     }
//     console.log(j);
//     j++;
// }while (j<10) 


//*****(Array)
// let arr=[ 12, 34, 54, 12,4 ];

// arr.forEach(function(element)
// {
//     console.log(element);
// });
// console.log('done');

//******(object)


// let obj={
//     name:'Rahuldas',
//     age:'102',
//     book:'Java Script',
//     os:'Android',
// }

// for (let key in obj){
//     console.log(`The ${key} of object is ${obj[key]}`)
// }
// console.log('Done');