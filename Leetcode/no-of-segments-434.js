

var countSegments = function (s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ' ' || s[i-1] === ' ') {
            count++
        }
    }
};



console.log(countSegments("Of all the gin joints in all the towns in all the world,   "))