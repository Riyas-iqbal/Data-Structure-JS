let b = [1,3,5,6]
let a = [2,4,7,8]



function merge(arr1,arr2){
    let newArr = []
    let length =  arr1.length + arr2.length
    var j = 0
    var k = 0
    for (let i = 0; i < length; i++) {
        if(arr1[j] > arr2[k]  ||  !arr1[j]  ){
            newArr.push(arr2[k])
            k++
        }else{
            newArr.push(arr1[j])
            j++
        }
    }
    return newArr
}


console.log(merge(a,b))