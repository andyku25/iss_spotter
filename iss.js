const request = require("request");


const fetchMyIP = (callback) => {
  request("https://api.ipify.org/?format=json", (error, response, body) => {
    // IF BAD REQUEST
    if (error) {
      callback(error);
      return;
    }
    
    // IF RESPONSE IS NOT GOOD - 200
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
    }

    // pass the ip address to the callback
    const ip = JSON.parse(body).ip;
    callback(error, ip);
  });
};

const fetchCoordsByIP = (ip, callback) => {
  request(`https://freegeoip.app/json/${ip}`, (error, response, body) => {
    // BAD REQUEST`
    if (error) return callback(error, null);

    // IF RESPONSE IS NOT GOOD - 200
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching coordinates for IP. Response ${body}`;
      callback(Error(msg), null);
      return;
    }

    // CREAT COORDINATES OBJECT
    const coordinates = {};
    const ipDetails = JSON.parse(body);
    coordinates.latitude = ipDetails.latitude;
    coordinates.longitude = ipDetails.longitude;
    callback(error, coordinates);
  });
};

const fetchISSFloyOverTimes = (coords, callback) => {
  request(`http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`, (error, response, body) => {
    if (error) return callback(error, null);

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching ISS pass times: ${body}`;
      callback(Error(msg), null);
    }

    const times = JSON.parse(body).response;
    callback(null, times);
  });
};


module.exports = {
  fetchMyIP,
  fetchCoordsByIP,
  fetchISSFloyOverTimes
};