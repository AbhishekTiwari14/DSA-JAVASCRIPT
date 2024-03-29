function partition(arr, s, e){
    const pivotElement = arr[s];   
    let pivotIndex = s;
    for(let i=s+1; i<=e; i++){  
        if(arr[i] < pivotElement){ 
            pivotIndex++;
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        }
    }
    [arr[s], arr[pivotIndex]] = [arr[pivotIndex], arr[s]];  //swapping pivotELement to its pivotIndex
    return pivotIndex;
}

function QS(arr, s, e){
    if(s>=e) return;
    const pivotIndex = partition(arr, s, e);
    QS(arr, s, pivotIndex - 1); // Sort left of pivot
    QS(arr, pivotIndex + 1, e); // Sort right of pivot
}