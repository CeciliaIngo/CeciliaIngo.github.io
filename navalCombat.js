/*
make a grid array with columns # 1-6 and rows # A-F
allow the user to pick grids (ex: a1)
if the user hits a ship, a "1" is placed on the grid
if the user misses a ship, a message shows up, telling them which grid space was incorrect
if the user sinks all three boats, they win
*/

alert("Welcome to Naval Combat! You will be given a grid with rows from A-F and columns numbered 0-5.");
alert("Three ships will be placed somewhere on the grid and your objective is to find and hit all of the ships.");
alert("If you choose a grid spot with a ship on it, the grid will mark a 1 in that spot. Once you sink all of the ships, you win!");

var g = [" ", 1, 2, 3, 4, 5, 6];
var a = ["A", 0, 0, 0, 0, 0, 0];
var b = ["B", 0, 0, 0, 0, 0, 0];
var c = ["C", 0, 0, 0, 0, 0, 0];
var d = ["D", 0, 0, 0, 0, 0, 0];
var e = ["E", 0, 0, 0, 0, 0, 0];
var f = ["F", 0, 0, 0, 0, 0, 0];

var gCorrect = ["/", 1, 2, 3, 4, 5, 6];
var aCorrect = ["A", 0, 0, 1, 1, 1, 0];
var bCorrect = ["B", 0, 0, 0, 0, 0, 0];
var cCorrect = ["C", 0, 1, 0, 0, 0, 0];
var dCorrect = ["D", 0, 1, 0, 0, 0, 0];
var eCorrect = ["E", 0, 1, 0, 0, 0, 0];
var fCorrect = ["F", 0, 1, 0, 0, 1, 1];

document.write("<p>" + g, a, b, c, d, e, f + "</p>");
document.write("<p>" + "--------------------" + "</p>");

var result1 = guess(g, a, b, c, d, e, f);
var result2 = guess(g, a, b, c, d, e, f);
var result3 = guess(g, a, b, c, d, e, f);
//var result4 = guess(g, a, b, c, d, e, f);

function guess(g, a, b, c, d, e, f){
  
var guess1 = prompt("Pick a grid (ex: a1)");
  
  if (guess1 === "a2"){
    a[2] = 1;
    alert(g, a, b, c, d, e, f);
    document.write("<p>" + g, a, b, c, d, e, f + "</p>");
    document.write("<p>" + "--------------------" + "</p>");
}
  else if (guess1 === "a3"){
    a[3] = 1;
    alert(g, a, b, c, d, e, f);
    document.write(g, a, b, c, d, e, f);
    document.write("--------------------");
  }
  else if (guess1 === "a4"){
    a[4] = 1;
    alert(g, a, b, c, d, e, f);
    document.write(g, a, b, c, d, e, f);
    document.write("--------------------");
  }
  else if (guess1 === "c1"){
    c[1] = 1;
    alert(g, a, b, c, d, e, f);
    document.write(g, a, b, c, d, e, f);
    document.write("--------------------");
  }
  else if (guess1 === "d1"){
    d[1] = 1;
    alert(g, a, b, c, d, e, f);
    document.write(g, a, b, c, d, e, f);
    document.write("--------------------");
  }
  else if (guess1 === "e1"){
    e[1] = 1;
    alert(g, a, b, c, d, e, f);
    document.write(g, a, b, c, d, e, f);
    document.write("--------------------");
  }
  else if (guess1 === "f1"){
    f[1] = 1;
    alert(g, a, b, c, d, e, f);
    document.write(g, a, b, c, d, e, f);
    document.write("--------------------");
  }
  else if (guess1 === "f4"){
    f[4] = 1;
    alert(g, a, b, c, d, e, f);
    document.write(g, a, b, c, d, e, f);
    document.write("--------------------");
  }
  else if (guess1 === "f5"){
    f[5] = 1;
    alert(g, a, b, c, d, e, f);
    document.write(g, a, b, c, d, e, f);
    document.write("--------------------");
  }
  else {
    alert(guess1 + " is incorrect.");
  }
}