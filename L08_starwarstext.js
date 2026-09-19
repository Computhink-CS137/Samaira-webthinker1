let yPos;
let storyText = [ 
    "I'm crying on my mama's floor,",
    "why don't you wan't me anymore?...", 
    "", 
    "I'm begging you to change for me",
    "i'd- I hear you,",
    "",
    "I love U",
    "and my heart..",
    "it burns for you",
    "but I just can't give u",
    "what you neeed",
    "and now I'm wondering what it takes",
    "for you to stay off my mind",
    "and for out of my BLOoDstreAM!"

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
// loop through array
for (let i = 0; i < storyText.length; i++ ) {
// last index of loop = length minus one, because index numbers start from 0
// thats why start at 0, stop any number before len. = an index number 
text( storyText[i], width / 2, yPos )
}
// string, xPos, yPos
// storytext

yPos -= 1
// minus 1 in draw function, so that it repeats each frame 
} 