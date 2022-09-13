console.log('Object Literals, Constructors and Object Oriented JavaScript');

//object Literals

// let car={
//     name:'Maruti 800',
//     Topspeed :80,
//     run: function(){
//         console.log('Your car is running');
//     }
// }

// console.log(car);

//constuctors

// function Generalmotors(givenName , topspeed){

//     this.name=givenName;
//     this.Topspeed=topspeed;
//     this.run=function(){
//         console.log(`${this.name} car is running.....`);
//     }
//     this.analyse=function(){
//         console.log(`This car is ${200-this.Topspeed} km/h slower than mercedes`);
//     }
// }

// car1= new Generalmotors('nissan',150);
// car2=new Generalmotors('alto-800', 89);
// car3=new Generalmotors('Mercedes',200);

// console.log(car2);

//Library Managment

function bookstorage( books,author, assign){

    this.book=books;
    this.author=author;
    this.assign=assign;
    this.information=function(){
        console.log(`${this.book} is written by ${this.author} is assign to ${this.assign} on ${Date()}`);
        // document.write(`${this.book} is written by ${this.author} is assign to ${this.assign} on ${Date()}`);
    }
}

book1 = new bookstorage('Maharaj Prithviraj Chauhan','Chand bardai','Henil');

console.log(book1);