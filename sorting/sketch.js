let sortGenerator;
let values;
let N = 50;
let columnWidth;

function setup() {
  createCanvas(windowWidth, windowHeight);
  values = new Array(N);
  for (let i = 0; i < N; i++) {
    values[i] = random(height);
  }
  columnWidth = width / N;
  sortGenerator = new BubbleSort(values).makeGenerator();
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
}
