const boxes=document.querySelectorAll(".box");
const gameInfo=document.querySelector(".game-info");
const newGameBtn=document.querySelector(".btn");

let currentPlayer;
let gameGrid;

const winningPositions=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],
    [1,4,7],[2,5,8],[0,4,8],[,4,6]
];

//lets create to intialise game
function initGame(){
    currentPlayer="X";
    gameGrid=["","","","","","","","",""];
    //UI pr empty bhi krna pdeg
    boxes.forEach((box,index)=>{
        box.innerText="";
        boxes[index].computedStyleMap.pointerEvents="all";
    })
    newGameBtn.classList.remove("active");
    gameInfo.innerText=`Current Player - ${currentPlayer}`;
}
initGame();

function swapTurn(){
    if(currentPlayer==="X"){
        currentPlayer="0";
    }
    else{
        currentPlayer="X";
    }
    //UI update
    gameInfo.innerText=`current Player-${currentPlayer}`;
}

function gameOver(){
    newGameBtn.classList.add("active");
}

function handleClick(index){
    if(gameGrid[index]==""){
        boxes[index].innerHTML=currentPlayer;//UI pe kaam krta hai
        gameGrid[index]=currentPlayer;//gameGrid  pe kaam krta hai
        boxes[index].computedStyleMap.pointerEvents="none";
        //current color
        swapTurn();
        //check koi jeet toh nahi hai
        checkGameOver();
    }
}

boxes.forEach((box,index)=>{
    box.addEventListener("click",()=>{
        handleClick(index);
    })
});

newGameBtn.addEventListener("click",initGame);




