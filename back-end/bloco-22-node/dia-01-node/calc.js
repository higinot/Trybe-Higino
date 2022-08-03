const readline = require("readline-sync");
const operations = require("./operations");

console.log("Calculadora Simples");
const num1 = readline.questionInt("Digite o numemo 1:  ");
const ope = readline.question("Digite uma operação? + , - , * , / , **");
const num2 = readline.questionInt("Digite o numemo 2:  ");

switch (ope) {
  case "+":
    operations.sum(num1, num2);
    break;
  case "-":
    operations.sub(num1, num2);
    break;
  case "*":
    operations.mul(num1, num2);
    break;
  case "/":
    operations.div(num1, num2);
    break;
  case "**":
    operations.pot(num1, num2);
    break;
}
