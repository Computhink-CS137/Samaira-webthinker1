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
let ballSpeedX = 6;
let ballSpeedY = 6;

// use speed to change x and y coordinates.

function setup() {
    createCanvas(600, 400);
    background(220);
    // when put 1 number, it your gray scale; 0 = balck, 255 = white
    // if put background in draw you are drawing a new bakcground in each frame thats
    // why you don't see a trail, if want a trail, move backgornd hear, so all the new drawings won't 
    // have backgrounds that cover the old one.
}
function draw() {
    circle(ballX, ballY, ballSize)
    noStroke();
    fill(random(255), random(255), random(255));
    // stroke = outline, fill = color
    // movement
    ballX += ballSpeedX;
    ballY += ballSpeedY;
    // fps(frames per second) - the draw function draws the canvas 60 times per second, each time it draws is called a frame,
    // each time it draws a frame, the ball moves 5 pixels to the right, and 5 pixels down. so if it draws 60 frames per second, 
    // and in each frame it moves 5 pixels. then it will move 300 pixels in 60 seconds.

    // bonce on edge
    if (ballX <= 0 + ballSize / 2 || ballX >= width - ballSize / 2) {
             // "||" means "or"
        ballSpeedX *= -1
        // flip from positive to negative
        // turing it to negative, because bouncing basically means fliping direction, 
        // and from positive to nagative you are changing direction 

    }
    if (ballY <= 0 + ballSize / 2 || ballY >= height - ballSize / 2) {
        ballSpeedY *= -1
    }
   



}
// html sets up structure of webpage, header, written structure. p = paragraph, small text.
// a is for linking to certain websites. section.
// css styling, set style of website. can change how they all look. 