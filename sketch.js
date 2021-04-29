// p5 Params
// https://p5js.org/reference/
let x = 1200
let y = 600
let fr = 60
let yPad = 100

// State machine
let R, G, B
let xpos = 0

function setup() {

    cnv = createCanvas(x, y)
    cnv.position((windowWidth - x)/2, yPad)

    frameRate(fr)
    background(0)

    reset()
}


function draw() {

    fill(R.value(),G.value(),B.value())
    rect(x/2 - 100, y/2 - 100, 200, 200);
}

// Reset button
function reset() {

    removeElements()

    fill(0,0,0)
    stroke(255, 255, 255)
    strokeWeight(4)
    rect(x/2 - 100, y/2 - 100, 200, 200);


    fill(155,155,155)
    stroke(0, 0, 0)
    strokeWeight(2)
    rect(x/2 -100 + 15, y/2 + 104, 15, 200);
    rect(x/2 -100 + 65, y/2 + 104, 15, 200);
    rect(x/2 -100 + 115, y/2 + 104, 15, 200);
    rect(x/2 -100 + 165, y/2 + 104, 15, 200);
    strokeWeight(0)

    resetButton = createButton('reset');
    resetButton.position(x + (windowWidth - x)/2 - 150, y + yPad + 5)
    resetButton.mousePressed(reset)

    R = createSlider(0, 255, 0, 5)
    G = createSlider(0, 255, 0, 5)
    B = createSlider(0, 255, 0, 5)
    R.position(x + (windowWidth - x)/2 - 150, y + yPad - 95)
    G.position(x + (windowWidth - x)/2 - 150, y + yPad - 70)
    B.position(x + (windowWidth - x)/2 - 150, y + yPad - 45)
}