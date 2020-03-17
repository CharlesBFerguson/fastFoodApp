function placeOrder() {
  var customerOrder = document.getElementById("orderInput").value;
  document.getElementById("orderRecap").innerHTML = customerOrder;
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