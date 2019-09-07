p5.disableFriendlyErrors = true; // disables FES

let columns;
let rows;
const CELL_WIDTH = 20;
let board;
let nextBoard;
let pause = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  columns = floor(width / CELL_WIDTH);
  rows = floor(height / CELL_WIDTH);
  board = new Board(columns, rows, CELL_WIDTH);

  textSize(20);
  textStyle(BOLD);
  textAlign(RIGHT);
}

function draw() {
  board.evolve();
  board.draw();

  fill(255, 0, 0);
  text(Math.floor(frameRate()), width - 30, 30);
}

function mousePressed() {
  board.mousePressed();
}

function keyPressed() {
  if (keyCode === 32) {
    pause = !pause;
    pause ? noLoop() : loop();
  }
}
