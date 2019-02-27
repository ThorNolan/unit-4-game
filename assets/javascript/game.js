// on click animations: add the class "animated tada slow" to grandpa  using jQuery, and add "animated wobble fast" to pills on click

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

    // get my document elements by ID's using jQuery


// ================== FUNCTIONS ======================

    // function to start/reset the game, displaying a random number at id #randomNumber and reassigning random values to each bottle and the prescription variables

    function reset () {
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



    // function to run if the player number is equal to the random number

    // function to run if the player number exceeds the random number, and make losses go up by 1



// ================== GAMEPLAY PROCESS ====================

window.onload(function() {

});