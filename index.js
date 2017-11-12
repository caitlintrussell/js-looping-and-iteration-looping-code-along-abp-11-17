
const names = ['Ada', 'Brendan', 'Ali'];

function printBadges(names) {
  for (let x = 0; x < names.length; x++){
    console.log(`Welcome ${names[x]}! You are employee #${x + 1}.`)
  }
  return names;
}
printBadges(names);


function tailsNeverFails(){
 return Math.random() ;
}
let counter = 1;
while (Math.random() >= 0.5){
  ++counter;
  console.log(`You got ${counter} tails in a row!`);
}
