//Q1) given 2 arrays ar1 & ar2, return true if ar2 is array of square values of ar1 (order does'nt matter).
//Ex1) ar1 = [2,3,2], ar2 = [9,4,4] or ar2 = [4,4,9] or ar2 = [4,9,4] is true but ar2 = [1,4,4,9] or [4,9] is false


function checkSquares(ar1, ar2){  //TC: O(N), SC: O(N)
    if(ar1.length != ar2.length) return false;
    let fc1 = {};
    let fc2 = {};
    for(let val of ar1){
        fc1[val] = (fc1[val] || 0) + 1;
    }
    for(let val of ar2){
        fc2[val] = (fc2[val] || 0) + 1;
    }
    for(let key in fc1){
        if(!(key ** 2 in fc2)) return false;
        if(fc2[key ** 2] != fc1[key]) return false;
    }
    return true;
}

console.log(checkSquares([1,2,3], [9,1,4])); //true

//.........................................................

//Q2) Check ANAGRAMS: given 2 strings, check if they are anagrams of each other. Anagrams are strings with same letters(& frequencies) but re-arranged/jumbled. //Ex.) 'abcd' & 'cadb' are anagrams but 'pawan' & 'napw' are not.

function checkAnagrams(str1, str2){
    if(str1.length != str2.length) return false;
    let freq = {};
    for(let char of str1){
        freq[char] = (freq[char] || 0) + 1;
    }
    for(let char of str2){
        if(!freq[char]) return false;
        freq[char]--;
    }
    return true;
}

console.log(checkAnagrams('abbccc', 'cbcabc')); //true

//.........................................................