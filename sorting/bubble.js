class BubbleSort {
  constructor(values) {
    this.values = values;
  }

  *makeGenerator() {
    for (let i = values.length - 1; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        if (values[j] > values[j + 1]) {
          let t = values[j];
          values[j] = values[j + 1];
          values[j + 1] = t;
        }
        yield;
      }
    }
  }
}
