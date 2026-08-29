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

    x = constrain(x, 0, width - 100) 
    y = constrain(y, 0, height - 100)
    // (variable to constrain, 0{top left corner}[min], coordinate of max)
    // to prevent image from exitting canvas, because the hit box is at the top left corner of the 
    // image, the image can still leave the canvas from the right, and bottem. thus you stop the hit box 
    // 100(image size before) so that it can't leave.   

    image(picoImage, x, y, 100, 100)
    // (image, x position, y position, image width size, image height size)
}