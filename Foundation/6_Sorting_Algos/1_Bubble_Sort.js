function bubbleSort(arr){
    let n = arr.length;
    for(let i=0; i<n; i++){
        for(let j=0; j<n-i-1; j++){
            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[i]];
            }
        }
    }
}

//Optimizing for case when input array is almost already sorted. worst casr TC still remains same.
function bubbleSort(arr){
    let n = arr.length;
    let noSwaps = true;
    for(let i=0; i<n; i++){   //no swap in 1 whole loop => array is sorted now
        for(let j=0; j<n-i-1; j++){
            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[i]];
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
}
