console.log('Date Object: Date & Time In JavaScript');

let today=new Date();
// console.log(today);

a=today.getDay();
a=today.getFullYear();
a=today.getHours();
a=today.getMonth();
a=today.getMilliseconds();

// console.log(a);

let z=new Date('8-10-1994 5:23:35');
otherDate= new Date('02/23/2102');
otherDate.setDate('03');
otherDate.setMonth('8');
otherDate.setMinutes('28');
otherDate.setHours('09');
otherDate.setSeconds('29');

// console.log(z);
console.log(otherDate);