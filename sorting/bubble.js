class BubbleSort {
  constructor(values) {
    this.values = values;
  }

  *makeGenerator() {
    for (let i = 0; i < this.values.length; i++) {
      for (let j = 0; j < this.values.length - i - 1; j++) {
        if (values[j] > values[j + 1]) {
          let t = values[j];
          values[j] = values[j + 1];
          values[j + 1] = t;
        }
        yield j + 1;
      }
    }
  }
}
