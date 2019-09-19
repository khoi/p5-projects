const FRAME_RATE = 60;
const CONTROL_HEIGHT = 20;
const TILE_WIDTH = 20;

let N;
let M;

let values;
let sorters;
let sortersFinished;
let capturer = new CCapture({ format: "png", framerate: FRAME_RATE });
let isRecording = false;

const SORT_CLASSES = {
  bubble: bubbleSort,
  insertion: insertionSort,
  selection: selectionSort,
  quickSort: quickSort
};

function setup() {
  createCanvas(1680, 1050);
  colorMode(HSL, 360, 100, 100);
  frameRate(FRAME_RATE);

  setupInput();

  N = Math.floor(width / TILE_WIDTH);
  M = Math.floor(height / TILE_WIDTH);

  values = new Array(M);
  sorters = new Array(M);

  startSorting("insertion");

  textSize(20);
  textStyle(BOLD);
  textAlign(RIGHT);
}

function setupInput() {
  Object.keys(SORT_CLASSES).forEach((k, i) => {
    let button = createButton(k);
    button.position(70 * i + 30, 20);
    button.mousePressed(() => startSorting(k));
  });
}

function startSorting(algorithm) {
  values = new Array(M);
  sorters = new Array(M);
  sortersFinished = new Array(M);

  for (let i = 0; i < M; i++) {
    values[i] = new Array(N);
    for (let j = 0; j < N; j++) {
      values[i][j] = j;
    }
    shuffle(values[i], true);
    sorters[i] = SORT_CLASSES[algorithm](values[i]);
    sortersFinished[i] = false;
  }
}

function draw() {
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      let c = color(map(values[i][j], 0, N, 0, 360), 100, 50);
      stroke(c);
      fill(c);
      rect(j * TILE_WIDTH, i * TILE_WIDTH, TILE_WIDTH, TILE_WIDTH);
    }
    sortersFinished[i] = sorters[i].next().done;
  }

  if (isRecording) {
    capturer.capture(document.getElementById("defaultCanvas0"));
    if (sortersFinished.every(finished => finished)) {
      stopRecording();
      noLoop();
    }
  }

  drawFrameRate();
}

function startRecording() {
  capturer.start();
  isRecording = true;
}

function stopRecording() {
  capturer.stop();
  capturer.save();
}

function drawFrameRate() {
  fill(255, 0, 0);
  text(Math.floor(frameRate()), width - 30, 30);
}
