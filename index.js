// var randomNumber1 = Math.random();
// randomNumber1 *= 6;
// randomNumber1 = Math.floor(randomNumber1) + 1;

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomDiceSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
// all returns an array, therefore need to specify the index
// can store an element inside a variable
image1.setAttribute("src", randomDiceSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelector("img.img2").setAttribute("src", randomDiceSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 wins";
} else {
  document.querySelector("h1").innerHTML = "Draw 🙌";
}
