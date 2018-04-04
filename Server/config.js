var fs = require("fs")
const common = require("./common")
const logger = require("./logger")

var config = {
    LogLevel: 0,
    Port: 10000,
    DBURL: "",
}

var cfgContent;

if (fs.existsSync(common.ConfigPath)) {
    cfgFile = fs.readFileSync(common.ConfigPath);
    cfgContent = JSON.parse(cfgFile);
} else {
    fs.writeFileSync(common.ConfigPath, JSON.stringify(config));
}

// loading variables
config = cfgContent

module.exports = config;