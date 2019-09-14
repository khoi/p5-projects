class BubbleSort {
  constructor(values) {
    this.values = values;
  }

  *makeGenerator() {
    let swapped = false;
    let i, j;
    for (i = 0; i < this.values.length; i++) {
      for (j = 0; j < this.values.length - i - 1; j++) {
        if (values[j] > values[j + 1]) {
          let t = values[j];
          values[j] = values[j + 1];
          values[j + 1] = t;
          swapped = true;
        }
        yield [j, j + 1];
      }

      if (!swapped) {
        return;
      }
    }
  }
}

class InsertionSort {
  constructor(values) {
    this.values = values;
  }

  *makeGenerator() {
    for (let i = 1; i < this.values.length; i++) {
      let key = this.values[i];
      let j = i - 1;
      while (j >= 0 && this.values[j] > key) {
        this.values[j + 1] = this.values[j];
        j = j - 1;
        yield [j, i];
      }
      this.values[j + 1] = key;
    }
  }
}
