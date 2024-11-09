var https = require('https');
var config = require('./.screeps.json');
  var branch = config.branch;
  var email = config.email;
  var password = config.password;
  var ptr = config.ptr || false;

  var data = {
        branch: 'default',         
        modules: {
            main: 'require("hello");',
            hello: 'console.log("Hello World!");'
        }
    };
var req = https.request({
    hostname: 'screeps.com',
    port: 443,
    path: '/api/user/code',
    method: 'POST',
    auth: email + ':' + password,
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
});

req.write(JSON.stringify(data));
req.end();