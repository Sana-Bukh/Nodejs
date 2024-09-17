
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
        //404page
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
})

myServer.listen(200, () => {
    console.log( "server is listening at 200 port" )
})






 
