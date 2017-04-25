var common = require('../module').common;

module.exports = class Config {
    constructor() {

        /*当前站点环境*/
        this.env = 'dev';
        /** local ip */
        this.ip = common.getLocalIps()[0];

        /*站点的端口*/
        this.serverPort = 12138;

        /*域名*/
        this.domain = this.ip + ':' + this.serverPort;

    }
};