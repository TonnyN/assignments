'use strict';

/*
  Create a for loop that counts down from 20 to 1
  For each iteration log the current counter
*/
let i;
for (i = 20; i >= 0; i-=1) {
console.log(i);
if (i === 1) { break; }
}

/*
  Create a for loop that creates the following arrays
  [17, 34, 51, 68, 85], [17, 34, 51, 68, 119] and [17, 34, 51, 68, 200]
  Each array in a seperate loop
*/
/*
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
*/
let ArrayA=[];
let ArrayB=[];
let ArrayC=[];
for (i = 17; i <= 200; i++)
{
  if (i === 17)  { ArrayA.push(i); ArrayB.push(i); ArrayC.push(i);}
  if (i === 34)  { ArrayA.push(i); ArrayB.push(i); ArrayC.push(i);}
  if (i === 51)  { ArrayA.push(i); ArrayB.push(i); ArrayC.push(i);}
  if (i === 68)  { ArrayA.push(i); ArrayB.push(i); ArrayC.push(i);}
  if (i === 85)  { ArrayA.push(i);}
  if (i === 119) { ArrayB.push(i);}
  if (i === 200) { ArrayC.push(i);}
}
console.log(ArrayA);
console.log(ArrayB);
console.log(ArrayC);

/*
  Create while loop, multiple 2 by 2 and continue doing that until you reach 1.000.000
  return the amount of steps it took
*/
let count=0, a=1, b=2;
for (i=1; a <=1000000; i++){
  a=a*b;
  count++;
}
console.log(count);

/*
  Use the array map function to convert the following input array to the output array
  input [10, 20, 30, 40, 50]
  output [5, 10, 15, 20, 25]
*/

let result;
let l;
let output = [];
let input = [10, 20, 30, 40, 50];
 l = input.length;
 for (i=0; i < l; i++){
  result = input[i];
  result=result/2;
  output[i]=result;
}
console.log(input);
console.log(output);

/*
  Use the array filter method to remove all characters that are not from the simpsons
  ['Smithers', 'Ernie', 'Homer', 'Bert', 'Bart', 'Police chief Wiggum', 'Baloo']
  For the people who don't know the characters from the Simpsons, Ernie, Bert and Baloo are not in the show.
  But more importantly go watch the show instead of doing these assignments. Ahum.
*/

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

let ary = ['Smithers', 'Ernie', 'Homer', 'Bert', 'Bart', 'Police chief Wiggum', 'Baloo'];

ary.remove('Ernie', 'Bert', 'Baloo');
console.log(ary);

/*
  Convert the following object to an array
  The array should look like ['klarendal', 'alteveer', ...]
*/
let suburbsInArnhem = {
  klarendal : 'noord',
  alteveer : 'noord',
  schuitgraaf : 'zuid',
  lombok : 'noord',
  heijenoord : 'noord',
  spijkerkwatier : 'noord',
};
