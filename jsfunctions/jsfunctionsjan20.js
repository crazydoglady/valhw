
//Part one----------------------------------------------------
var sum = function(a,b) {
  console.log(a + b);
  return
}

sum(8,11);

//HW  part 2-----------------------------------------------

var matt = {
  finishingTime1: 240, //in minutes
  finishingTime2: 210.4,
  finishingTime3: 235.1,
  finishingTime4: 208.9,
  finishingTime5: 197.5,
  finishingTime6: 227.4,
};

var mark = {
  finishingTime1: 120, //in minutes
  finishingTime2: 110.4,
  finishingTime3: 135.1,
  finishingTime4: 108.9,
  finishingTime5: 97.5
};

var totalTime = 0;

function  getAverageTime (person) {
   var times = Object.keys(person);
   times.forEach( function (element, index, array){
     totalTime += person[array[index]];

   });

   return (totalTime / times.length);
};

// for (var i=0; i < times.length; i++) {
//   totalTime += times[i];
// }
// return (totalTime / times.length);

//Part 3---------------------------------------------------------
var MattsBankAccount = {
  checking: 0,
  savings: 0,
  retirement: 0
};

var RobertosBankAccount = {
  checking: 0,
  savings: 0,
  retirement: 0
};

function addToBank(account, savings, retirement, checking) {
  account.savings = account.savings + savings;
  account.retirement = account.retirement + retirement;
  account.checking = account.checking + checking;
}

function getSumOfAccounts(account) {
  var totalAssets = account.savings +account.retirement + account.checking;
  return totalAssets;
  // return ...
}

addToBank(MattsBankAccount, 100, 10, 1);
addToBank(RobertosBankAccount, 200, 50, 19);

var sumOfMatts = getSumOfAccounts(MattsBankAccount);
var sumOfRobertos = getSumOfAccounts(RobertosBankAccount);

console.log(sumOfMatts - sumOfRobertos); // should calculate to -158






//Notes below------------------------------------------------------------

// //-- part 2 Translated into "valspeak"-------------------
// /function calculateAverageFor(person) { -----declare function and arguments
//   var times = [];    -------declare new array, empty to start
//   for (var i in person) {    ----for data at "location" i in object of argument {begin magic
//     var value = person [i];  ----value in object set at location i goes into corresponding location within new array
//     times.push(person [i]); -----this works from inside out...so data from object at "location" i is pushed/added to new array that was previously defined within function.
//   } //end translation phase from object into array. Hooray!
//   var totalTime = 0;  ------- declare var for end result, a sum in this case
//   for (var i=0; i < times.length; i++) { ------ for info at array position of 0 (i is locally defined within each set of curly brackets, so i here  != i in above section), if position i is less than length of array (defined in part 1), then apply action to next position within array. When position i = length of array, loop will stop.
//     totalTime += times[i];           -------add value in position i (this is position that is changed by code on line above ^^) within array to the current value of declared variable.
//   }
//   return (totalTime / times.length); -------output value of part 2 divided by length of array created in part 1.
// };
//------call the function with different variables as arguments---------
// console.log(getAverageTime(matt));
 //console.log(getAverageTime(mark));
//var getAverageTime = function(person) {
