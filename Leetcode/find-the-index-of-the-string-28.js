var strStr = function(haystack='', needle='') {
    let k = 0
    let index
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[k]) {
            if(k===0) index = i
            k++
            if (k===needle.length) {
                return index
            }
        } else {
            i=(i-k)
            k=0
        }
    }
    return -1
};

console.log(strStr("mississippi","issip"))