//random words I Say everyday
let words = [{
  name: "Pickles",
  meaning: "damn"
}, {
  name: "Dabba",
  meaning: "stop it"
}, {
  name: "Nee-Huh",
  meaning: "yeah with an uh huh",
}, {
  name: "Egg",
  meaning: "nickname"
} , {
  name: "wawa",
  meaning: "water"
} , {
  name: "Da Nope",
  meaning: "no"
}];

let randomIndex;
let animating = false;

function setup() {
  createCanvas(600, 600);
  background(200);
  textSize(32);

text("click to randomize", 50 , 50);
}

function draw() {

  if(animating == true){
    square(random(width), random(height), random(50, 200));
  }
}

function randomizer(){
    animating = false;

    if (words[0]) {
    background(random(200, 255));
    randomIndex = int(random(words.length));
    text(words[randomIndex].name, 50, 50);
    words.splice(randomIndex, 1);
   } else {
    text("nothing left!", 50, 50);
   }

}

function mousePressed() {
  animating = true;
  setTimeout(randomizer, 2000);

}
