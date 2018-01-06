// Code your solution in this file!
const logDriverNames = function (drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
  });
}

const logDriversByHometown = function (drivers, location) {
  const hometownDrivers = [];

  drivers.forEach(function (driver) {
    if (driver.hometown === location) {
      hometownDrivers.push(driver);
    }
  });

  return logDriverNames(hometownDrivers);
}


function driversByRevenue(drivers) {
  drivers.sort(function (driver1, driver2) {
    return driver1.revenue - driver2.revenue;
  });
}
