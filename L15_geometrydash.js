// setting up a sprite
let playerX = 100;
let playerY;
let playerSize = 30; 
// measured in pixels 
let velocity = 0;
let isGround = false;

function setup() {
    createCanvas(600, 400);
    textAlign(CENTER, CENTER);
    playerY = height - playerSize;
    // height is the height of the cnavas, which is at the bottem in coding
    // so you minus player size, becuase hitbox top left corner
    // 
}