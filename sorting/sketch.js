let values;
let N = 50;
let columnWidth;
const FRAME_RATE = 60;
let sorters;

function setup() {
  createCanvas(800, 800);
  colorMode(HSL, 360, 100, 100);

  frameRate(FRAME_RATE);

  values = new Array(N);
  sorters = new Array(N);

  for (let i = 0; i < N; i++) {
    values[i] = new Array(N);
    for (let j = 0; j < N; j++) {
      values[i][j] = j;
    }
    shuffle(values[i], true);
    sorters[i] = new BubbleSort(values[i]).makeGenerator();
  }

  columnWidth = width / N;

  textSize(20);
  textStyle(BOLD);
  textAlign(RIGHT);
}

function draw() {
  background(0);
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      let c = color(map(values[i][j], 0, N, 0, 360), 100, 50);
      stroke(c);
      fill(c);
      rect(j * columnWidth, i * columnWidth, columnWidth, columnWidth);
    }
    sorters[i].next();
  }
  fill(255, 0, 0);
  text(Math.floor(frameRate()), width - 30, 30);
}
