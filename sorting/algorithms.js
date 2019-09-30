function* bubbleSort(values) {
  let swapped = false;
  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < values.length - i - 1; j++) {
      if (values[j] > values[j + 1]) {
        [values[j], values[j + 1]] = [values[j + 1], values[j]];
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
    yield;
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
    [values[i], values[minIdx]] = [values[minIdx], values[i]];
    yield;
  }
}

function* quickSortHoare(values) {
  yield* _quickSortHoare(values, 0, values.length - 1);
}

function* _quickSortHoare(values, left, right) {
  if (left >= right) {
    return;
  }
  let partitionGenerator = _partitionHoare(values, left, right);

  let result = partitionGenerator.next();
  while (!result.done) {
    result = partitionGenerator.next();
    yield 1;
  }

  let idx = result.value;
  yield* _quickSortHoare(values, left, idx);
  yield* _quickSortHoare(values, idx + 1, right);
}

function* _partitionHoare(values, left, right) {
  let pivotIdx = left + Math.floor((right - left) / 2);
  let pivot = values[pivotIdx];
  while (true) {
    while (values[left] < pivot) left++;
    while (values[right] > pivot) right--;
    if (left >= right) return right;
    [values[left], values[right]] = [values[right], values[left]];
    left++;
    right--;
    yield;
  }
}

function* bogoSort(values) {
  while (!isSorted(values)) {
    shuffle(values, true);
    yield;
  }
}

function isSorted(values) {
  for (let i = 0; i < values.length - 1; i++) {
    if (values[i] > values[i + 1]) return false;
  }
  return true;
}
