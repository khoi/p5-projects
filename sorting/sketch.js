const FRAME_RATE = 60;
const CONTROL_HEIGHT = 20;

let N = 50;
let M = 10;

let values;
let tileWidth;
let tileHeight;
let sorters;

const SORT_CLASSES = {
  bubble: BubbleSort,
  insertion: InsertionSort
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSL, 360, 100, 100);
  frameRate(FRAME_RATE);

  setupInput();

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

function setupInput() {
  Object.keys(SORT_CLASSES).forEach((k, i) => {
    let button = createButton(k);
    button.position(60 * i + 20, 20);
    button.mousePressed(() => startSorting(k));
  });
}

function startSorting(algorithm) {
  values = new Array(M);
  sorters = new Array(M);

  for (let i = 0; i < M; i++) {
    values[i] = new Array(N);
    for (let j = 0; j < N; j++) {
      values[i][j] = j;
    }
    shuffle(values[i], true);
    sorters[i] = new SORT_CLASSES[algorithm](values[i]).makeGenerator();
  }
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
  drawFrameRate();
}

function drawFrameRate() {
  fill(255, 0, 0);
  text(Math.floor(frameRate()), width - 30, 30);
}
