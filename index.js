// Code your solution in this file!
const logDriverNames = function (drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
  })
}

const logDriversByHometown = function (drivers, location) {
  const hometownDrivers = [];

  for (const driver of drivers) {
    if (driver.hometown === location) {
      hometownDrivers.push(driver);
    }
  }

  return logDriverNames(hometownDrivers);
}


function driversByRevenue(drivers) {
  
}
