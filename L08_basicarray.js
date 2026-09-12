let squareX = 300;
let squareY = 200;
function setup() {
    createCanvas(600, 400);
    background(220);
}

function draw() {
    // movemet; change square y & x
    squareX += 5;
    fill(0, 255, 0);
    rect(squareX, squareY, 100, 100)
}