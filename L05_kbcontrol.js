// let rectsize = 50
function setup() {
    createCanvas(400, 400);
}
// function draw() {
//     background(220);
// }
function keyPressed() {
    circle(random(0, 400), random(0, 400), 30)
}
function keyReleased() {
    rectsize = 50
}

