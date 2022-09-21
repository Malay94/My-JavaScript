console.log("Hetre are your oops concepts");

//constructor ..
//object with,single parameter

class Car{
    constructor(name){
        console.log("Car class constructor call");
        this.name=name;
    }
}

myCar = new Car('alto-800');
myCar1 = new Car('BMW');
console.log(myCar.name)
console.log(myCar1.name)

//object in mutiple parametre

class Car{
    constructor(name,age,education){
        console.log("Car class constructor call");
        this.name=name;
        this.age=age;
        this.education=education;
    }
}

myCar = new Car('alto-800',33,'Computer Engineer');
console.log(myCar);

//JavaScript class method

class Car{
    constructor(name){
        this.name=name;
      console.log(`This is a ${this.name} car`);
    }

    greet(){
        console.log(`This ${this.name} car is not too costly`);
    }
}
// accensic Properties
let myObj = new Car('swift');
console.log(myObj.name);

//assendric method
myObj.greet();

// //2.

    class Calculator{

        constructor(no1,no2){
            this.no1=no1;
            this.no2=no2;
        }
        sum(){
            return this.no1+this.no2;
        }
        sub(){
            return this.no1-this.no2;
        }
    }

  // var myObj=new Calculator(20,10);
   var sum= myObj.sum();
   console.log("sum is",sum)
   var sub=myObj.sub();
   console.log("Sub of no is",sub);

//Get and set method

class Calculator{
    constructor(no1){
        this.no1=no1;
    }

    get Myvalue(){
        return this.no1;
    }

    set Myvalue(x){
        this.no1=x;
    }
}

//Get number
 var obj = new Calculator(10);
 console.log(obj.no1);

//set number
 obj.Myvalue=55;
 console.log(obj.no1);

//2.

class Car{
    constructor(name){
      this.name=name;
    }
    get modal(){
        return this.name;
    }
    set modal(x){
        this.name=x;
    }
}
// Get number
var obj= new Car("Swift");

//set number
obj.name="alto";
console.log(obj.modal);

//3.

class Man{
    constructor(age){
        this.age=age;
    }
    get highage(){
        return this.age;
    }
    set highage(x){
        this.age=x;
    }
}

var myobj = new Man(25);
console.log(myobj.highage);

myobj.highage=30;
console.log(myobj.highage);

// //4.inheritance

class Player {
  constructor(run) {
    this.run = run;
  }
  get makerun() {
    return this.run;
  }
  set makerun(x) {
    this.run = x;
  }
}

let myobj = new Player(50);
console.log(myobj.makerun);

myobj.makerun = 100;
console.log(myobj.makerun);

class Student extends Player {}
let mystu = new Student(50);
console.log(mystu.makerun);
