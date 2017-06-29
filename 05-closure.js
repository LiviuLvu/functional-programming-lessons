var me = 'Smith Will';
var greet = () => console.log(`Hello, ${me} !`);
me = 'Hakman';

greet();

// function sendReq () {
// var requestID = '123';
// $.ajax({
//   url: './03-reduce.js',
//   success: function(response) {
//     console.log(`Request ${requestID} returned`);
//   }
// });