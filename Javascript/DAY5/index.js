//console.log('hello kya haal chaal');


run();
//fx declaration
function run(){
    console.log('running');
}
//fx call
//run();

//Named function assignment
let stand=function walk(){
    console.log('running in the hell');
};

//Anonyms function assignment
let stand2=function(){      //walk hta diya
    console.log('running in the hell');
};
stand();//inn case of function assignment ye niche hi likhna pdega as comapared to fx declaration


let jump=stand;
jump();
stand2();

let x=1;
x='a';
console.log(x);

function sum(a,b){
    console.log(arguments);
    return a+b;
}
console.log(sum(3,4));
console.log(sum(1));//dusri value not defined maani jayegi
console.log(sum());
console.log(sum(1,2,0,4,5,6));//phle ke do liye jayenge

let ans=sum(1,2,3,4,5,6);