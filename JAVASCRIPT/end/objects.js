// The simplest way to create an object is using an object literal 
const circle = { 
    radius: 1, 
    draw: function() { console.log( "circle is drawn with radius 1")}
 }; 
    
 // To create multiple objects with the same structure and behaviuor (methods), use a factory or a constructor. 
 
 // Factory function 
 function createCircle(radius) { 
    return {
       radius : radius, 
       draw: function() {}
    } 
 } 
 
 // Constructor function 
 function Circle(radius) { 
     this.radius = radius; 
     this.draw = function() {}
 } 
     
 // Every object has a "constructor" property which returns the function that was used to construct or create that object. 
 const x = {};
 x.constructor; // returns Object() 
    
 // In JavaScript, functions are objects. They have properties and methods. 
 Circle.name; 
 Circle.length;
 Circle.constructor; // returns Function()
 Circle.call({}, 1); // to call the Circle function 
 Circle.apply({}, [1]);
 
 // Value types are copied by their value, reference types are copied by their reference. 
 // Value types in JavaScript are: String, Number, Boolean, Symbol, undefined and null
 // Reference types are: Object, Function and Array 
    
 // JavaScript objects are dynamic. You can add/remove properties: 
 circle.location = {};
 circle['location'] = {};
                       
 delete circle.location; 
                       
 // To enumerate the members in an object: 
 for (let key in circle) console.log(key, circle[key]);
 
 Object.keys(circle); 
                       
 // To see if an object has a given property
 if ('location' in circle)
                       
 // Abstraction means hiding the complexity/details and showing only the essentials. 
 // We can hide the details by using private members. Replace "this" with "let". 
 
 function Circle(radius) { 
    // Public member 
    this.radius = radius; 
 
    // Private member                       
    let defaultLocation = {};                      
 }                       
 
 // To define a getter/setter, use Object.defineProperty():
 
 Object.defineProperty(this, 'defaultLocation', {
     get: function() { return defaultLocation; },
     set: function(value) { defaultLocation = value; }
 });


 //object creation

 var simpleObj = 
 {
    radius : 5,

 };



 //Object literals
 var circle = { 
    radius: 1, 
    draw: function() { 
        console.log( this );
        console.log( 'circle is drawn with radius' + this.radius );
    }
 }; 
 

 // Factory function 
 function createCircle(radius) 
 { 
    return {
       radius : radius, 
       draw: function() {
           console.log( "circle is drawn with radius" +  this.radius );
       }
    } 
 } 


 function testFunc()
 {
     console.log( this );
 }

 testFunc();

 createCircle( 5 ).draw();


 var circle  = 
 {
     prop1 : 
     {
        radius1 : 5,

        draw1 : function(){

            console.log( this );
        }
     },
     prop2 : 
     {
         radius2 : 10,

         draw2 : function(){}
     }
 }

 circle.prop1.draw1();


//  circle.prop1
//  circle[ "prop2" ];



//create a obj rectangle
//it can have props like length and breadth and calculateArea
//rectangle.calculateArea() -- > l*b

//length - 10
//breadth - 5
//rectangle.calculateArea() - 50




function Shape()
{

}

Shape.prototype.area = function()
{

}

function Sqaure()
{

}

Sqaure.prototype = Shape;

