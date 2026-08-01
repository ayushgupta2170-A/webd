/*
function sync(){
    console.log('first');
}
sync();
console.log('second');
*/

setTimeout(function(){
    console.log('third');
},5000)
function sync(){
    console.log('first');
}
sync();
console.log('second');