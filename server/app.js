const express = require('express');
const request = require('request');
//const bodyParser = require('body-parser');
//const api = require('config');

const integrationAPI = 'http://integration.api.otss.admin.nyu.edu/cpacsweb/v1/projects/';
const app = express();
//app.use(bodyParser.json({ limit: api.json.limit }));
app.use((req, res, next) => {
    const origin = req.headers.origin;
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Credentials', 'true');

    // Short circuit preflight requests
    if (req.method == 'OPTIONS') {
        res.status(204).send();
    } else {
        next();
    }
});

// Gets all Projects from Cpacs
app.get('/Projects', async (req, res) => {

    request.get({
        url: integrationAPI,
        json: true
    }, (error, response, body) => {
        if (error) {
            console.log("error");
            res.status(500).send({error: error});
        }
        try {
            console.log("request received");
            //res.status(200).send(body);
            res.status(200).json(body);
        } catch(err) {
            console.log("err");
            res.status(500).send({error: err});
        }
    });
});

module.exports = app;
