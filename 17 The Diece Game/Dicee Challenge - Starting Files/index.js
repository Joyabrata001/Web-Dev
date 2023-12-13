var randomNum1 = Math.floor(Math.random() * 6) + 1;
var img_src = `./images/dice${randomNum1}.png`;
document.querySelector("img.img1").setAttribute("src", img_src);

var randomNum2 = Math.floor(Math.random() * 6) + 1;
img_src = `./images/dice${randomNum2}.png`;
document.querySelector("img.img2").setAttribute("src", img_src);

if (randomNum1 > randomNum2)
    document.querySelector("h1").innerText = "🚩 Player 1 wins!";
else if (randomNum1 < randomNum2)
    document.querySelector("h1").innerText = "Player 2 wins! 🚩";
else
    document.querySelector("h1").innerText = "🚩 It's a draw! 🚩";