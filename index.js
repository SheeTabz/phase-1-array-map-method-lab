const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = tutorials.map(function(item){
//   const words = item.split(" ");
//     words.map(function(w) {
//       w = w.charAt(0).toUpperCase() + w.substr(1);
//       return w;
//   })

// })
// console.log(titleCased)
let newArr

function titleCased(){
  newArr=tutorials.map(item => {
    let word=item.split(' ');
    let word2=word.map(w=>`${w.charAt(0).toUpperCase()}${w.slice(1)}`).join(' ');
    return word2;
    
    
  });
  return newArr;
}
console.log(titleCased())







// const robots = [
//   { name: "Johnny 5", modes: 5, isActivated: false },
//   { name: "C3PO", modes: 3, isActivated: false },
//   { name: "Sonny", modes: 2.5, isActivated: false },
//   { name: "Baymax", modes: 1.5, isActivated: false },
// ];


// const updatedRObots = robots.map(function(robot){
//   return Object.assign({}, robot, {modes: robot.modes * 2, isActivated: true})
// })
// console.log(updatedRObots)
// console.log(robots)

