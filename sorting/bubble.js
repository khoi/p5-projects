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
