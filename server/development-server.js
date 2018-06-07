// Centralizes requests to other microservices (CPACS, Equipment, SMS) and sends it back to client
const express = require('express');

const app = require('./app');
// tslint:disable-next-line:no-console
app.listen(3000, () => console.log('App listening on port 3000'));
