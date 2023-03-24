const form=document.querySelector("form");
const input = document.getElementBy("birthday");


function getTypeByCalendar() {
function getTypeSign(day,month){
    let typeSign;
    if((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
        typeSign = "bug";
      } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
        typeSign = "dark";
      } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        typeSign = "dragon";
      } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
        typeSign = "electric";
      } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
        typeSign = "fairy";
      } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
        typeSign = "fighting";
      } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
        typeSign = "fire";
      } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
        typeSign = "flying";
      } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
        typeSign = "ghost";
      } else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
        typeSign = "grass";
      } else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
        typeSign = "ground";
      } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        typeSign = "ice";
      }
      return typeSign;
}

}
//turn calendar into seperate month and day variables
function calculateType() {
    const birthday = document.getElementById("birthday").value;
    const day = birthday.split("-")[2];
    const month = birthday.split("-")[1];
    const userType = getTypeZodiac(day, month);
    displayDescription.innerText = descriptions[userSign];


}

//show zodiac name

if (userSign === "bug") {
    bug();
  } else if (userSign === "dark") {
    dark();
  } else if (userSign === "dragon") {
    dragon();
  } else if (userSign === "electric") {
    electric();
  } else if (userSign === "fairy") {
    fairy();
  } else if (userSign === "fighting") {
    fighting();
  } else if (userSign === "fire") {
    fire();
  } else if (userSign === "flying") {
    flying();
  } else if (userSign === "ghost") {
    ghost();
  } else if (userSign === "grass") {
    grass();
  } else if (userSign === "ground") {
    ground();
  } else if (userSign === "ice") {
    ice();}


    //audio
    function playAudio() {
      var audio = document.getElementById("audio1");
      audio.play();
    }