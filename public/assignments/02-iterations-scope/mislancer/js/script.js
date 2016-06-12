/*
  Create a for loop that counts down from 20 to 1
  For each iteration log the current counter
*/

for (h=20; h>=1; h--) {
  console.log(h);
}

/*
  Create a for loop that creates the following arrays
  [17, 34, 51, 68, 85], [17, 34, 51, 68, 119] and [17, 34, 51, 68, 200]
  Each array in a seperate loop
*/

let firstArray = [];
let secondArray = [];
let thirdArray = [];

for (i=0; i<=85; i++) {
  if (i === 17 || i === 34 || i === 51 || i === 68 || i === 85) {
     firstArray.push(i);
  }
}

for (j=0; j<=119; j++) {
  if (j === 17 || j === 34 || j === 51 || j === 68 || j === 119) {
     secondArray.push(j);
  }
}

for (k=0; k<=200; k++) {
  if (k === 17 || k === 34 || k === 51 || k === 68 || k === 200) {
     thirdArray.push(k);
  }
}

console.log(firstArray);
console.log(secondArray);
console.log(thirdArray);

/*
  Create while loop, multiple 2 by 2 and continue doing that until you reach 1.000.000
  return the amount of steps it took
*/

let l = 0;
let result = 2

do {
   result *= 2;
   l += 1;
} while (result <= 1000000);

console.log(l);

/*
  Use the array map function to convert the following input array to the output array
  input [10, 20, 30, 40, 50]
  output [5, 10, 15, 20, 25]
*/

let input = [10, 20, 30, 40, 50];

output = input.map(function(out) {
  return out / 2;
});

console.log(output);

/*
  Use the array filter method to remove all characters that are not from the simpsons
  ['Smithers', 'Ernie', 'Homer', 'Bert', 'Bart', 'Police chief Wiggum', 'Baloo']
  For the people who don't know the characters from the Simpsons, Ernie, Bert and Baloo are not in the show.
  But more importantly go watch the show instead of doing these assignments. Ahum.
*/

let noFilterArray = ['Smithers', 'Ernie', 'Homer', 'Bert', 'Bart', 'Police chief Wiggum', 'Baloo'];

function noSimpsons(value) {
    if (value === 'Ernie' || value === 'Bert' || value === 'Baloo')
      {return false;}
    else {return true;}
}

filteredArray = noFilterArray.filter(noSimpsons);

console.log(filteredArray);

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
  spijkerkwatier : 'noord'
};

newSuburbsArray = Object.keys(suburbsInArnhem);

console.log(newSuburbsArray);
