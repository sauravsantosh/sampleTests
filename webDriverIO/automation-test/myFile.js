var webdriverio = require('webdriverio');
var chai = require('chai');
var expect = require('chai').expect;


var fruits = ["apples", "oranges", "banana"]

describe('Learn FOR and WHILE LOOP', function(){
 it('test', function(){

  fruits.forEach(function(fruits,index){
    for(i = 0; i < fruits.length; i++){
    console.log(+index+':'+fruits)};
  });


 });

});

###############


var lost = [4, 8, 15, 16, 23, 42];
var count = lost.length;

var isLost = function (n) {
  for (i = 0; i < count; i++ ) {
    if ( n === lost[i]) {
      return true;
       }
    }
    return false;
};

isLost(8);

###############

var power = function (base, exponent) {
  var result = 1;
  for (var i = 0; i < exponent; i++) {
    result = result * base;
  }
  return result;
};

power(2, 4);

###################

var cube = function (x) {
    if (typeof(x) !== 'number'){ return 0};
    return x * x * x;
};

// Once you uncomment the type check in line 2,
// the cube() function should return 0.
cube("test");

###################

var num = prompt("What number do you want to find the factorial of?")
 
//recursive
var factorial = function(n) {
    if(n == 0) {
        return 1
    } else {
        return n * factorial(n - 1);
    }
}
 
console.log(factorial(num));

###########################################


var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();

if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);


var compare = function(choice1, choice2){
    if (choice1 === choice2){
       return "The result is a tie!"; 
    }
    
    else if(choice1 === "rock"){ 
        if(choice2 === "scissors"){
            return "rock wins";
              }
        else{
            return "paper wins";
              }
         }
         
    else if(choice1 === "paper"){ 
     if(choice2 === "rock"){
            return "paper wins";
              }
     else{
            return "scissors wins";
              }
         }  
         
    else if(choice1 === "scissors"){ 
     if(choice2 === "rock"){
            return "rock wins";
              }
     else{
            return "scissors wins";
              }
         }   
         
}     

compare(userChoice,computerChoice);

output :

Computer: scissors
"rock wins" 

###########################################

text = "Blah blah blah blah blah blah Eric \
blah blah blah Eric blah blah Eric blah blah \
blah blah blah blah blah Eric";

var myName = "Eric";
var hits = [];

// Look for "E" in the text
for(var i = 0; i < text.length; i++) {
	if (text[i] === "E") {
		// If we find it, add characters up to
		// the length of my name to the array
		for(var j = i; j < (myName.length + i); j++) {
			hits.push(text[j]);
		}
	}
}

if (hits.length === 0) {
	console.log("Your name wasn't found!");
} else {
	console.log(hits);
}

#########################################

var isEven = function(number) {
    if(number % 2 === 0){
        return true;
        }
    else if (isNaN(number)){
        return "The input isn't a number";
    }
        else{
            return false;
        }
  // Your code goes here!
  
};

isEven("asdas");

###############################

Name in Reverse

var myName = "hsotnas varuas"
var count = myName.length;
var reverseName = "";

for(var i = count - 1; i >= 0; i--){
    var myNameReverse = myName[i];
    reverseName = reverseName + myNameReverse;
    //console.log(reverseName);
}

Output - "saurav santosh"

###############################


var webdriverio = require('webdriverio')


var webdriverio = require('webdriverio')
var helperFunctions = require('./helper-functions.js')

describe('Validate TimeStamp', function() {
  it('should UTC timestamp', function() {
  return Login()
  .pause(1000)
  .getText(".current-time-display").then(function(d){
         var date = new Date();
         var timeStamp = date.toUTCString();
         d = timeStamp.substring(17,22) + ' ' + timeStamp.substring(4,16)
         console.log(d);

  })
   })
});

/**
Helper functions
*/

//temp function to login client for envoy /app redirect
function Login(u, p, obj) {
   return browser
      .url('/')
      .waitForVisible("[name='username']")
      .setValue("[name='username']", u)
      .setValue("[name='password']", 'password')
      .click("[type='submit']")
      .waitForVisible(obj)
}
