(function(){
    console.log("method 1")
})();


(function(){
    console.log("method 2")
}());
/**
 * 
 */
let i = 5;
(function method3(){
    if(i-- == 0)    return
    console.log("method 3")
    method3()
}());