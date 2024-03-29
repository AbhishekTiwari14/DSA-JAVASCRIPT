function IS(arr){
    let n = arr.length;
    for(let i=1; i<n; i++){
        let curr = arr[i];
        let j = i-1;
        while(j>=0 && arr[j]>curr){ //ie, while left portion is unsorted
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = curr;
    }
}