const request = require("request");


const fetchMyIP = (callback) => {
  request("https://api.ipify.org/?format=json", (error, response, body) => {
    if (error) {
      callback(error);
    }
    const ip = JSON.parse(body);
    callback(error, ip.ip);
  });
};

module.exports = {
  fetchMyIP,
}