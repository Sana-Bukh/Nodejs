
import { createServer } from 'node:http'

const myServer = createServer((req, res) => {
    
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is the Home Page.');
    } 
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
})

myServer.listen(200, () => {
    console.log( "server is listening at 200 port" )
})






 
