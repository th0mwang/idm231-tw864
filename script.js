function zodiac(){
  console.log("test 1")
  birthmonth = 
  document.getElementById("month").value;
  var birthday =
  document.getElementById("day").value;
  var result = "invalid date entered";


  if (birthmonth == 1&& birthday >= 20 || birthmonth == 2 && birthday <= 18){
        result = ("bug");

        var music = new Audio('sfx/Crickets Chirping Sound Effect.mp3');
        music.play();
        
        document.getElementById("photo").innerHTML="<img src=types/bug.png>";

        document.getElementById("characteristic").innerHTML="Bug-type Pokémon are characterized by their fast growing, as they don't take long to evolve. Bug-type Pokémon live mostly (not all of them) in forests, some of them are a little harder to find because they live atop the trees.";

    }
  
    if (birthmonth == 2&& birthday >= 19 || birthmonth == 3&& birthday <= 20){
      result = ("dark");

      var music = new Audio('sfx/Dark Souls.mp3');
      music.play();

      document.getElementById("photo").innerHTML="<img src =types/dark.png>"

      document.getElementById("characteristic").innerHTML="The Dark type is represented from traits that are considered feral and untameable, specifically that born from adverse and intense complex social conditions";

    }

    if (birthmonth == 3&& birthday >= 21 || birthmonth == 4 && birthday <= 19){
      result = ("dragon");

      var music = new Audio('sfx/Roar.mp3');
      music.play();

      document.getElementById("photo").innerHTML="<img src=types/bug.png>";

      document.getElementById("characteristic").innerHTML="Dragon type Pokémon are generally rather rare in Pokémon games, and some are even considered to be Mythical Pokémon due to such rare sightings of them; indeed, Dratini was long thought to be extinct.";

  }
}











    //audio

    function playbuzz(){
      var music = new Audio('sfx/Crickets Chirping Sound Effect.mp3');
      music.play();
      }

      function playdarksouls(){
      var music = new Audio('sfx/Dark Souls.mp3');
      music.play();
      }

      function playroar(){
        var music = new Audio('sfx/Roar.mp3');
        music.play();
        }