class Cell {
  constructor(x, y, w, initialState) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.state = initialState;
  }

  setState(newState) {
    this.prevState = this.state;
    this.state = newState;
  }

  draw() {
    if (this.state == 1) fill(0);
    else fill(255);
    stroke(0);
    rect(this.x, this.y, this.w, this.w);
  }
}
