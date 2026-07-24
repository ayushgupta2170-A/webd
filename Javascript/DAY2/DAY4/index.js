console.log('chaliye suru krte hai');

//object create
/*let rectangle={
    length:1,
    breadth:2,

    draw: function(){
        console.log('drawing rectangle');

       }
}; */ 

/*
        //factory function
function createRectangle(len,bred){
    return rectangle={
    length:len,
    breadth:bred,
    draw(){
    console.log('drawing rectangle');
    }
  };
}
 */


//baar baar nhi likhna pdega  drect ek line mein hi krlo
//fx call vala trika

/*
let rectangleObj1=createRectangle(5,4);
let rectangle2=createRectangle(9,4);
let rectangle3=createRectangle(5,8);
*/

//camelcase->numberOfStudents
//constructor fx->pascalNotation->first letter of every word is Capital->NoOf students
//constructor fx->prop/methods->initialise/define
function Rectangle(leng,bred){//likh small r bhi likh skte hai..for good capital R
    this.length=leng;
    this.breadth=bred;
    this.draw=function(){
        console.log('drawing');
    }

} 
//object using construction fx
let rectangleObject=new Rectangle(4,6);
//let rectangleObj1=createRectangle(5,4);ye vala bhi trika use kr skte hai

rectangleObject.color='yellow';
console.log(rectangleObject);

delete rectangleObject.color;
console.log(rectangleObject);

let myRectangle = new Function('leng', 'bred', `
    this.length = leng;
    this.breadth = bred;
    this.draw = function() {
        console.log('drawing');
    };
`);

    //object creation using rectangle
    let rect=new myRectangle(2,6);
    console.log(rect);
    rect.draw();




   //rectangle.length;
   //rectangle.breadth;
   //rectangle.draw();


//     itna lmba likhna vala triak hr ek case ke liye
   /*let rectangle2={
    length:1,
    breadth:2,

    draw: function(){
        console.log('drawing rectangle');

       }
}; */ 

let a=10;
let b=12;
a++;
console.log(a);
console.log(b);


let d={ value:45};
let f=d;
d.value++;
console.log(d.value);
console.log(f.value);


let p=10;
function inc(p){
    p++;
}
inc(p);
console.log(p);//let p=10; ye value leta hai vaise aana toh 11 chahiye