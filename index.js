const express = require('express');
//const routes = require('Router')
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(router);
app.listen(3000);
