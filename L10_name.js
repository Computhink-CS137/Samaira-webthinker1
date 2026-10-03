let inputText;
// store user input
let displayText = "your name; ";
// text to display on canvas
let inputX;
let inputY;
let colorPicker;

function setup() {
    createCanvas(600, 400);
    textAlign(CENTER, CENTER);
    textSize(60);
    fill("white");
    background(0);


    // create input feild, bos=xes where you click then type/fill in stuff
    // create an are for the user to type, and ans. will be saved in variable
    inputText = createInput();
    inputX = this.canvas.offsetLeft + (width / 2) - 80;
    inputY = this.canvas.offsetTop + (height / 2) - 10;
    // positioning 
    inputText.position(width / 2 - 80, height * 0.3);

    // call updateText function when user types
    inputText.input(updateText);

    // create color picker, built in JS function
    colorPicker = createColorPicker();
    // color picker position
    let colorX = this.canvas.offsetLeft + (width / 2) - 20;
    // offset --> allways asume top canvas is at top left so do coordinates from top left 
    // by default. this.canvas tells to do coordinates from ou 
    let colorY = this.canvas.offsetTop + (height * 0.7)
    colorPicker.position(width / 2 - 20, height * 0.7);
}

function draw() {
    background(colorPicker.value());
    // background = value a variable
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
// we made update text function ourselves 

