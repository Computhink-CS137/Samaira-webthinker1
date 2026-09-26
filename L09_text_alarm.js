// let hr;
// let min;
// let sec;
// let timeString;

// function setup() {
//     createCanvas(600, 400);
//     textAlign(CENTER, CENTER);
//     textSize(40);
//     fill("blue");
// }

// function draw() {
//     // p5.js has a built in function for the current time thus, 
//     background(0);
//     hr = hour();
//     min = minute();
//     sec = second();
//     // need to be in draw, so constantly updating, can be in setup because 
//     // then it will be syuck on the time you launch
// // nf = number format(number, digets)
//     timeString = nf(hr, 2) + ":" + nf(min, 2) + ":" + nf(sec, 2);
//     // string concatenation
//     // text(hr, width / 2, height / 2);
//     // text(min, width / 2, height / 2 + 50);
//     // text(sec, width / 2, height / 2 + 100); 
//     // display entire string at once
//     text(timeString, width / 2, height / 2);

// }
// let intervalId;
// let x = 0;

// function setup() {
//     createCanvas(600, 400);
    
    
//     intervalId = setInterval(drawCircle, 100);
//     // creates a loop to call drawCircle function every 1000milliseconds(1 second)
//     // interval = loop that happens on it's own,(reapeats)
// }

// function draw() {

// }

// function drawCircle() {
//     clear();
//     circle(x, 50, 20);
//     x += 10; 
//     // circle move right 10 px
//     if (x > 380) {
//         x = 20
//     }

// }

// function mousePressed() {
//     // stop an interval from using it's ID, id it to keep track of which interval,can 
//     // be any variable;  
//     clearInterval(intervalId);

// }

// make a timer
let intervalId
let countdown = 5;

function setup() {
    createCanvas(600, 400);
    intervalId = setInterval(updateCountdown, 1000);
    // intervalId = how to identify/call each interval because can have many, is a "fixed" variable
    // every 1000 milliseconds update countdown function will be called
    textAlign(CENTER, CENTER);
    textSize(40);
    fill("white");
    background(0);
} 

function updateCountdown() {
    // what happens every time countdown is called
    countdown -= 1; 
    // reduce countdown by 1, evertime it's called, which is every 1 secon
    if (countdown < 1) {
        countdown = 5;
    }
}

function draw() {
    background(0);
    text(countdown, width / 2, height / 2);
    // text(variable)--> shows variable value on screen in text
    
}