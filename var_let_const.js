//"use strict";

const ENV = 'DEVELOPMENT';


//HOISTING: Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope 
//[to the top of the current script or the current function]

function addWithDoubleValue(a, b) {
    //doubleA and doubleB only valid in this function
    var doubleA = a * 2;
    var doubleB = b * 2;

    var aa = 1000 + testVar ;

    var testVar = 2000;

    return doubleA + doubleB;
}
//console.log(doubleA); // Error: doubleA is not define

//-------

//Trong Javascript không có biến cục bộ của khối lệnh và biến có thể sử dụng trước khi nó khai báo mà không sinh ra lỗi
console.log(notDefined); // notDefined = undefined
var notDefined = 5;

//========================================================

var age = 15;
if (age >= 18) {
  var message = 'message';
}

/*
    var age = 15;
    var message;
    if (age >= 18) {
        var message = 'message';
    }
*/
console.log(message); // message = undefined as variable hoisting

//========================================================

blockScope();
function blockScope() {
    for (let i = 0; i < 5; ++i) {
      let varInFor = i; // i only valid in for with LET 
    }
    //console.log(i); // Error: i is not defined
}

//-------

const PI = 3.14;
//PI = 3.5; // TypeError: Assignment to constant variable
  
const obj = {'name': 'constant'};
obj.type = 'Something go wrong!'; // This is okay


//https://stackoverflow.com/questions/16383795/difference-between-module-exports-and-exports-in-the-commonjs-module-system
module.exports = {
    ENV,
    addWithDoubleValue
};