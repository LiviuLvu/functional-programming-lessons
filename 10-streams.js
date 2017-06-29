// demo 1
const numStream = {
  each: (callback) => {
    setTimeout( () => callback(1), 1000 );
    setTimeout( () => callback(2), 2000 );
    setTimeout( () => callback(3), 3000 );
  }
}

// numStream.each(console.log);

// demo 2
const fs = require('fs');
const highland = require('./vendors/highland.min.js'); 
highland(fs.createReadStream('./data/customers.csv', 'utf8'))
  .split()
  .map(line => line.split(','))
  .map(parts => ({
    name: parts[0],
    numPurchases: parts[1]
  }))
  .filter( customer => customer.numPurchases > 2)
  .map( customer => customer.name )
  .each( name => console.log('each:', name) );
