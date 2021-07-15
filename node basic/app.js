//const http = require('http');
//const fs = require('fs');
import http from 'http';
import fs from 'fs';
import { User, role } from './User.js';
import Button from './Button.js';

const user1 = new User('ragib', '12345');

const createclick = () => { return `alert('this is create button')` };

const updateclick = () => { return `alert('this is update button')` };


const server = http.createServer(function (req, res) {
    console.log('http server working...');
    console.log(req.url);
    console.log(req.method);
    if (req.url == '/home') {
        res.write(`<h1> hello ${user1.name} from server home ${role} and id is ${user1.id}</h1> <br>`);
        res.write(`<h1> You can ${Button('create', createclick)} user and also  ${Button('update', updateclick)} User </h1>`);
        res.end();
    }

    if (req.url == '/login') {
        //res.writeHead(200, { 'content-type': 'text/html' });
        //res.write('<h5>  hello from login page </h5>');
        //res.end();
        fs.createReadStream('login.html').pipe(res);
    }

    /* res.write('hello from server');
    res.end();*/

});

server.listen(500);
console.log("server started at port 500");