function* bubbleSort(values) {
  let swapped = false;
  let i, j;
  for (i = 0; i < values.length; i++) {
    for (j = 0; j < values.length - i - 1; j++) {
      if (values[j] > values[j + 1]) {
        let t = values[j];
        values[j] = values[j + 1];
        values[j + 1] = t;
        swapped = true;
      }
      yield;
    }

    if (!swapped) {
      return;
    }
  }
}

function* insertionSort(values) {


  for (let i = 1; i < values.length; i++) {
    let key = values[i];
    let j = i - 1;
    while (j >= 0 && values[j] > key) {
      values[j + 1] = values[j];
      j = j - 1;
      yield;
    }
    values[j + 1] = key;
  }

}
