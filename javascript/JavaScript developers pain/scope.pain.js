/**
 * Scope and the var statement
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
 */
//Note
// var is globaly scoped, so can be used only inside a function

var color = "red";

document.querySelector(".ls").style.backgroundColor = color;

document.querySelector(".ls .color-value").innerHTML = color;

var color = "blue";

function headColor() {
  color = "orange";
  document.querySelector(".head").style.color = color;
}
headColor(); // this is a bug, if we like to change different color to <h1 class="head">
// and another color for right side which in this case have selector "rs"
//comment or delete call function

document.querySelector(".rs").style.backgroundColor = color;
document.querySelector(".rs .color-value").innerHTML = color;

//headColor(); this is a solution for this bug :)
//uncomment call function
