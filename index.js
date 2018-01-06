// Code your solution in this file!
const logDriverNames = function (drivers) {
  for (const driver of drivers) {
    console.log(driver.name);
  }
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
