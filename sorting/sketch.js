let sortGenerator;
let values;
let N = 50;
let columnWidth;
const FRAME_RATE = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);

  frameRate(FRAME_RATE);

  values = new Array(N);
  for (let i = 0; i < N; i++) {
    values[i] = random(height);
  }
  columnWidth = width / N;
  sortGenerator = new InsertionSort(values).makeGenerator();

  textSize(20);
  textStyle(BOLD);
  textAlign(RIGHT);
}

function draw() {
  let next = sortGenerator.next();
  if (next.done) {
    print("Done!");
    noLoop();
    return;
  }

  background(0);
  for (let i = 0; i < values.length; i++) {
    stroke(255);
    if (i == next.value[0]) fill(255, 0, 0);
    else if (i == next.value[1]) fill(0, 255, 0);
    else fill(255);
    rect(i * columnWidth, height - values[i], columnWidth, values[i]);
  }

  fill(255, 0, 0);
  text(Math.floor(frameRate()), width - 30, 30);
}
