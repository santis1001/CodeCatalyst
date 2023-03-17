function random_leter(){
   const rand_int = Math.floor(Math.random() * 3);
   switch(rand_int){
      case 0:
         return "R";
      case 1:
         return "P";
      case 2:
         return "S";
   }
}

var stats ={
   wins:0,
   losses:0,
   ties:0,
   total_matches:0
}

var playagain = true;

do{
   var rockpapersisor = window.prompt("rock, paper, scissors? (R,P,S)","")
   var botrps =  random_leter();

   switch(rockpapersisor){
      case "R":
         if(botrps == "R"){
            window.alert("You selected: "+rockpapersisor+
            "\nBot selected: "+botrps+
            "\nTied");
            stats.ties++;
         }
         if(botrps == "P"){
            window.alert("You selected: "+rockpapersisor+
            "\nBot selected: "+botrps+
            "\nLosser :c");
            stats.losses++;
         }
         if(botrps == "S"){
            window.alert("You selected: "+rockpapersisor+
            "\nBot selected: "+botrps+
            "\nWinner c:");
            stats.wins++;
         }
         break;
      case "P":
         if(botrps == "R"){
            window.alert("You selected: "+rockpapersisor+
            "\nBot selected: "+botrps+
            "\nWinner c:");
            stats.wins++;
         }
         if(botrps == "P"){
            window.alert("You selected: "+rockpapersisor+
            "\nBot selected: "+botrps+
            "\nTied");
            stats.ties++;
         }
         if(botrps == "S"){
            window.alert("You selected: "+rockpapersisor+
            "\nBot selected: "+botrps+
            "\nLosser :c");         
            stats.losses++;
         }
         break;
      case "S":
         if(botrps == "R"){
            window.alert("You selected: "+rockpapersisor+
            "\nBot selected: "+botrps+
            "\nLosser :c");         
            stats.losses++;
         }
         if(botrps == "P"){
            window.alert("You selected: "+rockpapersisor+
            "\nBot selected: "+botrps+
            "\nWinner c:");
            stats.wins++;
         }
         if(botrps == "S"){
            window.alert("You selected: "+rockpapersisor+
            "\nBot selected: "+botrps+
            "\nTied");
            stats.ties++;
         }
         break;
      
   }
   stats.total_matches++;

   if (confirm("Continue playing?"+"\nMatches: "+stats.total_matches+"\nWins: "+stats.wins+"\nLosses: "+stats.losses+"\nTies: "+stats.ties)) {
      window.alert("Let's go!!!!");
   } 
   else {
      playagain = false;
   }
}while(playagain);


