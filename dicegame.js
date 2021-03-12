var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6 random number

var randomDiceImg = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImgSrc = "images/" + randomDiceImg; // images/dice~.png

var image1 = document.querySelectorAll("img")[0];

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImgSrc2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".btn").addEventListener('click', () => {

image1.setAttribute("src", randomImgSrc);

            document.querySelectorAll("img")[1].setAttribute("src", randomImgSrc2);


            if (randomNumber1 > randomNumber2) {
                document.querySelector("h1").innerHTML = "🚩You Win!";
            } else if (randomNumber1 < randomNumber2) {
                document.querySelector("h1").innerHTML = "Computer Win!🚩";
            } else {
                document.querySelector("h1").innerHTML = " ... Draw ... ";
            };
    setInterval(()=>window.location.reload(false),3000);  // zarlar atıldıktan 3 saniye sonra zarlar sıfırlanır
});

