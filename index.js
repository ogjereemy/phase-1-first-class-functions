function receivesAFunction(spy){
    spy();

}
function returnsANamedFunction(fn){
    return function fn(){}
}
    


function returnsAnAnonymousFunction(){
    return function(){
        console.log()
    }

}