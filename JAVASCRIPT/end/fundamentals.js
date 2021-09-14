
/********************
******DATA TYPES*****
*********************/

var age = 23;
var firstName = "Bob";
var isValid = true;
var hello;


// /********
//  * functions
//  */

// //type 1 - function expression
// var addTwoumbers = function( num1, num2 )
// {
//     return num1 + num2;
// }

// addTwoumbers( 1,2 ); //3



// //type 2 - function statement

// function addTwoumbers( num1, num2  )
// {
//     return num1 + num2;
// }

// addTwoumbers( 1,2 ); //3


// //function expression - example
// function mainFunc()
// {
//     int a;
//     int b;

//     console.log( addTwoNumbers( 1,2 ) );

//     function addTwoNumbers( num1, num2 )
//     {
//         return num1 + num2;
//     }

// }

// mainFunc();

//hoisting

function mainFunc()
{   

    var age;

    var number;

    func1()

    var  func1  = function(){ console.log("func1 is executed" ); }


}

mainFunc();

