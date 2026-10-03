let nounField;
let verbField;
let adjectiveField;
let adverbField;
let placeField;
let submitButton;


function setup() {
    createCanvas(600, 600);
    // text settings
    fill(255, 255, 0);
    textSize(20);

    // creating an input field for each
    nounField = createInput();
    verbField = createInput();
    adjectiveField = createInput();
    adverbField = createInput();
    placeField = createInput();

    // offset canvas to position; use propper cnavas
    let offsetX = this.canvas.offsetLeft;
    let offsetY = this.canvas.offsetTop;

// position input fields
    nounField.position(width / 2 + offsetX, height * 0.2 + offsetY);
    verbField.position(width / 2 + offsetX, height * 0.2 + offsetY + 50);
    adjectiveField.position(width / 2 + offsetX, height * 0.2 + offsetY + 100);
    adverbField.position(width / 2 + offsetX, height * 0.2 + offsetY + 150);
    placeField.position(width / 2 + offsetX, height * 0.2 + offsetY + 200);

    // create button
    submitButton = createButton("generate story");
    // generate story = button name, can be called "anything"
    submitButton.position(width / 2 + offsetX, height * 0.2, + offsetY + 250);
    submitButton.mousePressed(generateStory);
    // when mosur Pressed,call function button example  

}
        

function draw() {
    background(100);

        // text beside input
    text("Enter a noun;", width * 0.2 , height * 0.2 );
    text("Enter a verb;", width * 0.2, height * 0.2+ 50);
    text("Enter a adjective;", width * 0.2 , height * 0.2 + 100);
    text("Enter a adverb;", 100 , width * 0.2 * 0.2 + 150);
    text("Enter a place;", 100 , width * 0.2 * 0.2 + 200);

    console.log(nounField.value());
}

function buttonExample() {
    console.log("Button Clicked!!!")
}


function generateStory() {
    // find value of all inputs
    let noun = nounField.value();
    let verb = verbField.value();
    let adjective = adjectiveField.value();
    let adverb = adverbField.value();
    let place = placeField.value();

    console.log(noun);
    console.log(verb);
    console.log(adjective);
    console.log(adverb);
    console.log(place);

    // JS take on python f-string, called templates very similar
    // JS template e.g. `a ${noun} was ${verb}ing`
    // basically same a python, jsut add dollar sign, and use backtick, thid next to no. 1, on keyboard
    let story = `the ${noun} was ${adverb} ${verb}ing, at ${place}, they are very ${adjective},  `;

    console.log(story);
}