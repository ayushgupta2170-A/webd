/*
function sync(){
    console.log('first');
}
sync();
console.log('second');
*/

/*
setTimeout(function(){
    console.log('third');
},5000)
function sync(){
    console.log('first');
}
sync();
console.log('second');
*/


let meraPromise=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('i am fresher');
    },5000);
    //resolve(2233);
    reject(new Error('bhaisahab error aa rhi'))
});
console.log('phla');