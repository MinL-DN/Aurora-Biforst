var app = require('koa')();
var views = require('koa-views');
var onerror = require('koa-onerror');
var compose = require('koa-compose');
var routers = require('koa-router');

var config = require('./config');

// error handler
onerror(app);

// global middlewares
app.use(compose([
    // 视图
    views('views', {
        root: __dirname + '/views',
        default: 'jade'
    }),
    require('koa-bodyparser')(),
    require('koa-json')(),
    require('koa-logger')(),
    // 输出
    function *(next){
        var start = new Date;
        yield next;
        var ms = new Date - start;
        console.log('%s %s - %s', this.method, this.url, ms);
    },
    // 静态文件
    require('koa-static')(__dirname + '/public'),
    // router
]));

var index = require('./routes/index');
var users = require('./routes/users');

// routes definition
app.use(index.routes(), index.allowedMethods());
app.use(users.routes(), users.allowedMethods());

module.exports = app;
