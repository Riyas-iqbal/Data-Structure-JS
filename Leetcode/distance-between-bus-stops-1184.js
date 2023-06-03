/**
 * 
 * A bus has n stops numbered from 0 to n - 1 that form a circle. We know the 
 * distance between all pairs of neighboring stops where distance[i] is the 
 * distance between the stops number i and (i + 1) % n. The bus goes along both
 * directions i.e. clockwise and counterclockwise.
 * Return the shortest distance between the given start and destination stops.
 * 
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
const distanceBetweenBusStops = function (distance, start, destination) {
    calculateClockwiseDistance = () => {
        let totalDistance = 0;
        let startIdx = start //22
        do {
            if (startIdx == distance.length) {
                startIdx = 0
                if (destination == 0) {
                    break;
                }
            }
            totalDistance += distance[startIdx]
            startIdx++
        } while (startIdx !== destination);

        return totalDistance
    }

    calculateCounterClockwiseDistance = () => {
        let totalDistance = 0
        let idx = start
        do {
            if (idx === 0) {
                idx = distance.length
            }
            totalDistance += distance[idx - 1]
            idx--
        } while (idx !== destination);
        return totalDistance
    }

    const clockwiseDistance = calculateClockwiseDistance()
    const counterclockwiseDistance = calculateCounterClockwiseDistance()
    console.log(`clockwise distance is ${clockwiseDistance}, counter clockwise distance is ${counterclockwiseDistance}`)
    return clockwiseDistance > counterclockwiseDistance ? counterclockwiseDistance : clockwiseDistance
};

const distance = [6, 47, 48, 31, 10, 27, 46, 33, 52, 33, 38, 25, 32, 45, 36, 3, 0, 33, 22, 53, 8, 13, 18, 1, 44, 41, 14, 5, 38, 25, 48]
const start = 22
const destination = 0

const total = distanceBetweenBusStops(distance, start, destination)
console.log(total)