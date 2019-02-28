
// ================== GLOBALS =======================
$(document).ready(function() {

  // variables for setting up random numbers... 

    // for grandpa's prescription
    var prescription = Math.floor(Math.random()*101+19);

    // for my pill bottles
    var orangeBottle = Math.floor(Math.random()*11+1);
    var greenBottle = Math.floor(Math.random()*11+1);
    var blueBottle = Math.floor(Math.random()*11+1);
    var purpleBottle = Math.floor(Math.random()*11+1);

    // variables for player's number and to track wins and losses
    var playerNumber = 0;
    var wins = 0;
    var losses = 0;


// ================== FUNCTIONS ======================

    // function to start/reset the game, displaying a random number at id #randomNumber and reassigning random values to each bottle and the prescription variables

    function reset() {
        prescription = Math.floor(Math.random()*101+19);

        orangeBottle = Math.floor(Math.random()*11+1);
        greenBottle = Math.floor(Math.random()*11+1);
        blueBottle = Math.floor(Math.random()*11+1);
        purpleBottle = Math.floor(Math.random()*11+1);

        playerNumber = 0; 

        // then update prescription and playerNumber to my page using jQuery
        $("#randomNumber").text(prescription);
        $("#yourNumber").text(playerNumber);
    }


    // my functions for tracking on-click events and running conditionals to determine if the player has achieved a win or has exceeded the "prescription" and lost

    $("button").click(function() {
        // using a switch case here to determine which button was pressed and then add points based on whichever random number has been assigned to that button
        switch (this.id) { 

          case 'orangeBottle':

            $("#orangeBottle").addClass("animated wobble fast");

            playerNumber = playerNumber + orangeBottle;
            $("#yourNumber").text(playerNumber);
                //conditional that runs my gameWin function on a win or my gameLoss function on a loss
                if (playerNumber == prescription){
                    gameWin();
                }
                else if (playerNumber > prescription){
                    gameLoss();
                }
            window.setTimeout(function(){$("#orangeBottle").removeClass("animated wobble fast");}, 1000);
            break;

          case 'greenBottle':

            $("#greenBottle").addClass("animated wobble fast");

            playerNumber = playerNumber + greenBottle;
            $("#yourNumber").text(playerNumber);
                if (playerNumber == prescription){
                    gameWin();
                }
                else if (playerNumber > prescription){
                    gameLoss();
                }

            window.setTimeout(function(){$("#greenBottle").removeClass("animated wobble fast");}, 1000);    
            break;

          case 'blueBottle':

            $("#blueBottle").addClass("animated wobble fast");

            playerNumber = playerNumber + blueBottle;
            $("#yourNumber").text(playerNumber);
                if (playerNumber == prescription){
                gameWin();
            }
            else if (playerNumber > prescription){
                gameLoss();
            }

            window.setTimeout(function(){$("#blueBottle").removeClass("animated wobble fast");}, 1000);    
            break;

          case 'purpleBottle':
            
            $("#purpleBottle").addClass("animated wobble fast");

            playerNumber = playerNumber + purpleBottle;
            $("#yourNumber").text(playerNumber);
            if (playerNumber == prescription){
                gameWin();
            }
            else if (playerNumber > prescription){
                gameLoss();
            }

            window.setTimeout(function(){$("#purpleBottle").removeClass("animated wobble fast");}, 1000);    
            break;
        }
    }); 


    // on click animations: add the class "animated tada slow" to grandpa on loss using jQuery, add "animated bounce slow" to grandpa on win, and add "animated wobble fast" to pills on click

    // function to run if the player number is equal to the random number, make wins go up by 1, and add and then remove my animate.css classes
    function gameWin() {
        $("#grandpa").addClass("animated bounce slow");
        wins++;
        $("#wins").text(wins);
        reset();
        window.setTimeout(function(){$("#grandpa").removeClass("animated bounce slow");}, 2000);  
        alert("Grandpa thanks you.");  
    }

    // function to run if the player number exceeds the random number, make losses go up by 1, and add and then remove my animate.css classes
    function gameLoss() {
        $("#grandpa").addClass("animated tada slow");
        losses++;
        $("#losses").text(losses);
        reset();
        window.setTimeout(function(){$("#grandpa").removeClass("animated tada slow");}, 2000); 
        alert("UH OH! THAT WAS TOO MANY PIIILLLLLLSSSSS");
    }
 
// ================== GAMEPLAY PROCESS ====================

//just need to reset the game to start it when the window is loaded, the rest is contained in my functions
reset();



});