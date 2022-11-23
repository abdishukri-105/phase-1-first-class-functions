function initialFunction(){
    return `am doing software engineering`
}

 

function receivesAFunction(initialFunction){
    initialFunction()
}

function returnsANamedFunction(){
   return initialFunction
}

function returnsAnAnonymousFunction(){
   return function(){
    console.log(`i am anonymous`)
   }

}

