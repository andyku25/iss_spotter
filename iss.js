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

    const ip = JSON.parse(body).ip;
    callback(error, ip);
  });
};

const fetchCoordsByIP = (ip, callback) => {
  request(`https://freegeoip.app/json/${ip}`, (error, response, body) => {
    // BAD REQUEST`
    if (error) return callback(error, null);

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


module.exports = {
  fetchMyIP,
  fetchCoordsByIP,
};