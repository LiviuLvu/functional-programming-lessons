// NOTES on the functor concept:
// functor example: an object that has a map function is a functor
// array.map, promises, streams ...
// the map function can work with any type of values
// one can chain multiple map functions

// this is example from video 1 on functors, described as partially wrong in the second video
stringFunctor = (value, fn) => {
  let chars = value.split("");

  return  chars.map((char) => {
    return String.fromCharCode(fn(char.charCodeAt(0)));
  }).join("");
}

let plus1 = (value) => value + 1;
let minus1 = (value) => value - 1;

let demoMap = [3,4].map(plus1);
// console.log(demoMap);

let stringOperation1 = stringFunctor("ABC", plus1)
// console.log(stringOperation1);

let stringOperation2 = stringFunctor("XYZ", minus1)
// console.log(stringOperation2);


// this is the example in the second video
const dragons = [
  {name: 'Fluffykins', health: 70},
  {name: 'Deathlord', health: 6500},
  {name: 'Little', health: 2}
]

const names = dragons
  .map(dragon => dragon.name)
  .map(dragon => dragon.length)

console.log(names);