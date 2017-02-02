// URL for the JSON file.  Normally it comes from the line below, but due to http/https issues I saved a local copy.
// var url = 'http://stats.nba.com/stats/commonteamroster?LeagueID=00&Season=2016-17&TeamID=1610612744';
var url = 'https://jeffbautista.github.io/gsw-player-weights/gsw-profiles.JSON';

// When the button is clicked, run a callback function
$('#quote').click(function() {

  // Retrieve the data from the endpoint 
  // Store the player data in a variable
  $.getJSON (url, function(data) {
    var playerData = data['resultSets'][0]['rowSet'];
 
    // Sort the playerData array by player weight
    playerData.sort(function(a, b) {
      return b[7]-a[7];
    });
    
    // var total = playerData.reduce(function(a,b) 
    //   return a[7]+b[7];                  
    // });

    // Iterate through playerData array and build a string
    var output = '';
    playerData.forEach(function(x) {
      output += "<li>" + x[3] + " weighs " + x[7] + " pounds and is " + x[6] + " tall.</li>"
    });
    
    // Output string to HTML
    var textBlock = document.getElementById('text-block');
    textBlock.innerHTML = output;
      
  });

});
