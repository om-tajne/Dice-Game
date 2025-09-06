var randomnumber=Math.floor(Math.random()*6)+1;

var randomdiceimage="dice"+randomnumber+".png"

var imagesource="images/" + randomdiceimage

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",imagesource);

var randomnumber2=Math.floor(Math.random()*6)+1;

var randomdiceimage2="dice"+randomnumber2+".png"

var imagesource2="images/" + randomdiceimage2

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",imagesource2);


if(randomnumber > randomnumber2)
{
    document.querySelector("h1").innerHTML="PLAYER1 WON"
}
else
{
    document.querySelector("h1").innerHTML="PLAYER2 WON"
}


if(randomnumber==randomnumber2)
{
    document.querySelector("h1").innerHTML="TIE"
}
