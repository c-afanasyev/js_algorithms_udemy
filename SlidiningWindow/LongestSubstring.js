function findLongestSubstring(str) {//  thisisawesome
    let longest = 0;
    let seen = {};
    let left = 0;

    for (let right = 0; right < str.length; right++) {
        let char = str[right];
        if (seen[char]) {
            left = Math.max(left, seen[char]);
        }
        // index - beginning of substring + 1 (to include current in count)
        longest = Math.max(longest, right - left + 1);
        // store the index of the next char so as to not double count
        seen[char] = right + 1;
    }
    return longest;
}


/*function findLongestSubstring(arr) {
    let seen = {};
    let longest = 0;
    let left = 0, right = 0;

    while (right < arr.length) {
        if (!(arr[right] in seen)) {
            seen[arr[right]] = right+1;
            right++;
            longest = Math.max(longest, right - left);
        } else {
            left = seen[arr[right]];
            right = left+1;
            seen = {};
            seen[arr[left]] = left+1;
        }
    }
    
    return longest;
}*/

//console.assert(findLongestSubstring('') === 0);
//console.assert(findLongestSubstring('rithmschool') === 7);
//console.assert(findLongestSubstring('thisisawesome') === 6);
console.assert(findLongestSubstring('thecatinthehat') === 7);
//console.assert(findLongestSubstring('bbbbbb') === 1);
console.assert(findLongestSubstring('longestsubstring') === 8);
console.assert(findLongestSubstring('thisishowwedoit') === 6);
