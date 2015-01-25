var score = 0
var car = function() {
  carPrompt = prompt("You leap into the back of the car and the humans start to drive. The car arrives at destination. The silly humans drop your leash as you get out of the car. Do you WAIT or RUN?") .toLowerCase();
  console.log("You leap into the back of the car and the humans start to drive. The car arrives at destination. The silly humans drop your leash as you get out of the car.");
  if(carPrompt ==="wait") {
    console.log("You are a good dog and wait for human to pickup leash. They give you a big cookie and an ear rub");
    score+=10;
    beach();
  } else if (carPrompt ==="run"){
    score -=30;
    alert("Humans bribe you back to car with a cookie, but not before you have a grand adventure of your own. What happens in the swamp, stays in the swamp. Unfortunately, you had stepped on an shell, and your paw is bleeding. You don't care and want to show humans the awesome pile of mud you found. Humans shake their heads, grab the leash and start going the wrong way! You bark in protest. -30 points")
    console.log("Humans bribe you back to car with a cookie, but not before you have a grand adventure of your own. What happens in the swamp, stays in the swamp. Unfortunately, you had stepped on an shell, and your paw is bleeding. You don't care and want to show humans the awesome pile of mud you found. Humans shake their heads, grab the leash and start going the wrong way! You bark in protest. -30points");
    vet();
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
    score+=0;
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
  if (score < 20 ) {
    alert("You scored less that 20 points. This earned you a dinner of plain, dry dog food and no treats. Better luck next time.")
    prompt("Try again?")

  }else if (20 < score < 70 ) {
    alert("You were a pretty good dog today. The Humans reward you with a piece of string cheese with your dinner.")
    prompt("Try again?")

  } else if (score > 70) {
    alert("You made your Humans so proud today. They give you a steak for dinner.")
  }
  return
}

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
}
var marmaduke =function() {
  alert("You turn and look to your left and there is a dog like you have never seen before! He is a handsome Great Dane named Marmaduke. Your humans let you say hello and the two of you walk off together and live happily ever after. <3 The end.")
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
}
