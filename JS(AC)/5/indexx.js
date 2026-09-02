const max=prompt("enter the no");
const random=Math.floor(Math.random()*max)+1;
console.log(random);

let guess=prompt("guess the no");

while(true){
    
    if(guess=="quit"){
        console.log("user quit");
        break;
    }
    if(guess==random){

         let right=alert("congratulations!!.....u guessed right!!\n Amazing guess!😊");
         
        break;
    }else{
        guess=prompt("please try again");
    }
}