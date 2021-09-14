
function Person(firstName, lastName, age, gender, interests ) 
{
    
    this.firstName = firstName
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
}

Person.prototype.greet = function()
{
    console.log( 'Hi ' + this.firstName + this.lastName );
}

Person.prototype.isMajor = function()
{
    return this.age >= 18;
}

Person.prototype.isMinor = function()
{
    return this.age < 18;
}


function  Teacher( firstName, lastName, age, gender, interests, subject )
{      

    Person.call( this, firstName, lastName, age, gender, interests );

    this.subject = subject; 
}


Teacher.prototype = Object.create( Person.prototype );
Teacher.prototype.constructor = Teacher;

Teacher.prototype.getSubject = function()
{
    return this.subject;
}


var teacher;

document.getElementById("submit").addEventListener( "click", function(){


    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var gender = document.getElementById("gender").value;
    var age = document.getElementById("age").value;
    var subject = document.getElementById("subject").value;

    teacher = new Teacher( firstName, lastName,  age, gender, [ "biking", "swimming", "dancing"], subject );


    console.log( teacher );





})