const PATTERN_7468M = [
  [0, 0, 1, 1],
  [0, 0, 1, 0],
  [0, 0, 0, 0],
  [0, 0, 1, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0]
]; // http://www.conwaylife.com/wiki/7468M

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

    this.initCellState();
  }

  initCellState() {
    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        this.grid[i][j] = new Cell(
          i * this.cellWidth,
          j * this.cellWidth,
          this.cellWidth,
          Math.floor(random(2))
        );
        this.nextGrid[i][j] = new Cell(
          i * this.cellWidth,
          j * this.cellWidth,
          this.cellWidth,
          0
        );
      }
    }
  }

  draw() {
    background(255);
    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        this.grid[i][j].draw();
      }
    }
  }

  getCell(col, row) {
    return this.grid[(col + this.cols) % this.cols][
      (row + this.rows) % this.rows
    ];
  }

  evolve() {
    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        const count =
          this.getCell(i - 1, j - 1).state +
          this.getCell(i - 1, j).state +
          this.getCell(i - 1, j + 1).state +
          this.getCell(i, j - 1).state +
          this.getCell(i, j + 1).state +
          this.getCell(i + 1, j - 1).state +
          this.getCell(i + 1, j).state +
          this.getCell(i + 1, j + 1).state;

        if (this.grid[i][j].state == 1 && count < 2)
          this.nextGrid[i][j].setState(0);
        else if (this.grid[i][j].state == 1 && count > 3)
          this.nextGrid[i][j].setState(0);
        else if (this.grid[i][j].state == 0 && count == 3)
          this.nextGrid[i][j].setState(1);
        else this.nextGrid[i][j].setState(this.grid[i][j].state);
      }
    }
    let temp = this.grid;
    this.grid = this.nextGrid;
    this.nextGrid = temp;
  }

  mousePressed() {
    const pressedCol = Math.floor(mouseX / this.cellWidth);
    const pressedRow = Math.floor(mouseY / this.cellWidth);

    for (let i = 0; i < PATTERN_7468M.length; i++) {
      for (let j = 0; j < PATTERN_7468M[i].length; j++) {
        this.grid[(pressedCol + i + this.cols) % this.cols][
          (pressedRow + j + this.rows) % this.rows
        ].setState(PATTERN_7468M[i][j]);
      }
    }
  }
}
