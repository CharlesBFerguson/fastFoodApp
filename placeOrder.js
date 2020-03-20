function placeOrder() {
  let customerOrder = document.getElementById("orderInput").value;
  // console.log(customerOrder.trim());
  console.log(customerOrder.split(","));
  console.log(customerOrder.split(" ").join(""));
  // console.log(customerOrder.trim());
  
  // console.log(`You have ordered ${customerOrder}`);
  document.getElementById("orderRecap").innerHTML = `You have ordered ${customerOrder}`;
  document.getElementById("orderInput").value = "";
}

function orderRecapClear() {
  document.getElementById("orderRecap").innerHTML = "";
}

let menu = {
  burger:100,
  cheeseburger:100,
  hotdog: 100,
  nuggets:1000,
  fries:100,
  tots:100,
  shake:100,
  soda:100,
  water:100
}

// function orderOptimize() {
//   let res = customerOrder.split(" ");
//   console.log(res);
// }

// let p1 = 5;
// let p2 = 7;

// document.getElementById("placeOrder").addEventListener("click", function() {
//   myFunction(p1, p2);
// });

// function myFunction(a, b) {
//   let result = a * b;
//   document.getElementById("recap").innerHTML = `You have ordered ${result}`;
// }