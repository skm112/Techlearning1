module.exports = {
  mongoURL1: "mongodb://localhost/countrydb",
  mongoURL2:
    "mongodb://countryuser:country.m112@ds161112.mlab.com:61112/country-db",
  host: "http://localhost:3000/",
  TOKEN_SECRET: process.env.TOKEN_SECRET || "ABCDEFGH1234567tyuklkkk"
};
