
function uniqueString(string) {
    for (let i = 0; i < string.length; i++) {
        let flag=0;
        for (let j = 0; j < string.length; j++) {
            if (string[i] === string[j] && i!=j) {
                flag++;
                break;
            }        
        }
        if (flag===0) {
            console.log(string[i])
        }
    }
}


uniqueString('rriyyaass')








