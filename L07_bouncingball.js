// write your codes here
let picoImage;
let popSound;

function preload() {
    picoImage = loadImage("assets/pico-a.png");
    popSound = loadSound("assets/pop.mp3");
}
function setup() {
    createCanvas(600, 400);
}
function draw() {
    background("gray");

    if(keyIsDown(UP_ARROW)) {

    }
    if(keyIsDown(DOWN_ARROW)) {
        
    }
    if(keyIsDown(RIGHT_ARROW)) {
        
    }
    if(keyIsDown(LEFT_ARROW)) {
        
    }

    image(picoImage, x, y, 100, 100)
    // (image, x position, y position, size, size)
}