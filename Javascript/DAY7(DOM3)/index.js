//adding 100para

/*const t1=performance.now();
for(let i=0;i<=100;i++){
    let newElement=document.createElement('p'); 
    newElement.textContent='this is para'+i;

    document.body.appendChild(newElement);
}
const t2=performance.now();
console.log('this took'+(t2-t1)+"ms");
*/



/*
//optimising a bit
let myDiv=document.createElement('div');
const t3=performance.now();
for(let i=0;i<=100;i++){
    let element=document.createElement('p');
    element.textContent='this is para'+i;

    myDiv.appendChild(element);
}
document.body.appendChild(myDiv);
const t4=performance.now();
console.log('this took'+(t4-t3)+"ms");
*/


//using fragment
for(let i=0;i<=100;i++){
    let newElement=document.createElement('p'); 
    newElement.textContent='this is para'+i;

    document.body.appendChild(newElement);
}
