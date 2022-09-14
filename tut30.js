console.log('Iterature in javascript');
//Iterature

function fruitsIterature(values){
  let nextIndex = 0;
  //we will return an object
  return{
    next: function(){
        if(nextIndex<values.length){
            //we will return belove object
            return
            {
            value:values[nextIndex++];
            done:false
        }
    }
    else
    {
         return
         {
            done:true
         }
    }
    }
  }
}

const myArray= ['apple','orange','grapes','bhindi'];
console.log('My array is',myArray);






