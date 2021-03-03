const returnFirstTwoDrivers = (arr) =>{
    return arr.slice(0,2)
}

const returnLastTwoDrivers = (arr) =>{
    return arr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (int) =>{
    return fare => fare*int
}

const fareDoubler = (fare) =>{
    return createFareMultiplier(fare)(2)
}

const fareTripler = (fare) =>{
    return createFareMultiplier(fare)(3)
}

const selectDifferentDrivers = (driversArr, returnFirstTwoDrivers) =>{
    return returnFirstTwoDrivers(driversArr)
}