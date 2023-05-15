

const average = function (salary) {

    let minIndex = 0;
    let maxIndex = 0;
    let average = 0

    for (let i = 0; i < salary.length; i++) {
        if (salary[i] > salary[maxIndex]) {
            maxIndex = i
        }

        if (salary[i] < salary[minIndex]) {
            minIndex = i
        }

        average += salary[i]
    }

    average = average - salary[minIndex] - salary[maxIndex]

    return (average/(salary.length-2))
};


console.log(average([4000,3000,1000,2000]))