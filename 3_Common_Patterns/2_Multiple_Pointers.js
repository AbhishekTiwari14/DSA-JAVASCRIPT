//Q1) Given a sorted array, return the first pair which sums up to zero. ex.) ar = [-5,-4,-2,1,2,3,4]
// => ans = [-4,4] 
function sumZero(arr){
    let i = 0, j = arr.length-1;
    while(i<j){
        if(arr[i] + arr[j] === 0){ 
            return [arr[i], arr[j]];
        }
        else if(arr[i] + arr[j] >0){
            j--;
        }
        else i++;
    }
    return -1;
}

console.log(sumZero([-5,-4,-2,1,2,3,4])); // [-4,4]

//.......................................................

//Q2) Given a sorted array, count no. of unique values in the array. ex.) ar = [1,1,2,2,2,3,3,3,4,4,4,5] => ans = 5

function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    let i = 0, j = 1;
    let ans = 1;
    while(j<arr.length){
        if(arr[i] !== arr[j]){
            ans++;
            i = j;
        }
        j++;
    }
    return ans;
}
console.log(countUniqueValues([1,2,2,2,2,3,3,3,3,4,5,5,5,5,6,6])); //6