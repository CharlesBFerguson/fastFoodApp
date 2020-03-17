function placeOrder() {
  var customerOrder = document.getElementById("orderInput").value;
  console.log(`You have ordered ${customerOrder}`);
  document.getElementById("orderRecap").innerHTML = `You have ordered ${customerOrder}`;
  }

// var p1 = 5;
// var p2 = 7;

// document.getElementById("placeOrder").addEventListener("click", function() {
//   myFunction(p1, p2);
// });

// function myFunction(a, b) {
//   var result = a * b;
//   document.getElementById("recap").innerHTML = `You have ordered ${result}`;
// }