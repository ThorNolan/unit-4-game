// on click animations: add the class "animated tada slow" to grandpa on loss using jQuery ("animated bounce slow" on win), and add "animated wobble fast" to pills on click

// ================== GLOBALS =======================

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

        // then add prescription and playerNumber to my page using jQuery
        $("randomNumber").text(prescription);
        $("yourNumber").text(playerNumber);
    }


    // my functions for tracking on-click events and running conditionals to determine if the player has achieved a win or has exceeded the "prescription" and lost

    $("input[type='button']").click(function() {
        // using a switch case here to determine which button was pressed and have the game respond accordingly
        switch (this.id) { 
        case "orangeBottle":
            $("#content").html("Content changed");
            break;
        case "greenBottle":
            $("#content").html("Content changed again");
            break;
        case "blueBottle":
            $("#content").html("Content changed again");
            break;
        case "purpleBottle":
            $("#content").html("Content changed again");
            break;
        }
    });


    // function to run if the player number is equal to the random number, and make wins go up by 1
    function gameWin() {

    }

    // function to run if the player number exceeds the random number, and make losses go up by 1
    function gameLoss() {

    }


// ================== GAMEPLAY PROCESS ====================

    // resets values and also resets wins and losses if the window is loaded/reloaded
    window.onload = function() {
        wins = 0;
        losses = 0;
        reset();
    };