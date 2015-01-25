var score = 0;
var destination = ["beach", "park", "store"];
var parkAct = ["pond", "dogs", "fence"];

var car = function() {
  carPrompt = prompt("The car arrives at destination. The silly humans drop your leash as you get out of the car. Do you WAIT or RUN?") .toLowerCase();
  console.log("You leap into the back of the car and the humans start to drive. The car arrives at destination. The silly humans drop your leash as you get out of the car.");
if(carPrompt ==="wait") {
  console.log("You are a good dog and wait for human to pickup leash. They give you a big cookie and an ear rub +10 points");
  score+=10;
  beach();
} else if (carPrompt ==="run"){
  alert("You wait for human to turn and close the car door, and you start walking away! -30 points")
  score -=30;
  run();
}
};
var run = function() {
var runPrompt = prompt("Human yells at you. Do you LISTEN or RUN ?") .toLowerCase();
if (runPrompt ==="run"){
    console.log("You take off at full speed! You run once through some trees, then out of sight and loop back to the parking lot.");
    alert("The Humans bribe you back to car with a cookie, but not before you have a grand adventure of your own. What happens in the swamp, stays in the swamp. Unfortunately, you had stepped on an shell, and your paw is bleeding. You don't care and want to show humans the awesome pile of mud you found. Humans shake their heads, grab the leash and start going the wrong way! You bark in protest. -30 points");
    console.log("Humans bribe you back to car with a cookie, but not before you have a grand adventure of your own. What happens in the swamp, stays in the swamp. Unfortunately, you had stepped on an shell, and your paw is bleeding. You don't care and want to show humans the awesome pile of mud you found. Humans shake their heads, grab the leash and start going the wrong way! You bark in protest. -30points");
    score -=30;
    vet();
} else if (runPrompt === "listen") {
  alert("You come back to human with tail between your legs. Human gives you a hug and says 'Good Dog' for listening and not getting lost. You walk together towards your destination. +15points")
  score +=15;
  picnic();
} else if (runPrompt === "Listen" & pick === destination[2]) {
  alert("Human gives you a pat on the head, picks up the leash and you walk into the store together. You run straight for the treats! +10 points");
  marmaduke();
}
};

var pick = function() {
   var choice = prompt(" Humans load you in the car and start to pull out of the driveway. Human asks 'Where do you want to go?' Oh the sweet taste of freedom! Do you choose the BEACH, PARK or STORE ?") .toLowerCase();
   if (choice === destination[0]) {
    alert("The Humans turn in the direction towards the beach.");
    score +=5
    beach();
} else if (choice === destination[1]) {
    alert("You can't wait to go to the dog park! You haven't seen your friends in a while and could use a good run or dig in the sand.")
    score +=5
    park();
} else if (choice === destination[2]) {
  alert("You love to go shopping! You dream of a new toy or a tasty treat as your human sets off to the pet store. +5 points")
  score+=5;
  run();
}
};

var picnic = function() {
  var picnicPrompt = prompt("Your Human takes you for a walk on a nearby trail. You come across a picnic area. It is crowded and there is a lot of activity. You smell meat and see a dog across the pavilion. Do you look for FOOD or go see the DOG?") .toLowerCase();
if (picnicPrompt === "food") {
 alert("You casually stroll over by the grill. HOT DOGS!!! You hit the jackpot. Someone stops your human to talk and you see your opportunity- you jump up onto the grill and snag a sausage. It's hot and the grill has burned your paw! You drop the hot dog and Human runs over and drags you away, but you don't stop fighting as your prize is left behind in the dirt. You keep trying to go back for it, even once it is out of view. -10 points");
  score -=10;
  vet();
} else if (picnicPrompt ==="dog") {
  alert("You wander through the picnic and make a few human friends. Someone scratches your back in just the right place and your leg starts tapping. You could stay here forever!");
  score +=10;
  marmaduke();
 }
};

var pond = function() {
alert("You run off to the pond without looking back!")
var gatorPrompt = prompt("You splash into the water at full speed. You are swimming around, and you see something big and scary swimming around. Do you get LOOK or ALERT others about it?") .toLowerCase();
if (gatorPrompt === "look") {
  alert("You swim towards it hoping for a game of Marco Polo with the laborador you saw splashing around.It's an alligator! Humans warned you about these. You turn and scramble to get out of the water but slip on a rock on the beach and hurt your foot. You run to get your human so they can see the gator, but Human sees you and is worried about the big scratch on your leg and says it is time to leave. -15 points");
  score -= 15;
  vet();
} else if (gatorPrompt === "alert") {
  alert("It's swimming too fast and is too big and scary. You bark loudly then run to shore and start growling. Humans run over to see what is the matter. Humans see the alligator and the dog park is evacuated! You are a hero! +20 points.");
  score += 20;
  console.log("You save the day by alerting that a gator was looking for a snack in the dog park. You saved your friends! +20 points.")
  picnic();
}
};

var park = function() {
var parkChoice = prompt("You LOVE going to the park. So many smells! You look around and have to decide what to do first. There's a pond, many other dogs to play with and *GASP* what's that? It looks like a hole in the fence! Where do you go first: POND, DOGS, or FENCE?") .toLowerCase();
if (parkChoice === parkAct[0]) {
  score+=10;
  pond();
}else if (parkChoice === parkAct[1]) {
  alert("You trot over to a group of dogs to say hello. SO MANY! Some of them are playing catch, others are just sunbathing. You head over to join the sunbathers.")
  score+=10;
   marmaduke();
}else if (parkChoice === parkAct[2]) {
   alert("You squeeze through the hole in the fence. -10pts.");
   console.log("You escape like a prisoner from Alcatraz. - 10 points.");
   score-=10;
   run();
 }
 };

var beach = function() {
  var beachPrompt = prompt("You arrive at the beach, one of your favorite places! You are walking along and find a jellyfish. Do you EAT it or IGNORE it?") .toLowerCase();
  console.log("You find a jellyfish on the beach.");
  if (beachPrompt === "ignore")  {
  console.log("You decide to leave it and turn back to the humans. You saw your humans bring home a steak from the store. Maybe they will share later. +15 points")
  score+=15;
  waves();
} else if (beachPrompt ==="eat") {
  alert("Nom Nom. Jellyfish ary spicy...and tingly. Humans are upset and suddenly rush you back to the car. -20 points")
  console.log("Nom Nom. Jellyfish ary spicy...and tingly. Humans are upset and suddenly rush you back to the car. -20 points");
  score-=20;
  vet();
}
};

var store = function() {
  alert("You arrive at the store and leap from the car with such enthusiasm Human drops the leash. Do you RUN or WAIT?");


  score+=5;
}

var waves = function() {
  var wavePrompt = prompt("You keep walking; enjoying the lovely day out with the smell of pluff mud strong in the breeze. The sun comes out from behind the clouds and you start to feel a bit warm. The waves are big and a little scary, but you know it will cool you down. Do you SWIM or STAY?") .toLowerCase();
if (wavePrompt === "swim") {
  console.log("You get caought in a riptide. -10points")
  score-=10;
  outToSea();
} else if (wavePrompt === "stay") {
  console.log("The waves are a little too scary today. Humans will protect you and you continue your walk. +10points")
  score+=10;
  bird();
}
};

var bird = function() {
  var birdPrompt = prompt("As you walk past the waves, you notice a tiny bird chirping and fluttering. It sounds an awful lot like one of your squeaky toys. Do you CHASE or IGNORE the bird?") .toLowerCase();
if(birdPrompt === "chase") {
  alert("You take chase at full speed, blindly following the bird into the waves. -15points");
  console.log("You take off and reach top speed within a few strides, ripping the leash from the humans. Your target, the little bird panics and flutters into the water. Instinct takes over and you follow blindly into the ocean. -15points")
  score-=15;
  outToSea();
} else if (birdPrompt === "ignore") {
  alert("You remember that you are retired. You have the Humans to bring you food now. You wistfully remember your racing glory and a tear falls into the sand.+20points")
  console.log("You remember that you are retired. You have the Humans to bring you food now. You wistfully remember your racing glory and a tear falls into the sand. +20points")
  score +=20;
  tourist();
}
};

var tourist = function() {
var touristPrompt = prompt("This is a long walk! You see a kind-looking tourist-human sitting on the sand. As you approach the tourist, you get a waft of peanut butter coming from the cooler net to their chair. The tourist smiles in greeting then gets up and approaches your humans. They start talking and you know this could be a while. You want the peanut butter. You peer into the cooler, and all that's left are 2 little bags. Do you choose the CARROTS or CHOCOLATE? ") .toLowerCase();
console.log("The tourist-human has food!");
if (touristPrompt ==="carrots")  {
alert("You barely crunch into the first carrot, and your Human yells and apologizes to the tourist. Tourist laughs and pats you on the head. You are taken away from your snack and continue on the beach.")
console.log("You barely get a carrot before the humans take away your snack and force you to keep walking. You approach the dunes at the end of the beach and are secretly relieved that the walk seems to be ending.")
  score+=5;
  marmaduke();
}else if (touristPrompt ==="chocolate") {
  alert("Nom Nom. Now you know why humans sneak chocolate into the house and are secretly resentful that they never share with you. Humans suddenly start yelling and dragging you back towards the car. You pull the other way, wanting to continue your walk. -20points")
  console.log("Nom Nom. Now you know why humans sneak chocolate into the house and are secretly resentful that they never share with you. Humans suddenly start yelling and dragging you back towards the car. You pull the other way, wanting to continue your walk. -20points")
  score-=20;
  vet()
}
};

var vet = function() {
  alert("You are in the car against your will. You whine and bark but humans are oblivious to your distraction attempts. You reluctantly accept that humans have their own plan.  Then you realize the mean humans have taken you to THE VET! Your day is ruined. After the vet, you go home and sulk. Game over!");
  console.log("You end up at the vet. Game Over!");
  if (score < 10 ) {
    alert("You scored less that 20 points. This earned you a dinner of plain, dry dog food and no treats. Better luck next time.")
    prompt("Try again?")

  }else if (10 < score < 20 ) {
    alert("You were a pretty good dog today. The Humans reward you with a piece of cheese in your dinner.")
    prompt("Try again?")

  } else if (score > 20) {
    alert("You made your Humans so proud today. Man human sneaks a piece of steak into your dinner.")
  }
  return
};

var outToSea = function() {
  alert("You run into the ocean, splashing about. Then suddenly you get caught in a riptide. Miraculously, you stay afloat for days and end up living a long and happy life on a tiny island in the Atlantic.")
  console.log("You are caught in a riptide and drift to an uninhabited island. The end.");
if (score < 20 ) {
  alert("You scored less that 20 points. This earned you a dinner of plain, dry dog food and no treats. Better luck next time.")
  prompt("Try again?")
}else if (20 < score < 70 ) {
  alert("You were a pretty good dog today. The Humans reward you with a piece of cheese in your dinner.")
  prompt("Try again?")
} else if (score > 70) {
  alert("You made your Humans so proud today. Man human sneaks a piece of steak into your dinner.")
}
  return
};
var marmaduke =function() {
  alert("You turn and look to your left and there is a dog like you have never seen before! He is a handsome Great Dane named Marmaduke. You say hello and the two of you walk off together and live happily ever after. <3 The end.")
  console.log("You live happily ever after with Marmaduke");
  if (score < 20 ) {
    alert("You scored less that 20 points. This earned you a dinner of plain, dry dog food and no treats. Better luck next time.")
    prompt("Try again?")
  }else if (20 < score < 70 ) {
    alert("You were a pretty good dog today. The Humans reward you with a piece of cheese in your dinner.")
    prompt("Try again?")
  } else if (score >70) {
    alert("You made your Humans so proud today. Man human sneaks a piece of steak into your dinner.")
    prompt("Try again?")
  }
  return
};
//easy mode
var ember =function() {
  //ember story here
  var beginEmber = prompt( "It is a Saturday morning and your humans are home.They look at you and ask, 'Would you like to go in the car?'Do you want to go with the humans: YES or NO?") .toLowerCase();
  if (beginEmber === "yes") {
    console.log("You LOVE the car! You run around the house in celebration of your upcoming adventure.")
    score += 10;
    car();
  } else if (beginEmber === "no") {
    alert("Humans look puzzled and insist that you must not be feeling well. You just want to nap on the couch because lady human was up all night sitting on the couch staring at the little grey light box. She said it was a CoffeeScript project or something. But, honestly, who can sleep with human cursing at the light box next to them? You sigh at the remembered frustration. The humans grab your leash and walk you out the door as you look back longingly at the couch.")
    console.log("You want to take a nap, but humans make you leave anyway.")
    score -= 10;
    vet()
  }
};

//hard mode
var billie = function() {
  //billie here
  //var beginBillie = prompt("dfjhg;ering");
  var beginBillie = prompt( "It is a Saturday morning and your humans are home. They look at you and ask, 'Would you like to go in the car?Do you want to go with the humans: YES or NO?") .toLowerCase();
  if (beginBillie === "yes") {
    pick();
  } else if (beginBillie === "no") {
    score -= 10;
    vet();
  } else {
    prompt("Please answer 'Yes' or 'No'.")
  }
};
//start game play //
var mode = prompt("Pick a character: EMBER (easy) or BILLIE? (difficult)") .toLowerCase();
if (mode === "ember") {
  score = 10
  alert("You are Ember, a 7 year old perfectly behaved retired greyhound")
  console.log("You are Ember, a 7 year old perfectly behaved retired racing greyhound.");
  ember();
} else if(mode === "billie") {
  score-=5
  console.log("You are Billie, a 5 year old mischevious retired racing greyhound.");
  billie();
};
