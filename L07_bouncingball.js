// write your codes here
let picoImage;
let popSound;

function preload() {
    picoImage = loadImage("assets/pico-a.png");
    popSound = loadsound("assets/pop.mp3");
}
function setup() {
    createCanvas(600, 400);
}
function draw() {
    background("grey");

    Image(picoImage, width / 2, height / 2, 100, 100)
    // (image, x pos)
}