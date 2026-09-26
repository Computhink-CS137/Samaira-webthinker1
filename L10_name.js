let inputText;
// store user input
let displayText = "your name; ";
// text to display on canvas
let inputX;
let inputY;

function setup() {
    createCanvas(600, 400);
    textAlign(CENTER, CENTER);
    textSize(60);
    fill("white");
    background(0);


    // create input feild, bos=xes where you click then type/fill in stuff
    // create an are for the user to type, and ans. will be saved in variable
    inputText = createInput();
    let inputX = this.canvas.offsetLeft + (width / 2) - 80;
    let inputY = this.canvas.offsetTop + (height / 2) - 10;
    // positioning 
    inputText.position(width / 2, height / 2);

    // call updateText function when user types
    inputText.input(updateText);
}

function draw() {
    background(0);
    text(displayText, width / 2, height / 2)
}

function updateText() {
    // save input into dispaly text whenver user types
    displayText = this.value()
    // = value that comes from input variable
    console.log(displayText);
    // console.log = like print in python, whenever you type something 
    // gets updated in console
}