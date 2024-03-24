function bubbleSort(arr){
    const n = arr.length;
    for(let i=0; i<n; i++){
        for(let j=i; j<n-1-i; j++){
            if(arr[j]>arr[j+1]){
                swap(arr[j], arr[j+1]);
            }
        }
    }
}

function swap(a,b){
    const temp = a;
    a = b;
    b = temp;
}