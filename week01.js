console.log("Hello");

// -------------

document.write('Here is practicle 1 to 3','<br/><br/>');
 l=23;
 b=55;
 pi=3.14;
 r=20;
document.write("Area of a rectangle:- ",l*b,'<br/>');
document.write("Area of a square:- ",l*l,'<br/>');
document.write("Area of a circle:- ",pi*r*r,'<br/>');
document.write('<br/><br/>');
// ----------------

//Write the sum of five numbers

document.write("4. Sum of numbers and average:- ",'<br/><br/>')
a=23;
b=345;
c=213;
d=45;
e=56;

document.write("sum :-", a+b+c+d+e,'<br/>');
document.write("<b>average :-</b>", (a+b+c+d+e)/2,'<br/><br/><br/>');


//if-else statement

// -----------

document.write('5.Check whether number is even or odd.','<br/><br/>');

let no=20;

if(no%2 ==0){
    document.write('<b>Your no. is even</b>');
}
else
{
    document.write("<b>Your no. is odd</b>",no);
}

document.write('<br/><br/>')

// -----------------------

//2.

document.write('6.Take a year and check whether it is leap year or not','<br/>');
document.write('<br/>');
let year=2005;
if(year%4 ==0){
    document.write('Your year is leap year');
}
else
{
    document.write("<b>Your year is not leap year</b>");
}

document.write('<br/><br/>');


//**Take a number and check whether it is zero, positive or negative. */
//-------------

document.write('7.Take a number and check whether it is zero, positive or negative.<br/>')
document.write('<br/>');
let num=200;
if(num>0){
    document.write('<b>Your num is Positive</b>');
}
else if (num<0) 
{
    document.write("<b>Your num is negative</b>");
}
else
{
    document.write('<b>Your num is  zero</b>');
}

document.write('<br/><br/>');

// Take 2 numbers and display greatest number. (Also check equal number condition)

// -------------

document.write('8. Take 2 numbers and display greatest number.<br/>');

no1=35;
no2=25;

if(no2>no1)
{
    document.write('<b>no2</b> is greater than no1');
}
else if (no1>no2){
    document.write('<b>no1</b> is greater than no2');
}
else{
    document.write("Please check your number");
}

document.write('<br/><br/>');
//Take age and whether it is less than 18 or not. If it is less than 18 then print not eligible for vote.

//-----------
document.write('9. whether it is less than 18 or not');
document.write('<br/>');

age=20;

if(age>=18){
    document.write('You are aligable for vote');
}
else{
    document.write('Sorry You can not aligable for vote');
}

document.write('<br/><br/>');

//----------------------

//Find factorial
document.write('10.Find factorial');
f=10;

while(f<=1){
    document.write(f);
    f++;
}
document.write('<br/><br/>');

//Write a program to swap 2 numbers using third variable.

document.write('11.Write a program to swap 2 numbers');
document.write('<br/>');

var j=1;
while (j <= 5) {
    document.write("The number is " +j);
    document.write("<br />");
    j++;
    }
    
 document.write('<br/><br/>');
//_______________

r=10;

document.write("Decentrel mode order");

while(r>=2){
    document.write("Your number is",r,'<br/>');
    r-=2;
}

//*** */
p=15;
document.write('<br/><br/>');

