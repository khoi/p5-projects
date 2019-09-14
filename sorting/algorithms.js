function* bubbleSort(values) {
  let swapped = false;
  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < values.length - i - 1; j++) {
      if (values[j] > values[j + 1]) {
        [values[j], values[j + 1]] = [values[j + 1], values[j]]
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

function* selectionSort(values) {
  for (let i = 0; i < values.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < values.length; j++) {
      if (values[j] < values[minIdx]) {
        minIdx = j;
      }
    }
    [values[i], values[minIdx]] = [values[minIdx], values[i]]
    yield;
  }
}
