function createFunction() {
	function pepe() {
    console.log('hello')
  }
  return pepe
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// var function1 = createFunction();
// function1();



function createFunctionPrinter(input) {
  const value = input
	function pepe() {
    console.log(value)
  }
  return pepe
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// var printSample = createFunctionPrinter('sample');
// printSample();
// var printHello = createFunctionPrinter('hello');
// printHello();



function outer() {
  var counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

var willCounter = outer();
var jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();



function addByX(x) {
  const value = x
	function add(input) {
    return value + input
  }
  return add
}

var addByTwo = addByX(2);
//console.log(addByTwo(5))
// now call addByTwo with an input of 1


// now call addByTwo with an input of 2



//--------------------------------------------------
// Extension
//--------------------------------------------------

function once(func) {
  let value
	function executeOnce(param) {
    if (!value) {
      value = func(param)      
    }
    return value
  }
  return executeOnce
}

var onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
// console.log(onceFunc(4));  //should log 6
// console.log(onceFunc(10));  //should log 6
// console.log(onceFunc(9001));  //should log 6


function after(count, func) {
  let times = 0
	function executeAfter() {
    times++
    if (count === times) {
      times = 0
      func()
    } else {
      console.log('not yet')
    }
  }
  return executeAfter
}

var called = function() { console.log('hello') };
var afterCalled = after(3, called);

// afterCalled(); // -> nothing is printed
// afterCalled(); // -> nothing is printed
// afterCalled(); // -> 'hello' is printed
// afterCalled(); // -> nothing is printed
// afterCalled(); // -> nothing is printed
// afterCalled(); // -> 'hello' is printed


function delay(func, wait, rest) {
	function executeWithDelay() {
    console.log('please wait..')
    setTimeout(() => func(rest), wait)
  }
  return executeWithDelay
}

const lookAtMe = param => console.log(param)
const runAfter1Sec = delay(lookAtMe, 1000, 'look at me!')
const runAfter3Sec = delay(lookAtMe, 3000, 'look at me!')


runAfter1Sec()
runAfter3Sec()
