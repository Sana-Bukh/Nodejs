
import { createServer } from 'node:http'

const myServer = createServer((req, res) => {
    
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is the Home Page.');
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is the About Page.');
    }else if (req.url === '/Contact') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is the Contact Page.');
    }
  
    }
)

myServer.listen(200, () => {
    console.log( "server is listening at 200 port" )
})






 
