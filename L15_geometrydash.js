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
    // that way your sprite starts on the ground
}

function draw () {
    background(0);

    // jump and gravity
    velocity += 0.8; 
    // gravity = o.81, when use plus, that means going down, because 
    // 400 value, bottem of canvas
    playerY += velocity;

    // jump
    if (playerY >= height - playerSize) {
        // prevent player from falling through ground, 
        playerY = height - playerSize;
        // set player back to ground
        isGrounded = true;
        velocity = 0;
        // player is on ground, don't need to pull below screen, via gravity(velocity)
    } else {
        isGrounded = false;
    }

    // draw player(a rectangle) - (x, y, width, height)
    Rect(playerX, playerY, playerSize, playerSize);

    function keyPressed () {
        // jump when space key is pressed 
        if (key === " " && isGrounded === true) {
            // increasing velocity = gowing down, decreasing velocity()
        }
    }

}