function merge(arr, s, mid, e){ //fxn. to merge 2 sorted arrays into a single sorted array
    let left = s; //starting index of left array; leftArr = [0,mid]
    let right = mid+1; //starting index of right array; rightArr = [mid+1, e]
    let temp = [];
    while(left<=mid && right<=e){
        if(arr[left]<=arr[right]){
            temp.push(arr[left++]);
        }
        if(arr[left] > arr[right]){
            temp.push(arr[right++]);
        }
    }
    while(left<=mid) temp.push(arr[left++]);
    while(right<=e) temp.push(arr[right++]);
    
    //Putting changes into original array
    for (let i = s; i <= e; i++)
    {
        ar[i] = temp[i-s];
    }

}; 

function MS(arr, s, e){
    if(s>=e) return;
    let mid = s + Math.floor((e-s)/2);
    MS(arr, s, mid);
    MS(arr, mid+1, e);
    merge(arr, s, mid, e);
}