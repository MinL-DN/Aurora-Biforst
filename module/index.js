var fs = require('fs');
var path = require('path');

var obj = {};
var fileList = fs.readdirSync(path.join(__dirname, './'));

fileList.map((v, i) => {
    if(v != 'index.js') obj[v.replace(/\.js$/, '')] = require('./' + v);
});

module.exports = obj;