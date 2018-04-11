var path = require('path');
var root = path.dirname(require.main.filename);

const common = {
    /* ****************** Values to be changed apon deployment ************************ */
    ConfigPath: root + '/Config/config.json',
    LogPath: root + '/Log/CloudWallet.log'
    /* ******************************************************************************** */
};

module.exports = common;