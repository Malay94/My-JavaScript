console.log("Es6 classes and Inheritance");

class Employee {
    constructor( givenName , givenExperiance , givenDivison){
        this.name=givenName;
        this.experiance=givenExperiance;
        this.givinDivison=givenDivison;
    }
    slogan() {
              return `I am ${ this.name}.`;
    }

    joiningYear(){
        return`You are joining in ${2022- this.experiance}.`;
    }
    static add(a,b){
        return a+b;
    }
}
class Programmer extends Employee{
    constructor(givenName , givenExperiance , givenDivison,language) {
    super(givenName , givenExperiance , givenDivison);
    this.language=language; 
    }
    favouritelanguage(){
        if(this.language == 'python'){
            console.log('Your favourite language is python');
        }
        else
        {
            console.log(`you selected ${this.language} as your favotite language`);
        }
    }
    static multiply(a,b){
        return a * b ;
    }
}

let xyz= new Programmer('raj',23,'comp','java');
console.log(xyz);
console.log(xyz.favouritelanguage());
console.log(Programmer.multiply(3,4));

// let harry=new Employee('harry',32,'division');
// console.log(harry);

// console.log(Employee.add(32,2));