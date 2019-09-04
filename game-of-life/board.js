class Board {
  constructor(cols, rows, cellWidth) {
    this.cols = cols;
    this.rows = rows;
    this.cellWidth = cellWidth;
    this.grid = new Array(cols);
    this.nextGrid = new Array(cols);

    for (let i = 0; i < cols; i++) {
      this.grid[i] = new Array(rows);
      this.nextGrid[i] = new Array(rows);
    }

    this.randomize();
  }

  randomize() {
    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        this.grid[i][j] = floor(random(2));
        this.nextGrid[i][j] = 0;
      }
    }
  }

  draw() {
    background(255);
    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        if ((this.grid[i][j] == 1)) fill(0);
        else fill(255);
        stroke(0);
        rect(i * this.cellWidth, j * this.cellWidth, this.cellWidth, this.cellWidth);
      }
    }
  }

  getCell(col, row) {
    return this.grid[(col + this.cols) % this.cols][(row + this.rows) % this.rows]
  }

  evolve() {
    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        const count = this.getCell(i - 1, j - 1) + this.getCell(i - 1, j) + this.getCell(i - 1, j + 1) + this.getCell(i, j - 1) + this.getCell(i, j + 1) + this.getCell(i + 1, j - 1) + this.getCell(i + 1, j) + this.getCell(i + 1, j + 1);
        if ((this.grid[i][j] == 1) && (count < 2)) this.nextGrid[i][j] = 0;           
        else if ((this.grid[i][j] == 1) && (count > 3)) this.nextGrid[i][j] = 0;           
        else if ((this.grid[i][j] == 0) && (count == 3)) this.nextGrid[i][j] = 1;           
        else this.nextGrid[i][j] = this.grid[i][j]; 
      }
    }
    let temp = this.grid;
    this.grid = this.nextGrid;
    this.nextGrid = temp;
  }
}