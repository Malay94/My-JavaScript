console.log("Asynchronous Programming..")

setTimeout(() => {
    for(let index=0 ; index<4000;index++){
        const element = index;
        console.log(`This is a no. ${index}`);
    }
}, 100);

console.log('end of era');