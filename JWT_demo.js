
const jwt = require('jsonwebtoken');

var data = {
  name: "ABC",
  address: "HCM"
};
var secret_key = "secret_key";

var token = jwt.sign(data,
  secret_key,
  {
    expiresIn: "2000" // in miliseconds or 1s / 1h / 2d 
  });

jwt.verify(token, secret_key, (error, decodedData) => {
  if (error) {
    var message = error.message;
  }
})


var decodedData = jwt.decode(token);

var exit = 0;