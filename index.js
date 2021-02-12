const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require("./iss");

// // FETCH IP ADDRESS
// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked! Returned IP: ", ip);
// });

const ip = "104.156.107.14";

// // FETCH COORDINATES USING THE IP
// fetchCoordsByIP("sdasdad", (error, coordinates) => {
//   if (error) return console.log("It didn' work!", error);

//   console.log("It worked! Returned coordinates: ", coordinates);
// });

const coords = {latitude: 45.12, longitude: -122};

// fetchISSFlyOverTimes(coords, (error, times) => {
//   if (error) return console.log("It didn't work!", error);

//   console.log("It worked! Returned flyover times:", times);
// });


nextISSTimesForMyLocation((error, passTimes) => {
  if (error) return console.log("It didn't work!", error);

  console.log(passTimes);
  for (passTime of passTimes) {
    const dateTime = new Date(0);
    dateTime.setUTCSeconds(passTime.risetime);
    // const dateFormat = new Date(passTime.risetime.toLocalFormat());
    console.log(`Next pass at ${dateTime} for ${passTime.duration} seconds!`);
  }
});