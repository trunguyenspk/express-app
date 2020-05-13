//JavaScript in strict mode does not allow variables to be used if they are not declared.
//"use strict"; 

var person = {
  firstName: 'Hoang',
  lastName: 'Pham',
  friends: ['Minh', 'Sang', 'Khoa', 'Hoang'],

  haha: function(){

  },

  showName: function() {
    console.log(this.firstName + ' ' + this.lastName);
  },

  showFriend: function () {
    for (var i = 0; i < this.friends.length; i++)
      console.log(this.firstName + ' have a friend named ' + this.friends[i]);
  },

  showFriendThis: function () {
    this.friends.forEach(function (fr) {
      console.log(this.firstName + ' have a friend named ' + fr);
      //this.firstName = undefined
    });

    /*Fix as below
      var _person = this;
      this.friends.forEach(function (fr) {
        console.log(_person.firstName + ' have a friend named ' + fr);
      });

      //OR
      
      this.friends.forEach(function (fr) {
        console.log(_person.firstName + ' have a friend named ' + fr);
      }, this);
    */

      //arr.forEach(callback[, thisArg])
      //the value of this will be the default value of a normal function call 
      //either undefined in 'strict mode' or the global object (window in browsers) in 'non-strict'

      //https://stackoverflow.com/questions/28708216/why-this-refers-to-window-in-foreach-in-javascript
  }
};


try 
{
  //person.showFriend(); //Hàm chạy đúng

  //person.showFriendThis(); // Hàm chạy sai

  //var showNameFunc = person.showName; //Gán function vào biến showNameFunc
  //showNameFunc(); //Chạy sai, ở đây this sẽ là object window
}
catch (error) 
{
  var a = error
}

module.exports = {};