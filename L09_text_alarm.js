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
let intervalId;
let x = 0;

function setup() {
    createCanvas(600, 400);
    
    
    intervalId = setInterval(drawCircle, 100);
    // creates a loop to call drawCircle function every 1000milliseconds(1 second)

}

function draw() {

}

function drawCircle() {
    clear();
    circle(x, 50, 20);
    x += 10; 
    // circle move right 10 px
    if (x > 380) {
        x = 20
    }

}

function mousePressed() {
    
}