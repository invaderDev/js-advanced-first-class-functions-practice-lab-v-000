// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
  });
}

function logDriversByHometown(drivers, location) {
  const hometownDrivers = [];

  drivers.forEach(function (driver) {
    if (driver.hometown === location) {
      hometownDrivers.push(driver);
    }
  });

  return logDriverNames(hometownDrivers);
}


function driversByRevenue(drivers) {
  const nonDestructiveDrivers = [...drivers];

  return nonDestructiveDrivers.sort(function (driver1, driver2) {
    return driver1.revenue - driver2.revenue;
  });
}
