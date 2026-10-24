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
let gameOver = false;

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
    // ! = not, if gameOver NOT false
    if(!gameOver) {
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
        rect(playerX, playerY, playerSize, playerSize);
    
        // draw spikes
        fill(255, 0, 0);
        for (let i = 0; i < spikesX.length; i++) {
            // make spikes move to the left
            spikesX[i] -= spikeSpeed;
            // spikeX = variable, i cant be more than len. of variable
    
            // check when spikes go past the left side(out of screen)
            if (spikesX[i] < -spikesWidth) {
                // -spikewidth ---> position = once the spike is out of 
                // screen on the left(0), then minus spikeWidth, 
                // so it is fully out of screen
                spikesX[i] = width + random(100, 300);
                // spikeX[i]-(item in array) = position = width of canvas
                // + a random no. so it is further of screen, and it will 
                // come on screen at random times, because speed is constant
                // #all the values in the array are positions of spikes
            }
            // draw physical spikes(triangles)
            fill(0, 255, 0)
            triangle(spikesX[i], height, spikesX[i] + spikesWidth / 2, height - spikesHeight, spikesX[i] + spikesWidth, height);
        
            // collisions
            if (
                playerX + playerSize > spikesX[i] &&
                // player X pos. plus width so right, is greater than spikes X pos., to the right of the spike 
                playerX < spikesX[i] + spikesWidth &&
                // players X pos, measuered from left corner, so don't need to add the len 
                playerY + playerSize > height - spikesHeight
                // checking if players Yposition falls 
                // ontop of spike(touch), player Y = Y pos. 
                // &player size = player height,
                // height - spikes height, = constant height of spikes 
            ) {
                gameOver = true;
            }
        }
    
    

    }  else {
        // game is over
        fill(225);
        textSize(40);
        text("Game Over!", width / 2, height / 2);
        // display text center of screen

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
