const winston = require("winston");
const common = require("./common")
require('winston-daily-rotate-file');
const tsFormat = () => (new Date()).toLocaleTimeString();

var logger = new(winston.Logger)({
    transports: [
        // colorize the output to the console
        new(winston.transports.Console)({
            timestamp: tsFormat,
            colorize: true,
            level: 'info'
        }),
        
        new(winston.transports.DailyRotateFile)({
            filename: common.LogPath,
            datePattern: 'yyyy-MM-dd.',
            prepend: true,
            level: process.env.ENV === 'development' ? 'debug' : 'info'
        })/*
        new (winston.transports.File)({
            filename: common.LogPath,
            timestamp: tsFormat,
            level: process.env.ENV === 'development' ? 'debug' : 'info'
          })*/
    ]
});

module.exports = logger;