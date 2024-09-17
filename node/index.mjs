
import { createServer } from 'node:http'

const myServer = createServer((req, res) => {
    // Homepage
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is the Home Page.');
        // About
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is the About Page.');
        //Contact
    }else if (req.url === '/Contact') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is the Contact Page.');
        //
    }else if (req.url === '/Projects') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is the Project Page.');
    }// 404 Page
    else {
        res.end('404 Not Found');
    }
})

myServer.listen(200, () => {
    console.log( "server is listening at 200 port" )
})






 
