function rollDice(){
    let random=Math.floor(Math.random()*5)+1;
    console.log(random);

}
rollDice();
rollDice();
rollDice();
rollDice();
rollDice();

function table(n){
    for(let i=n;i<n*10;i=i+=n){
        console.log(i);
    }
}
table(45);

function sum(a,b){
    return a+b;
}
console.log(sum(5,7));
console.log(sum(sum(5,7),7));