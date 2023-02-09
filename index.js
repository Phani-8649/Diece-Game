var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceimage= "dice"+ randomNumber1 +".png";  //gives answer as dice number b/w 1 to 6  //dice1.png
var randomImagesource="images/"+randomDiceimage; //images/dice1.png
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImagesource);


//diece2
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDieceimage2="dice"+randomNumber2+".png";
var randomImagesource2="images/"+randomDieceimage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImagesource2);


// if (randomNumber1 > randomNumber2) {
//     document.querySelectorAll("h1")[0].innerHTML = "🚩 Player 1 wins!";
// }
// else if (randomNumber2 > randomNumber1) {
//     document.querySelectorAll("h1")[0].innerHTML = "Player 2 wins! 🚩";
// } 
// else {
//     document.querySelectorAll("h1")[0].innerHTML = "Draw!";
// }


if(randomNumber1>randomNumber2)
{
    document.querySelectorAll("h1")[0].innerHTML=" 🚩 player 1 wins!!";
}
else if(randomNumber2>randomNumber1)
{
    document.querySelectorAll("h1")[0].innerHTML="  🚩player 2 wins!!";
}
else if (randomNumber1=randomNumber2){
    doucument.querySelectorAll("h1")[0].innerHTML="Draw";
}

