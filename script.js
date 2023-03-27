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

        document.getElementById("trait").innerHTML="Bug-type Pokémon are characterized by their fast growing, as they don't take long to evolve. Bug-type Pokémon live mostly (not all of them) in forests, some of them are a little harder to find because they live atop the trees.";

    }
  
    if (birthmonth == 2&& birthday >= 19 || birthmonth == 3&& birthday <= 20){
      result = ("dark");

      var music = new Audio('sfx/Dark Souls.mp3');
      music.play();

      document.getElementById("photo").innerHTML="<img src =types/dark.png>"

      document.getElementById("trait").innerHTML="The Dark type is represented from traits that are considered feral and untameable, specifically that born from adverse and intense complex social conditions";

    }

    if (birthmonth == 3&& birthday >= 21 || birthmonth == 4 && birthday <= 19){
      result = ("dragon");

      var music = new Audio('sfx/Roar.mp3');
      music.play();

      document.getElementById("photo").innerHTML="<img src=types/dragon.png>";

      document.getElementById("trait").innerHTML="Dragon type Pokémon are generally rather rare in Pokémon games, and some are even considered to be Mythical Pokémon due to such rare sightings of them; indeed, Dratini was long thought to be extinct.";

  }

  if (birthmonth == 4&& birthday >= 20|| birthmonth == 5 && birthday <= 20){
    result = ("Electric");

    var music = new Audio('sfx/Zap.mp3');
    music.play();

    document.getElementById("photo").innerHTML="<img src=types/electric.png>";

    document.getElementById("trait").innerHTML="Electric-type Pokémon have varied habitats, from forests and prairies to cities and power plants. Electric-type Pokémon are usually fast, and many of their attacks may paralyze the target. Some Electric-type Pokémon also resemble artificial objects used by humans which relate to electricity (the Magnemite and Voltorb evolution lines and Rotom).";


  }   

  if (birthmonth == 5&& birthday >= 21 || birthmonth == 6 && birthday <= 20){
       result = ("Fairy");
       
       var music = new Audio('sfx/Sparkle Sound Effect.mp3');
       music.play();

       document.getElementById("photo").innerHTML="<img src=types/fairy.png>";

       document.getElementById("trait").innerHTML="Fairy-type Pokémon are generally considered cute and elegant and tend to be at least partially pink in color and feminine in appearance overall (Pokémon such as Igglybuff and Swirlix have these traits). However, Fairy types can be incredibly powerful. Fairy-types also have some magical appeal to them. As opposed to Psychic-type Pokémon, Fairy-type Pokémon have powers related to magic and the supernatural as opposed to mental power.";


    }

    if (birthmonth == 6&& birthday >= 21 || birthmonth == 7&& birthday <= 22){
      result = ("FIghting");

      var music = new Audio('sfx/Sparkle Sound Effect.mp3');
      music.play();

      document.getElementById("photo").innerHTML="<img src=types/fighting.png>";

      document.getElementById("trait").innerHTML="Most Fighting-type Pokémon have a human-like body shape because they represent practitioners of various martial arts, which tend to be real-world humans. Some Fighting-type Pokémon are represented by looking like fighters (Machamp looks like a bodybuilder and Crabrawler looks like a French-wrestler) while other are represented by being based on a certain type of fighting style (Hitmontop is based on capoeira fighting and Gallade is based on sword-fighting). ";

    }

    if (birthmonth == 7&& birthday >= 23 || birthmonth == 8 && birthday <= 22){
      result = ("Fire");

      var music = new Audio('sfx/Fire Sound Effect.mp3');
      music.play();

      document.getElementById("photo").innerHTML="<img src=types/fire.png>";

      document.getElementById("trait").innerHTML="Fire-type moves are based on attacks of fire itself, and most of them can leave the status Burn. Fire types are also immune to being Burned, regardless of the type of move used that would have inflicted a Burn.  Fire Pokémon have notably fewer species compared to the other Starter types, due to a lack of natural phenomena that can be described as fire";

    }

    if (birthmonth == 8 && birthday >= 23 || birthmonth == 9 && birthday <= 22){
      result = ("Flying");

      var music = new Audio('sfx/Wind Sound FX.mp3');
      music.play();

      document.getElementById("photo").innerHTML="<img src=types/flying.png>";

      document.getElementById("trait").innerHTML="Pokémon of this type can fly, many of them live at high altitudes, even. Most of them are based on birds and insects. Their power is mostly related with aerial and wind-related moves. Most of them have wings, but there are also some of them that just float without wings, like Rayquaza and Gyarados.";

    }

    if (birthmonth == 9&& birthday >= 23 || birthmonth == 10&& birthday <= 22){
      result = ("Ghost");

      var music = new Audio('sfx/Boo.mp3');
      music.play();

      document.getElementById("photo").innerHTML="<img src=types/ghost.png>";

      document.getElementById("trait").innerHTML="Pokémon of this type are usually connected to fear, the dark and the afterlife. They usually live in abandoned houses, cemeteries, funeral places and uninhabited dark places such as caves. Also, Ghost-type Pokémon tend to be extremely naughty, pranking humans just to see their faces and reactions. Curiously, the more scared a human is, the more power the Ghost Pokémon will have to prank with it. ";


    }

    if (birthmonth == 10 && birthday >= 23|| birthmonth == 11 && birthday <= 21){
      result = ("Grass");

      var music = new Audio('sfx/Grass.mp3');
      music.play();

      document.getElementById("photo").innerHTML="<img src=types/grass.png>";

      document.getElementById("trait").innerHTML="Many Grass types are based on plants and fungi, not necessarily grass (Pokémon such as Cacturne, which is a cactus, and Foongus, which is a mushroom). Many Grass-type Pokémon also belong to the Plant Egg Group. Several Grass types are paired with the Poison type ";

    }

    if (birthmonth == 11 && birthday >= 22 || birthmonth == 12 && birthday <= 21){
      result = ("Ground");

      var music = new Audio('sfx/Taco Bell.mp3');
      music.play();

      document.getElementById("photo").innerHTML="<img src=types/ground.png>";

      document.getElementById("trait").innerHTML="Ground-type Pokémon have powers and abilities related to control of ground and earth. Ground-type Pokémon are afraid of water, like Rock-type Pokémon, unless they are Water type. Many Ground Pokémon are also partially Rock type.";
    }

    if(birthmonth == 12 && birthday >= 22 || birthmonth == 1 && birthday <= 19){
 
      result = ("Ice");

      var music = new Audio('sfx/Ice.mp3');
      music.play();

      document.getElementById("photo").innerHTML="<img src=types/ice.png>";

      document.getElementById("trait").innerHTML="ce-type Pokémon stand out for being able to endure very low temperatures, as well as adapting to freezing weathers. They control ice at will. Their habitats go from the top of mountains, frozen caves and caverns or even the poles.  Many Ice-type moves have chances of freezing the target, which prevents them from attacking until they thaw out.";
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

        function playzap(){
          var music = new Audio('sfx/Zap.mp3');
          music.play();
          }

          function playsparkle(){
            var music = new Audio('sfx/Sparkle Sound Effect.mp3');
            music.play();
            }

            function playhit(){
              var music = new Audio('sfx/Punch Sound Effect.mp3');
              music.play();
              }

              function playflame(){
                var music = new Audio('sfx/Fire Sound Effect.mp3');
                music.play();
                }

                function playwind(){
                  var music = new Audio('sfx/Wind Sound FX.mp3');
                  music.play();
                  }

                  function playboo(){
                    var music = new Audio('sfx/Boo.mp3');
                    music.play();
                    }

                    function playlawn(){
                      var music = new Audio('sfx/Grass.mp3');
                      music.play();
                      }

                      function playearth(){
                        var music = new Audio('sfx/Taco Bell.mp3');
                        music.play();
                        }

                        function playcrack(){
                          var music = new Audio('sfx/Ice.mp3');
                          music.play();
                          }