console.log("Regular Expression");

let reg = /^harry/g;
reg =/writer$/;
reg=/h.rry/;
reg=/h*rry/;

let s = `harry is good writer`;

if(reg.exec(s)){
    console.log("Yes your code is run");
}
else
{
    console.log("Bro check your code");
}
