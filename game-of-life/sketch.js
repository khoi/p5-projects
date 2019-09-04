
let columns;
let rows;
const CELL_WIDTH = 20;
let board;
let nextBoard;

function setup() {
  createCanvas(windowWidth, windowHeight);
  columns = floor(windowWidth / CELL_WIDTH);
  rows = floor(windowHeight / CELL_WIDTH);
  
  board = new Board(columns, rows, CELL_WIDTH);
}

function draw() {
  board.evolve();
  board.draw();
  text(frameRate(), width / 2, height / 2);
}