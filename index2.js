const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require("./iss_promised");

// fetchMyIP()
//   .then(fetchCoordsByIP)
//   .then(fetchISSFlyOverTimes)
//   .then(body => console.log(`IP: ${body}`));

nextISSTimesForMyLocation()
  .then((passTimes) => {
    const responses = passTimes.response;
    for (const response of responses) {
      const dateTime = new Date(0);
      dateTime.setUTCSeconds(response.risetime);
      console.log(`Next pass at ${dateTime} for ${response.duration} seconds!`);
    }
  })
  .catch((error) => {
    console.log(`It didn't work: `, error.message);
  });