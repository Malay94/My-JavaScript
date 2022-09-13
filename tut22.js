console.log("Object Prototype In javascript");

//

// let obj={
//     name:'harry',
//     channel:'codewithHarry',
//     address:'moon',
// }

// console.log(obj);

// function obj2(givenName,channel){

//      this.name=givenName;
//      this.channel=channel;
// }

// let z = new obj2('Raj','Harrybhai');
// console.log(z);

function Obj(givenName){
    this.name=givenName;
}
Obj.prototype.getName =function(){
    return this.name;
}

Obj.prototype.setName =function(newName){
    this.name=newName;
}




let obj2 = new Obj('Raj');
console.log(obj2);