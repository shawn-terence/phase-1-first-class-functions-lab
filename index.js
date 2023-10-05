// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(){
    let driversFirst= drivers.slice(0,2);
        return driversFirst;
}

const returnLastTwoDrivers =function(){
    let driversLast = drivers.slice(2,4);
    return driversLast;
}
const selectingDrivers = [returnFirstTwoDrivers , returnLastTwoDrivers]
function createFareMultiplier(x){
    return function fareMultiplier(){
        return x * x;
 
   }
}
const fareDoubler = function(x){
    return x * 2;
}
const fareTripler = function(x){
    return x * 3;
}

function selectDifferentDrivers(drivers, selectingDrivers){
    return selectingDrivers(drivers);
}

