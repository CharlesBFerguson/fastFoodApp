// function placeOrder() {
//   let customerOrder = document.getElementById("orderInput").value; // String
//   customerOrder = customerOrder.toLowerCase(); // String
//   customerOrder = customerOrder.split(','); //now Array - can chain .split above instead
//   customerOrder = customerOrder.join(''); // now String
//   customerOrder = customerOrder.split(' '); //now Array - result: "fries:#", "burger:#" (without spaces)
//   console.log(typeof customerOrder, customerOrder);

// // Split array further:
//   customerOrder = customerOrder.join(':'); // now String - result: "fries:#:burger:#"
//   customerOrder = customerOrder.split(':'); //now Array - result: "fries", "#", "burger", "#" (without spaces) - can chain .split above instead
//   console.log(typeof customerOrder, customerOrder);
  
//   // console.log(`You have ordered ${customerOrder}`);
//   document.getElementById("orderRecap").innerHTML = `You have ordered ${customerOrder}`;
//   document.getElementById("orderInput").value = "";
// }

// function orderRecapClear() {
//   document.getElementById("orderRecap").innerHTML = "";
// }

function placeOrder() {
  let customerOrder = document.getElementById("orderInput").value; // String
  customerOrder = customerOrder.toLowerCase(); // String
  customerOrder = customerOrder.split(','); //now Array - can chain .split above instead
  customerOrder = customerOrder.join(''); // now String
  customerOrder = customerOrder.split(' '); //now Array - result: "fries:#", "burger:#" (without spaces)
  console.log(typeof customerOrder, customerOrder);
// need to still remove spaces from two word entries, e.g., "cheese burger" should become "cheeseburger"

  // Split array further:
  customerOrder = customerOrder.join(':'); // now String - result: "fries:#:burger:#"
  customerOrder = customerOrder.split(':'); //now Array - result: "fries", "#", "burger", "#" (without spaces) - can chain .split above instead
  console.log(typeof customerOrder, customerOrder);
  
//   // append data to the array
//   customerOrder.push(orderInput);
  
//   var pval = "";
  
//   for(i = 0; i < customerOrder.length; i++)
//   {
//     pval = pval + customerOrder[i] + "<br>";
//   }
  
//   // display array data
//   console.log(customerOrder);
//   document.getElementById('pText').innerHTML = pval;
}


let menu = [
  {'item':'burger', 'stock':100},
  {'item':'cheeseburger', 'stock':100},
  {'item':'hotdog', 'stock':100},
  {'item':'nuggets', 'stock':1000},
  {'item':'fries', 'stock':100},
  {'item':'tots', 'stock':100},
  {'item':'shake', 'stock':100},
  {'item':'soda', 'stock':100},
  {'item':'water', 'stock':100}
]
// console.log(typeof menu, menu);

// --------------

// function placeOrder() {
//   let customerOrder = document.getElementById("orderInput").value;
//   // console.log(customerOrder.trim());
//   console.log(customerOrder.split(","));
//   console.log(customerOrder.split(" ").join(""));
//   console.log(customerOrder);
  
//   // console.log(`You have ordered ${customerOrder}`);
//   document.getElementById("orderRecap").innerHTML = `You have ordered ${customerOrder}`;
//   document.getElementById("orderInput").value = "";
// }

// function orderRecapClear() {
//   document.getElementById("orderRecap").innerHTML = "";
// }

// function orderRecapClear() {
//   document.getElementById("orderRecap").innerHTML = "";
// }

// function pushData() {
//   // get value from the input text
//   var inputText = document.getElementById('inputText').value;
  
//   // append data to the array
//   customerOrder.push(inputText);
  
//   var pval = "";
  
//   for(i = 0; i < customerOrder.length; i++)
//   {
//     pval = pval + customerOrder[i] + "<br>";
//   }
  
//   // display array data
//   console.log(customerOrder);
//   document.getElementById('pText').innerHTML = pval;

// let menu = [
//   {'item':'burger', 'stock':100},
//   {'item':'cheeseburger', 'stock':100},
//   {'item':'hotdog', 'stock':100},
//   {'item':'nuggets', 'stock':1000},
//   {'item':'fries', 'stock':100},
//   {'item':'tots', 'stock':100},
//   {'item':'shake', 'stock':100},
//   {'item':'soda', 'stock':100},
//   {'item':'water', 'stock':100}
// ]
// console.log(typeof menu, menu);

// OR: (Which format best to use?)

// let menu = {
//   burger:100,
//   cheeseburger:100,
//   hotdog:100,
//   nuggets:1000,
//   fries:100,
//   tots:100,
//   shake:100,
//   soda:100,
//   water:100
// }
// console.log(typeof menu, menu);