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
