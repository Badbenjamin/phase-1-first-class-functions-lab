// Code your solution in this file!
// 1
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function (array) {
   return drivers.slice(0,2);
}

const returnLastTwoDrivers = function (array) {
    return drivers.slice(drivers.length - 2, drivers.length);
}


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
    




const createFareMultiplier = function (fare, func) {
    return function multiplyFare(fare) {
        return fare * fare;
    }
}

const fareDoubler = function (fare) {
    return fare * 2;
}

const fareTripler = function (fare) {
    return fare * 3;
}

const selectDifferentDrivers = function (array, daFunction) {
    return daFunction(array);
}

