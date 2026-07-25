console.log('hello sir');

let lastName='Babbar';
let firstName=new String('love');

//let message='this is \n my \n first\n message';//iska use krna pdh rha ha
/*let message = `This
is my 
house`;
console.log(message);
//let words=message.split('');
//console.log(words);*/


/*let message = `Hello ${lastName},
Thanks for the opportunity, 
Regards,
Ayush`;
console.log(message);

let date=new Date();
let date2=new Date('JUNE 20 1998 07:15');

let date3=new Date(1998,6,20,7);
console.log(date3);*/


             //ARRAYS
let numbers=[1,4,5,6,8];
console.log(numbers); 
//end->push
//beginning->unshift;
//middle->splice;
//searching
console.log(numbers);
console.log(numbers.indexOf(5));         

//we want to check if no exist in arrys
if(numbers.indexOf(4)!= -1)
    console.log("present");//bad practice

//good practice
console.log(numbers.includes(7));
//advanced version
console.log(numbers.indexOf(4,2));//ye primitive ke upr sikhs hai

//ab refernces ke upr
let courses=[
    {no:1,naam:'Ayush'},//yha pr address alg hai
    {no:2,naam:'Gupta'}
];
console.log(courses);
//console.log(courses.indexOf( {no:1,naam:'Ayush'}));//yha pr address alg hai

 let course=courses.find(function(course){
    return course,naam=='Ayush';
})
console.log(course);


