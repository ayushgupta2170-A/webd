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


let meraPromise1=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('i am fresher1');
    },3000);
    resolve(2233);
    //return 2;
    //reject(new Error('bhaisahab error aa rhi'))
    
});
//console.log('phla1');
meraPromise1.then((value) => {console.log(value)});


/*
let meraPromise2=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('i am fresher2');
    },5000);
    //resolve(2233);
    //reject(new Error('bhaisahab error aa rhi'))
});
console.log('phla2');
*/