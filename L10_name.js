let inputText;
// store user input
let displayText = "your name; ";
// text to display on canvas

function setup() {
    createCanvas(600, 400);

    // create input feild, bos=xes where you click then type/fill in stuff
    // create an are for the user to type, and ans. will be saved in variable
    inputText = crateInput();
    inputText.position(width / 2, height / 2);

    // call updateText function when user types
    inputText.input(updateText);
}

function draw() {
    background(0);
}

function updateText() {
    // save input into dispaly text whenver user types
    displayText = this.value()
}