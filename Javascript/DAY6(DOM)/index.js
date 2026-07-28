function eventFunction(){
    console.log('I have clicked on the document ')
};

document.addEventListener('click',eventFunction);

//remove eventListener
function eventFunction(){
    console.log('I have clicked on the document ')
};

document.removeEventListener('click',eventFunction);//click ke baad jo likha ghai voh fx hai 