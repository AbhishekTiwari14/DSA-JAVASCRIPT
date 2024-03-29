//Q) Given a sorted array and n,find if n is part of array or not
function bs(arr, n){
    let s = 0, e = arr.length-1;
    while(s<=e){
        let mid = s + Math.floor((e-s)/2);
        if(arr[mid] === n) return true;
        else if(arr[mid] > n){
            e = mid-1;
        } 
        else s = mid+1;
    }
    return false;
}