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

// function setup() {
//     createCanvas(200, 200)
//     background(220);
// }
// function keyPressed(){
//     // console.log("key:", key);
//     // console.log("keyCode:", keyCode);

//     if(keyCode === 67) {
//     circle(100, 100, 40)
//     }
//     if(keyCode === 83) {
//         rect(50, 50, 100, 100)
//     }
// }
// function keyReleased(){
//     background(220)
// }
let x = 0;

function setup() {
    createCanvas(200, 200);
    background(220);
}

function draw() {
    background(220);
    circle(x, 100, 50);
    if(keyIsDown(RIGHT_ARROW)) {
        x += 1;
    }if(keyCode == LEFT_ARROW) {
        x -= 1;
    }if (x < 25) {
        x = 25;
    }if (x > width - 25) {
        x = width - 25;
    }


    noStroke();
}

// function keyPressed(){
//     if(key == "w"){
//         fill("white");
//     }else if(key == "r"){
//         fill("red");
//     }else if(key == "g"){
//         fill("green");
//     }else{
//         fill("yellow")
//     }
// }

// function mouseMoved(){
//     if (mouseX <= 74) {
//         fill("red");
//     } else if (mouseX >= 75 && mouseX < 125) {
//         fill("green");
//     } else {
//         fill("blue");
//     }
// }


