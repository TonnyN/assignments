'use strict';
console.log('hello Tonny'); 

// oneven getallen uit array halen
let all = [12, 1238, 3724, 43, 89, 11, 32443287];
let odds = all.splice(3,5);
console.log(odds);

//afronden naar boven en onder
let decimal = 7.5;
console.log(Math.floor(decimal));
console.log(Math.ceil(decimal));

//replace and met or
let str = "Hello and welcome to javascript!";
console.log(str);
var replaced = str.replace('and', 'or'); 
console.log(replaced);

//remove last element string a
let a = ['cookiemonster', 'grover', 'big bird', 'bert', 'ernie'];
console.log(a);
let a_removed = a.splice(0,4);
console.log(a_removed);

//  Remove the first element from array b
let b = ['kermit', 'miss piggy', 'statler', 'waldorf'];
console.log(b);
let b_removed = b.splice(1,3);
console.log(b_removed);


//Combine array a and b into one array called c
let aa = ['cookiemonster', 'grover', 'big bird', 'bert', 'ernie'];
let bb = ['kermit', 'miss piggy', 'statler', 'waldorf'];
let c = aa.concat(bb);

//Sort the array alphabetically
console.log(c);
let c_sort = c.sort();
console.log(c_sort);

//Remove the element 'heineken' from the beers array
let beers = ['amstel', 'heineken', 'grolsch', 'hertog jan'];

let beers_removed = beers.splice(1,1);
console.log(beers);

/*
  Convert the following string to an array, every word has to be a new element.
  The last two words have to be a single element and the code cannot contain a fixed numbers so no 3 as a limit
*/
let toBeArray = 'I am the javascript king';

// werken met lengte bepaling x = lenght 
//do while loop 
//daarna 2 x if constructie bij match variabele vullen via splice
// aan einde do while loop 
// console.log(toBeArray); en twee variabelen var1.var2 ook afdrukken (. haalt de spatie weg!!)


