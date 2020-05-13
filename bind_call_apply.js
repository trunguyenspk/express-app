//JavaScript in strict mode does not allow variables to be used if they are not declared.
//"use strict"; 

try {

  function log(level, time, message) {
    return level + ' - ' + time + ': ' + message;
  }

  // Không có this nên set this là null , set mặc định 2 tham số level và time
  var logErrToday = log.bind(null, 'Error', 'Today');

  // Hàm này tương ứng với log('Error', 'Today', 'Server die.')
  var result = logErrToday("Server die");

  function test(firstParam, secondParam, thirdParam) {
    var args = Array.apply(null, arguments);
    console.log(args);
  }

  //test(1, 2, 3); // [1, 2, 3]

  function mainRun() {
    console.log('FIRST');

    setTimeout(function canWait() {
      console.log('setTimeout');
    }, 0);

    console.log('LOOP');
  }

  //mainRun();
  
}

catch (error) 
{
  var a = error
}

module.exports = {};