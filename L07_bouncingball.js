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
    if(keyIsDown(UP_ARROW)) {
        
    }
    if(keyIsDown(RIGHT_ARROW)) {
        
    }
    if(keyIsDown(UP_ARROW)) {
        
    }

    image(picoImage, width / 2, height / 2, 100, 100)
    // (image, x position, y position, size, size)
}