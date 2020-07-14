//npm install express
'use strict';

const express = require('express');  
const app = express(); 
const request = require('request');
const util = require('util');
const fs = require('fs');
const Summary = require('./objects');

const uri = 'covid-19.by.state.json';

app.get('/', function(req, res) {
    //reading sample json  
    const json = fs.readFileSync(util.format('./%s', uri));
    const output = JSON.parse(json);
    const asOfDate = output.asOfDate;    
    const summary = output.summary;    
    const detail = output.detail;

    //creating class from json response
    let object = new Summary(
        summary.totalCases,
        summary.totalDeath,
        summary.casesInLast7Days,
        summary.ratePer100K
    );
    
    res.send(object);
});
 
const server = app.listen(8081, function () {
    const host = server.address().address;
    const port = server.address().port;
    
    console.log("Snippet 2 listening at http://%s:%s", host, port);
});
