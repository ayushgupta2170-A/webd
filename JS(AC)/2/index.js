let todo=[];
let req=prompt("please enter your task");

while(true){
    if(req=='quit'){
        console.log("quiting the app");
        break;
    }

    if(req=="list"){
        console.log("__________");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
    }
}

console.log(req);