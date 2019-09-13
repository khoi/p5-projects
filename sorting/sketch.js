let sortGenerator;
let values;
let N = 250;
let columnWidth;

function setup() {
  createCanvas(windowWidth, windowHeight);
  values = new Array(N);
  for (let i = 0; i < N; i++) {
    values[i] = random(height);
  }
  columnWidth = width / N;
  sortGenerator = new BubbleSort(values).makeGenerator();

  textSize(20);
  textStyle(BOLD);
  textAlign(RIGHT);
}

function draw() {
  background(0);

  for (let i = 0; i < values.length; i++) {
    stroke(255);
    fill(255);
    rect(i * columnWidth, height - values[i], columnWidth, values[i]);
  }

  if (sortGenerator.next().done) {
    print("Done!");
    noLoop();
  }

  fill(255, 0, 0);
  text(Math.floor(frameRate()), width - 30, 30);
}
