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


           //map
    let ans=arr.map((value)=>{
        return value*2;
    });
    console.log(ans);

    //filter
    let ans1=arr.filter((value)=>{
        return value>2;
    });
    console.log(ans1);

    //every
    let ans3=arr.every((value)=>{
        return value%2==0;
    });
    console.log(ans3);


    //some
    let ans4=arr.some((value)=>{
        return value%2==0;
    });
    console.log(ans4);

    //reduce
    let ans5=arr.reduce((total,value)=>{
        console.log(value);
        return total+value;
    });
    console.log(ans5);


    // Find maximum in an array
    