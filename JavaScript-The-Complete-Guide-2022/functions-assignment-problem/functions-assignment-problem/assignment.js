// function sayHello(name) {
//   console.log('Hi ' + name);
// }

// sayHello();

let sayHello = name => console.log('Hi ' + name);

sayHello('George');

let sayHello1 = (phrase, name) => console.log(phrase + ' ' +name);

sayHello1('Hi','George');

let sayHello2 = () => {return "Hi George"};

console.log(sayHello2());

let sayHello3 = name => console.log('Hi ' + name);

sayHello3(undefined || 'Goshe');



let playingFn = (cb, ...sports) => {
  let isEmpty = false;
  for (const sport of sports) {
    if (!sport) {
      isEmpty = true;
      return
    }
  }
  if (!isEmpty) {
    cb(`I am playing ${sports}`);   
  }
}

let printingResult = sentence => console.log(sentence);

playingFn(printingResult,'Basketball','Football','Voleyball');