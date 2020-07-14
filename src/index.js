//npm install express
'use strict';

const express = require('express');
const app = express();
const request = require('request');
const {
  TotalRecoveredCases,
  NewConfirmedCases,
  TotalConfirmedCases,
  PercentageOfTotalCases
} = require('./objects');
const cors = require('cors');

app.use(cors());

let url = 'https://api.covid19api.com/summary';

let options = { json: true };

request(url, options, (error, res, body) => {
  if (!error && res.statusCode == 200) {
    // body = JSON with data
    const global = body.Global; // global = global statistics
    const countries = body.Countries; // countries = statistics for each country

    //default endpoint serving all output
    app.get('/', function (req, res) {
      res.send(body);
    });

    //endpoint serving 'totalrecovered' - API #1
    app.get('/totalrecovered', function (req, res) {
      let objects = [];

      //iterating json response, creating new instance, and adding to array
      for (let country of countries) {
        const object = new TotalRecoveredCases(
          country.Country,
          country.NewConfirmed,
          country.TotalConfirmed,
          country.NewRecovered,
          country.TotalRecovered,
          country.NewDeaths,
          country.TotalDeaths
        );
        objects.push(object);
      }

      //sorting array by property - Hint: if '>' is descending then ....
      objects.sort((a, b) => (a.totalRecovered < b.totalRecovered ? 1 : -1));

      let topTenTotalRecovered = [];
      let counter = 0;
      //iterating objects array and adding first ten to topTenTotalRecovered array
      for (let object of objects) {
        if (counter < 10) {
          topTenTotalRecovered.push(object);
        } else break;
        counter++;
      }

      res.send(topTenTotalRecovered);
    });

    //endpoint serving 'newconfirmed' - API #2
    app.get('/newconfirmed', function (req, res) {
      let objects = [];

      //iterating json response, creating new instance, and adding to array
      for (let country of countries) {
        const object = new NewConfirmedCases(
          country.Country,
          country.NewConfirmed,
          country.TotalConfirmed,
          country.NewRecovered,
          country.TotalRecovered,
          country.NewDeaths,
          country.TotalDeaths
        );
        objects.push(object);
      }

      //sorting array by property - Hint: if '>' is descending then ....
      objects.sort((a, b) => (a.newConfirmed > b.newConfirmed ? 1 : -1));

      let lowestTenNewConfirmed = [];
      let counter = 0;
      //iterating objects array and adding first ten to lowestTenNewConfirmed array
      for (let object of objects) {
        if (counter < 10) {
          lowestTenNewConfirmed.push(object);
        } else break;
        counter++;
      }

      res.send(lowestTenNewConfirmed);
    });

    //endpoint serving 'differenceconfirmed' - API #3
    app.get('/differenceconfirmed', function (req, res) {
      let objects = [];

      //iterating json response, creating new instance, and adding to array
      for (let country of countries) {
        const object = new TotalConfirmedCases(
          country.Country,
          country.NewConfirmed,
          country.TotalConfirmed,
          country.NewRecovered,
          country.TotalRecovered,
          country.NewDeaths,
          country.TotalDeaths
        );
        objects.push(object);
      }

      //sorting array by property - Hint: if '>' is descending then ....
      objects.sort((a, b) => (a.totalConfirmed < b.totalConfirmed ? 1 : -1));

      //find difference between country with highest percentage and country with lowest percentage
      let highest = objects[0].totalConfirmed / global.TotalConfirmed;
      let lowest =
        objects[objects.length - 1].totalConfirmed / global.TotalConfirmed;
      let diff = highest - lowest;

      let result = [
        {
          countryWithHighest: objects[0].country,
          countryWithLowest: objects[objects.length - 1].country,
          difference: diff,
          country: `Highest: ${objects[0].country}, Lowest: ${
            objects[objects.length - 1].country
          }`,
          ui: diff
        }
      ];

      res.send(result);
    });

    //endpoint serving 'percentageconfirmed' - API #4
    app.get('/percentageconfirmed', function (req, res) {
      let objects = [];

      //iterating json response, creating new instance, and adding to array
      for (let country of countries) {
        const object = new PercentageOfTotalCases(
          global.TotalConfirmed,
          country.Country,
          country.NewConfirmed,
          country.TotalConfirmed,
          country.NewRecovered,
          country.TotalRecovered,
          country.NewDeaths,
          country.TotalDeaths
        );
        objects.push(object);
      }
      res.send(objects);
    });
  } else {
    console.log(error);
  }
});

const server = app.listen(8081, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Src listening at http://%s:%s', host, port);
});
