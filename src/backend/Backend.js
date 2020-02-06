const axios = require("axios");

const Backend = axios.create({
  baseURL: "http://192.168.43.37:3000/"
});

export default Backend;
