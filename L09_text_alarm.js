let hour;
let minute;
let second;

function setup() {
    createCanvas(600, 400);
    textAlign(CENTER, CENTER);
    textSize(40);
    fill("blue");
}

function draw() {
    // p5.js has a built in function for the current time thus, 
    hour = hour();
    minute = minute();
    second = second();
    // need to be in draw, so constantly updating, can be in setup because 
    // then it will be syuck on the time you launch
    text(hour, width / 2, height / 2);
    text(hour, width / 2, height / 2);
    text(hour, width / 2, height / 2);

}