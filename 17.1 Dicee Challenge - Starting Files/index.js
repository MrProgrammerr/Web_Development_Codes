var d1 = Math.floor(Math.random()*6)+1;
var d2 = Math.floor(Math.random()*6)+1;
var source = "./images/dice"+d1+".png";
document.querySelector(".img1").setAttribute("src",source);
source = "./images/dice"+d2+".png";
document.querySelector(".img2").setAttribute("src",source);

if(d1>d2){
    document.querySelector("h1").textContent = "🚩Player1 Wins!";
}else if (d2>d1){
    document.querySelector("h1").textContent = "Player2 Wins!🚩";
}else{
    document.querySelector("h1").textContent = "Draw!";
}