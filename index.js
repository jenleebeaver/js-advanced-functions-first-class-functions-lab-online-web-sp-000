// Code your solution in this file!

//1.
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0,2);
};

//2.
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

//3.
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
//array of all drivers

//4.
const createFareMultiplier = function(multiplyValue){
  return function(value){
    return multiplyValue * value;
  };
};
