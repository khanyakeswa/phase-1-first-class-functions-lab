const returnFirstTwoDrivers = (array) => {
    return [array[0], array[1]]
};

const returnLastTwoDrivers = (array) => {
    return [array[(array.length - 2)], array[(array.length - 1)]];
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (someValue) => {
    return function (value) {
        return someValue * value;
    }
}

const fareDoubler = (fare) => {return fare * 2};

const fareTripler = (fare) => {return fare * 3};

const selectDifferentDrivers = (drivers, argument) => {
    return argument(drivers);
}