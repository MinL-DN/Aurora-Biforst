var env = process.env.aurora || 'dev';
var config = require(`./config.${env}.js`);

module.exports = new config();