const returnFirstTwoDrivers = function(drivers) {
    const firstTwo = drivers.slice(0,2)
    return firstTwo
}

const returnLastTwoDrivers = function(drivers){
    const lastTwo = drivers.slice(-2)
    return lastTwo
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier){
    return function (fare){
        return fare * multiplier
    }
}

function fareDoubler(fare){
    const doubledFare = createFareMultiplier(2)

    return doubledFare(fare)
}

function fareTripler(fare){
    const tripledFare = createFareMultiplier(3)

    return tripledFare(fare)
}

function selectDifferentDrivers(drivers, set){
    return set(drivers)
}