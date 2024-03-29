//Q1) given an array & a no. 'n', return the sum of subarray of size n with max. sum. Ex.) arrr = [2,3,5,1,3], n=2 => max sum subarray of size 2 = [3,5] => ans = 8
function maxSumSubarray(arr, n){
    let ans = -Infinity;
    let sum = 0;
    //creating first window(size n)
    for(let i=0; i<n; i++){
        sum+= arr[i];
    }
    ans = sum;
    //sliding the window
    for(let i=n; i<arr.length; i++){
        sum = sum - arr[i-n] + arr[i];
        ans = Math.max(sum, ans);
    }
    return ans;
}

console.log(maxSumSubarray([1,6,8,3,2,5,9], 3)); //17 , ie [6,8,3]