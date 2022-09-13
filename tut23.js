console.log("Prototype Inheritance In JavaScript");

const proto ={
  slogan(){
    return`This company is best`;
  },
  changeName:function(){
    this.name = newName;
  }
}

//Create an object

// let harry=Object.create(proto);
//     harry.name="harry";
//     harry.channel="fygthcc";

//     //  harry.changeName("Raj");
//     console.log(harry)

// Second type to create object

const harry=Object.create(proto,{
    name:{value:"harry",writable:true},
    role:{value:"programer"},
});
harry.changeName('harry2');
console.log(harry);