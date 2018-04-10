const express = require("express");
const config = require("./config")
const logger = require("./logger")
const app = express();

var mongoose = require('mongoose');
var dbOption = 
    { 
        user: config.DBUser,
        pass: config.DBPassword
    };

app.get("/lightcontrol/get/", function (req, res) {
    logger.info(req);
    res.send("return");
});



mongoose.connect(config.DBURL, dbOption).then(
    () => 
    {
        logger.info("Connected to CloudWallet database.");
        app.listen(config.Port, () => logger.info("CloudWallet backend server is listening!"));
    },
    err => 
    {
        logger.error("Failed to connect to CloudWallet database. " + err);
    }
);