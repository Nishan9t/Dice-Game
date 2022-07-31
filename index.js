
var rand1=Math.random()*6;
rand1=Math.floor(rand1)+1;


var p1dice="images/dice"+rand1+".png";//dice1.png--dice6.png

var rand2=Math.random()*6;
rand2=Math.floor(rand2)+1;

var p2dice="images/dice"+rand2+".png";

document.querySelectorAll("img")[0].setAttribute("src",p1dice);

document.querySelectorAll("img")[1].setAttribute("src",p2dice);

//if player 1 wins
if(rand1>rand2)
{
  document.querySelector("h1").innerHTML="Player 1 Wins 🚩"
}
//if player 2 wins
else if(rand1<rand2)
{
  document.querySelector("h1").innerHTML="Player 2 Wins 🚩"
}
//if draw
else{
  document.querySelector("h1").innerHTML="Draw. Try Again!"
}
