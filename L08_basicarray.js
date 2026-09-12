let squareX = 300;
let squareY = 200;
let squareSpeed = 5;
function setup() {
    createCanvas(600, 400);
    background(220);
}

function draw() {
    
    // movemet; change square y & x
    if (squareX > width || squareX < 0) {
        squareSpeed *= -1;
    }
    squareX += squareSpeed;
    fill(89, 125, 4,);
    rect(squareX, squareY, 100, 100)
}