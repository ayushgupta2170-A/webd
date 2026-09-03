//for each
let arr=[1,2,4,5,6];

arr.forEach(function(el){
   console.log(el)});
//let print=function(el){
//    console.log(el);
//};
//arr.forEach(print);

let arrr=[
    {
        name:"ayush",
        marks:95,
    },
    {
        name:"aush",
        marks:96,
    },
    {
        name:"arush",
        marks:98,
    }];

    arrr.forEach((student)=>{
        console.log(student.marks);
    });