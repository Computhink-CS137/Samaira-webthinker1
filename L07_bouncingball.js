// // write your codes here
// let picoImage;
// let popSound;
// let x = 0;
// let y = 0;
// let picoWidth = 100;
// let picoHeight = 100;

// function preload() {
//     picoImage = loadImage("assets/pico-a.png");
//     popSound = loadSound("assets/pop.mp3");
// }
// function setup() {
//     createCanvas(600, 400);
// }
// function draw() {
//     background("gray");

//     if(keyIsDown(UP_ARROW)) {
//         y -= 5
//     }
//     if(keyIsDown(DOWN_ARROW)) {
//         y += 5
//     }
//     if(keyIsDown(RIGHT_ARROW)) {
//         x += 5
//     }
//     if(keyIsDown(LEFT_ARROW)) {
//         x -= 5
//     }

//     x = constrain(x, 0, width - 100) 
//     y = constrain(y, 0, height - 100)
//     // (variable to constrain, 0{top left corner}[min], coordinate of max)
//     // to prevent image from exitting canvas, because the hit box is at the top left corner of the 
//     // image, the image can still leave the canvas from the right, and bottem. thus you stop the hit box 
//     // 100(image size before) so that it can't leave.   

//     image(picoImage, x, y, picoWidth, 100)
//     // (image, x position, y position, image width size, image height size)

// }

// function keyPressed() {
//     // space bar to triger sound 
//     if (keyCode === 32) {
//         // can also do (key == "a") of for space key == " "
//         popSound.play();
//         picoWidth = 50;
//     }
// }
// function keyReleased() {
//     if (keyCode === 32) {
//         picoWidth = 100;
//     }
// }
// // difference between 2 and 3 equals, 3 equals looks at data type, 2 equals looks at value.

let ballX = 300;
let ballY = 200;
let ballSize = 50;

function setup() {
    createCanvas(600, 400);
}
function draw() {
    background(220);
    // when put 1 number, it your gray scale; 0 = balck, 255 = white
    circle(ballX, ballY, ballSize)
    noStroke();
    fill("#5E8501");
    // stroke = outline, fill = color
}