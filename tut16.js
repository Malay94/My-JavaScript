console.log('Events & Event Object In JavaScript');

// // //click

// // document.getElementById('mySecond').addEventListener ('click', function(){
// //     console.log("You have clicked bro!");
// // })

// document.getElementById('mySecond').addEventListener('click',function(e){
//     console.log('You have just click It');
   
//       // let variable = e.target;
//      // let variable=e.target.className;
//     // variable = e.target.id;
//    // variable =e.offsetX;
//   // variable =e.offsetY;
//  // variable=Array.from(e.target.classList);


//     console.log(variable);

// })


//**********************(Part-2)

// let btn = document.getElementById('btn');
// btn.addEventListener('click',func1);
// btn.addEventListener('dblclick',func2);
// btn.addEventListener('mousedown',func3);


// function func1(e){
//     console.log('Thank You!',e);
//     e.preventDefault();

// }

// function func2(e){
//     console.log('Thank You its double click bro!!',e);
//     e.preventDefault();

// }

// function func3(e){
//     console.log('alya Mouse down aato!',e);
//     e.preventDefault();

// }

// document.querySelector('.container').addEventListener('mouseenter',function(e){
//     console.log('You trigger mouse');
// })

// document.querySelector('.container').addEventListener('mouseleave',function(e){
//     console.log('You leave your Mouse');
// })

document.querySelector('.container').addEventListener('mousemove',function(e){
    console.log('See changes Bro!!')
    document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},167)` ;
})