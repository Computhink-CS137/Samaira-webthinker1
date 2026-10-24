// setting up a sprite
let playerX = 100;
let playerY;
let playerSize = 30; 
// measured in pixels 
let velocity = 0;
let isGround = false;

// setting up moving spikes
let spikesX = []; 
//  array because we are going to have multiple spikes
let spikesWidth = 20;
let spikesHeight = 30;
let spikeSpeed = 5;

function setup() {
    createCanvas(600, 400);
    textAlign(CENTER, CENTER);
    playerY = height - playerSize;
    // height is the height of the cnavas, which is at the bottem in coding
    // so you minus player size, becuase hitbox top left corner
    // that way your sprite starts on the ground

    // create spikes
    for (let i = 0; i < 3; i++) {
        spikesX.push(width + i * 300);
        // push means add an item into the array 
        // in this case, we are adding width + i * 300
        // only 3 spikes max, because i can't be bigger than 3
        // width = width of canvas
        // in array have values 600, 900, 1200, 
        // they are off screen, but we are going to move it left slowly
        // the 3 spikes will rotate in and out, but can go random position
        // offscreen, because speed is constant

    }
}

function draw () {
    background(0);

    // jump and gravity
    velocity += 0.8; 
    // gravity = 0.81, when use plus, that means going down, because 
    // 400 value, bottem of canvas
    // reduce Y by 0.8 every frame even when jumping
    // reduce = bring closer to ground because plus
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

    // draw spikes
    fill(255, 0, 0);
    for (let i = 0; i < spikesX.length; i++) {
        // make spikes move to the left
        spikesX[i] -= spikeSpeed;
        // spikeX = variable, i cant be more than len. of variable

        // check when spikes go past the left side(out of screen)
        if (spikeX[i] < -spikeWidth) {
            spikeX[i] = width + RTCEncodedAudioFrame(100, 300)
        }

    }

}

function keyPressed () {
        // jump when space key is pressed 
        if (key === " " && isGrounded === true) {
            // increasing velocity = gowing down, decreasing velocity(negatives)
            // = going up
            velocity = -12;
            // you will go 12 pixels up every frame, then velocity will add 
            // 0.8 to the Y value from the top of the function, 
            // the peak point when it starts to fall is when it turns from
            // negative to positive, 
    
        }
    }
