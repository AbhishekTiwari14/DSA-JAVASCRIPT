function getDigit(num, i){ //fxn. to extract digit at 'i'th index of num(last digit = 0th index)
    return Math.floor(num/Math.pow(10,i))%10;
}   

function digitCount(num){ //fxn. to get no. of digits in num
    if(num===0) return 1;
    return Math.floor(Math.log10(num)) + 1;    
}

function maxDigits(arr){ //fxn. to find max no. of digits of an element in the entire array; bcoz no. of times bucket classification is needed  = maxDigits
    let mostDigits = 0;
    for(let el of arr){
        const digits = digitCount(el);
        mostDigits = Math.max(digits, mostDigits); 
    }
    return mostDigits;
}

function RS(arr){
    const maxDigitCount = maxDigits(arr);
    for(let i=0; i<maxDigitCount; i++){
        let digitBuckets = Array.from({length: 10}, ()=>[]);
        for(let j=0; j<arr.length; j++){
            const digit = getDigit(arr[j], i);
            digitBuckets[digit].push(arr[j]);
        }
        arr = [].concat(...digitBuckets);
    } 
}
