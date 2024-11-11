// Добавление в функцию getCounter метода для обнуления счетчика

// Source material

/*function getCounter() {
  let counter = 0;
  return () => {
    return counter++;
  }
}

let count = getCounter();
console.log(count());
console.log(count());
console.log(count());*/
// --------------------

'use strict'

function getCounter() {
  let counter = 0;
  
  function fnNested() {
    return counter++;
  }

  fnNested.reset = function() { // обнуление счетчика
    counter = 0;
  };

  return(fnNested);
}

let count = getCounter();

alert(count());
alert(count());
alert(count());
alert(count());

count.reset();
alert(count());