const http = require('http'); // Import Node.js core module
const url = require('url');
const fs = require('fs');
const path = require('path');

const server = http.createServer(function (req, res) {
let pathNameFull = req.url;
pathNameObj = url.parse(pathNameFull, true);
pathName = pathNameObj.pathname;
if (pathName === '/') {
const htmlPath = path.join(__dirname, 'page.html');
const fileStream = fs.createReadStream(htmlPath, 'UTF-8');
res.writeHead(200, { 'Content-Type': 'text/html' });
console.log(res,pathName);
fileStream.pipe(res);
}   
else if (req.url.match('[.]html$')) {
    const htmlPath = path. join(__dirname,req.url);
    const fileStream = fs.createReadStream(htmlPath, 'UTF-8');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    console.log(req.url);
    fileStream.pipe(res);
    } 
else if (req.url.match('[.]css$')) {
const cssPath = path. join(__dirname,req.url);
const fileStream = fs.createReadStream(cssPath, 'UTF-8');
res.writeHead(200, { 'Content-Type': 'text/css' });
console.log(req.url);
fileStream.pipe(res);
} 
 else {
res.writeHead(404, { 'Content-Type': 'text/html',});
res.end('<h1>Page not found</h1>');
}
});
server.listen(3002);
console.log("server on port 3002")