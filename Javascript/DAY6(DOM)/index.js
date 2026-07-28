function eventFunction(){
    console.log('I have clicked on the document ')
};

document.addEventListener('click',eventFunction);

//remove eventListener
/*function eventFunction(){
    console.log('I have clicked on the document ')
};

document.removeEventListener('click',eventFunction);//click ke baad jo likha ghai voh fx hai 
*/


/*
//eventObject
const content = document.querySelector('#wrapper');
content.addEventListener('click',function(event){
    console.log(event);
})
*/


let links=document.querySelectorAll('a');
let thirdLink=links[2];

thirdLink.addEventListener('click',function(event){
    event.preventDefault();
    console.log('mza aaya,accha lga');
});
