//scoring system js
var start = document.getElementById('start');
        start.addEventListener('click',function(){
          user = new Player("female");
          computer = new Player("female");
          game = new Game(user, computer);
        });
var games= document.getElementById('games');    // setting the game count
var points=document.getElementById('points');  // is setting up the HTML id points as an object into var points
var player1= document.getElementById('player1');  //is setting up the HTML id player1 as an object into var player1
var player2= document.getElementById('player2');
var tiebreak = document.getElementById('tiebreak');
var sets = document.getElementById('sets');
var matches = document.getElementById('match');
var special = document.getElementById('special-point');




//

function capitaliseFirstLetter(string)
  {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function computerChoiceUpdater(response){
    $("#computer-choice").text(capitaliseFirstLetter(response.computer_choice));
  }

//fix this since user choice isn't sent back. js should know this
    function userChoiceUpdater(response){
      $("#user-choice").text(shot)
    }

    function resultElementChanger(replacementText){
      $("#result").text(replacementText)
    }

    function winnerUpdater(response) {
        resultElement = $("#result")
          if(response.winner === "user")
          {resultElementChanger("User Wins!")}
          else if(response.winner === "computer")
          {resultElementChanger("Computer Wins!")}
          else
          {resultElementChanger("The Rally Continues...")}//draw
    }


    function pointsUpdater(winner){
      if(winner ===  "computer")
          {points.innerHTML=game.winPoint(computer);}
      else if (winner === "user")
          {points.innerHTML=game.winPoint(user);}
      

    }

    function scoreUpdater(response){
      nameOfWinner = response.winner;
      pointsUpdater(nameOfWinner);
      sets.innerHTML = game.sets();
      games.innerHTML = game.games();       
      matches.innerHTML = game.match();
      tiebreak.innerHTML = game.tiebreak();
      special.innerHTML=game.specialPoints()
     
    }







    function updater(response){
          console.log(response);
          winnerUpdater(response);
          userChoiceUpdater(shot);  //shot is a variable stored on the local system
          computerChoiceUpdater(response);
          scoreUpdater(response);
    }

    function forehand() {
      shot = "Forehand";
      $.post('/selection', {picks: "forehand"}, updater);
    };

    function backhand() {
      shot= "Backhand";
      $.post('/selection', {picks: "backhand"}, updater);
    };

    function dropshot() {
      shot = "Drop Shot";
      $.post('/selection', {picks: "dropshot"}, updater);
    };

    $('#forehand').on('click', forehand);
    $('#backhand').on('click', backhand);
    $('#dropshot').on('click', dropshot);



//