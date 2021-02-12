const { fetchMyIP, fetchCoordsByIP } = require("./iss");

// // FETCH IP ADDRESS
// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked! Returned IP: ", ip);
// });

const ip = "104.156.107.14"

// // FETCH COORDINATES USING THE IP
// fetchCoordsByIP("sdasdad", (error, coordinates) => {
//   if (error) return console.log(error);

//   console.log(coordinates);
// });