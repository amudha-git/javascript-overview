
var obj  = {};
// Every object (except the root object) has a prototype (parent). 
// To get the prototype of an object:
Object.getPrototypeOf(obj); 

// In Chrome, you can inspect "__proto__" property. But you should 
// not use that in the code. 

// To get the attributes of a property:
Object.getOwnPropertyDescriptor(obj, 'propertyName');

// To set the attributes for a property:
Object.defineProperty(obj, 'propertyName', {
    configurable: false,    // cannot be deleted
    writable: false,
    enumerable: false
});

// Constructors have a "prototype" property. It returns the object 
// that will be used as the prototype for objects created by the constructor. 
Object.prototype === Object.getPrototypeOf({})
Array.prototype === Object.getPrototypeOf([])

// All objects created with the same constructor will have the same prototype. 
// A single instance of this prototype will be stored in the memory. 
const x = {};
const y = {};
Object.getPrototypeOf(x) === Object.getPrototypeOf(y); // returns true 

// Any changes to the prototype will be immediately visible to all objects 
// referencing this prototype. 

// When dealing with large number of objects, it's better to put their
// methods on their prototype. This way, a single instance of the methods
// will be in the memory. 
Circle.prototype.draw = function() {}

// To get the own/instance properties:
Object.keys(obj);

// To get all the properties (own + prototype): 
for (let key in obj) {}



var  obj = {
    func1 : function(){} //func 1 is method
}



 
        // Object prototype( hasOwnProperty, ... ) <--array prototype ( push, pop, ... ) <--array 

        // Object prototype( hasOwnProperty, ... ) <--function prototype ( bind, apply, ... ) <--function 




// class a {
    // fun1(){

    // }

// }

//class a = new A();
//a.fun1()

// class b extends a {

// }



function Rectangle( length, breadth )
{   
    //1, this --> {}
    this.length = length; //{ length :  length }
    this.breadth = breadth; //{ length :  length, breadth : breadth }
 
}

Rectangle.prototype.getArea = function()
{
    return this.length * this.breadth;
}


var rectangle = new Rectangle( 10,15 ); //{ length :  length, breadth : breadth, __prototype : { getArea() } }



var area = rectangle.getArea();


//person --> { experience, baseSalary }
//person.calculateSalary() --> experience * baseSalary