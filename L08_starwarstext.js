let yPos;
let storyText = [ 
    "I'm crying on my mama's floor,",
    "why don't you wan't me anymore?...", 
    "", 
    "episode 1",
    "the begining",
    "",
    "i got out of bed"
]
function setup() {
    createCanvas(600, 400);
    textAlign(LEFT, CENTER);
    textSize(24);
    fill("rgb(255, 255, 0)")
    // set starting height position will change 
    // yPos later, because want text to move up
    // height is 400, because set canvas like that 
    yPos = height;
}

function draw() {
  background(0)  
//   clear canvas
text("asd", width / 2, yPos )
// string, xPos, yPos
yPos -= 1
// minus 1 in draw function, so that it repeats each frame 
} 