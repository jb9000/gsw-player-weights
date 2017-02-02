// URL for the JSON file
var url = 'http://stats.nba.com/stats/commonteamroster?LeagueID=00&Season=2016-17&TeamID=1610612744';

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
    
    
   
    // For each object in the JSON data file, push data to an HTML string, which we'll output to the page
    // for (x in playerObj) {
    //   console.log('hello!')
    // });
    
//     $.each(data, function( key, val ) {
//        playerProfiles2.push( "<li>" + value[0] + ', ' + value[1] + ', ' + value[2] + "</li>" );
//     });  

//     console.log(playerProfiles[2][1][0]['rowSet'][0]);
 
//     // Append a <ul> and the salariesByTeam array (500+ <li> entries, joined into a string) to the <body> element
//     $( "<ul/>", {"class": "profile-list", html: playerProfiles[2][1][0]['rowSet'][0].join(', ')
//       }).appendTo( "body" );
    
//   });
// }); 
