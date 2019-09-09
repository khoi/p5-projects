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
    if (this.state == 0) return;
    if (this.state == 1) fill(0);
    else fill(255);
    circle(this.x, this.y, this.w - 2);
  }
}
