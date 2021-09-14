//1. IIFE ( Immediately Invoked Function Expression )



function func1()
{
    console.log( "function is executed");
}

func1()


(function(){
  console.log( "IIFE function is executed");
})()




//2. How abstraction can be achieved via IIFE

var tvRemote = ( function(){


    var _currentVolume = 1;

    var _increaseVolume = function()
    {
        _currentVolume++;
        console.log( "current volume" + _currentVolume );
    }

    var _decreaseVolume = function()
    {
        _currentVolume--;
        console.log( "currentVolume" + _currentVolume );
    }

    return {
        volumeUp : _increaseVolume,
        volumeDown : _decreaseVolume
    }

}())



var intervalTimer =  setInterval( function(){ console.log("hello")}, 2000 );

clearInterval( intervalTimer );


setTimeout( function(){ console.log("hello")} , 1000 );






