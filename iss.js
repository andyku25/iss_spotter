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

    const ip = JSON.parse(body);
    callback(error, ip.ip);
  });
};

module.exports = {
  fetchMyIP,
};