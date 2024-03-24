function partition(arr, s, e) {
    const pivotElement = arr[e]; // Choose last element as pivot
    let pivotIndex = s;

    for (let i = s; i < e; i++) {
        if (arr[i] <= pivotElement) {
            // Swap arr[i] and arr[pivotIndex]
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
            pivotIndex++;
        }
    }

    // Swap pivot element (arr[e]) with element at pivotIndex
    [arr[e], arr[pivotIndex]] = [arr[pivotIndex], arr[e]];
    return pivotIndex;
}

function quickSort(arr, s, e) {
    // Base case
    if (s >= e) return;

    let p = partition(arr, s, e);
    quickSort(arr, s, p - 1); // Sort left of pivot
    quickSort(arr, p + 1, e); // Sort right of pivot
}