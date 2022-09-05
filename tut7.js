console.log("If - Else conditions");

let age = 38;

// if (age == 19){
//     console.log('Your age is 19'); //if we want to check with type we need to put 3(===).
// }

// else if (age == 29){
//     console.log('Your age is 29');
// }

// else{
//     console.log('sorry bro you are not 19 and 29 year old !')
// }


let doesdrive= false;
let health = true;

// if (age >= 18){
//     console.log('You can Drive');
// }
// else{
//     console.log('You can not drive');
// }

//operators in if condition.

if(doesdrive && age >=18 && health){
    console.log('You are very good bro!')
}

else if(doesdrive || age >= 29 && health)
{
 console.log('Please Bhai Dekh ke!');
}

else{
    console.log('Please check details');
}
//tourmaric operator(condition==>true/false.)
console.log(age >= 45 ? 'You can drive':'You can not drive');

//switch case
switch(age){
    case 18:
        console.log('You are 18');
        break;
       
    case 28:
        console.log('You are 28');
        break;
            
    case 38:
        console.log('You are 38');
        break;
    default:
        console.log('Bhai bhai you are unknown')
      break;
}