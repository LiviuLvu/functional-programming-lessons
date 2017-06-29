var triple = (x) => {
  return x * 3;
}

var waffle = triple;

// console.log(waffle(30));

var animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro', species: 'dog' },
  { name: 'Hamilton', species: 'dog' },
];

var dogs = animals.filter( (animal) => animal.species === 'dog' );
// console.log(dogs);

var isDog = (animal) => animal.species === 'dog';
var dogs2 = animals.filter(isDog);
console.log(dogs2);

