const FRAME_RATE = 60;
const CONTROL_HEIGHT = 20;

let N = 50;
let M = 10;

let values;
let tileWidth;
let tileHeight;
let sorters;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSL, 360, 100, 100);

  frameRate(FRAME_RATE);

  tileWidth = width / N;
  M = Math.floor(windowHeight / tileWidth);

  values = new Array(M);
  sorters = new Array(M);

  for (let i = 0; i < M; i++) {
    values[i] = new Array(N);
    for (let j = 0; j < N; j++) {
      values[i][j] = j;
    }
    shuffle(values[i], true);
    sorters[i] = new InsertionSort(values[i]).makeGenerator();
  }

  textSize(20);
  textStyle(BOLD);
  textAlign(RIGHT);
}

function draw() {
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      let c = color(map(values[i][j], 0, N, 0, 360), 100, 50);
      stroke(c);
      fill(c);
      rect(j * tileWidth, i * tileWidth, tileWidth, tileWidth);
    }
    sorters[i].next();
  }
  fill(255, 0, 0);
  text(Math.floor(frameRate()), width - 30, 30);
}
