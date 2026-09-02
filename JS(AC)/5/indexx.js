const max=prompt("enter the no");
const random=Math.floor(Math.random()*max)+1;
console.log(random);

let guess=prompt("guess the no");

while(true){
    if(guess=!random){
        guess=prompt("please try again");
    }
    if(guess=="quit"){
        console.log("user quit");
        break;
    }
    if(guess==random){
        console.log("congratulations!!.....u guessed right!!");
        break;
    }
}