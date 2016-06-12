function outer() {

  let y = 5;

  function inner() {
    let x = 10;
    console.log(y);
  }

  inner();
}

outer();
