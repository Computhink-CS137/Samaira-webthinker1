// let rectsize = 50
// function setup() {
//     createCanvas(400, 400);
//     background(220);
// }
// // function draw() {
// //     background(220);
// // }
// function keyPressed() {
//     circle(random(0, 400), random(0, 400), 30)
// }
// function keyReleased() {
//     background(220);
//}

function setup() {
    createCanvas(200, 200)
    background(220);
}
function keyPressed(){
    // console.log("key:", key);
    // console.log("keyCode:", keyCode);

    if(keyCode === 67) {
    circle(100, 100, 40)
    }
    if(keyCode === 83) {
        rect(50, 50, 100, 100)
    }
}
function keyReleased(){
    background(220)
}