var num1 = prompt("Please enter a number: ", 0);    
var msg = '<h2>Multiplication Table </h2> ';

for (var i = 1; i <= 10 ; i++) {
  msg += i + " x " + num1 + " = " + (i * num1) + '<br/>';
}

var el = document.getElementById('blackboard');
el.innerHTML = msg;