// write your codes here
let picoImage;
let popSound;
let x = 0;
let y = 0;

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
        y -= 5
    }
    if(keyIsDown(DOWN_ARROW)) {
        y += 5
    }
    if(keyIsDown(RIGHT_ARROW)) {
        x += 5
    }
    if(keyIsDown(LEFT_ARROW)) {
        x -= 5
    }

    x = constrain(x, 0, 600) 
    y = constrain(y, 0, 400)
    // (variable to constrain, 0{top left corner}[min], coordinate of max)

    image(picoImage, x, y, 100, 100)
    // (image, x position, y position, image width size, image height size)
}