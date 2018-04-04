const express = require("express");
const config = require("./config")
const logger = require("./logger")
const app = express();


app.get("/lightcontrol/get/", function (req, res) {
    logger.info(req);
    res.send("return");
});

app.listen(config.Port, () => logger.info("CloudWallet backend server is listening!"));