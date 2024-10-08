import http from 'http';
//server setup
const server = http.createServer((req, res) => {
const { method, url } = req;
const parsedUrl = new URL(url, `http://${req.headers.host}`);

// Set JSON response header
res.setHeader('Content-Type', 'application/json');

// GET Request
if (method === 'GET' && parsedUrl.pathname === '/api/items') {
    res.statusCode = 200;
    res.end(JSON.stringify({ message: 'GET request - Fetching all items' }));

// POST Request
} else if (method === 'POST' && parsedUrl.pathname === '/api/items') {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        const newItem = JSON.parse(body);
        res.statusCode = 201;
        res.end(JSON.stringify({ message: `POST request - Adding new item`, data: newItem }));
    });

// PUT Request
} else if (method === 'PUT' && parsedUrl.pathname.startsWith('/api/items/')) {
let body = '';
const itemId = parsedUrl.pathname.split('/').pop();
req.on('data', chunk => {
  body += chunk.toString();
});
req.on('end', () => {
  const updatedItem = JSON.parse(body);
  res.statusCode = 200;
  res.end(JSON.stringify({ message: `PUT request - Updating item ${itemId}`, data: updatedItem }));
});

// DELETE Request
} else if (method === 'DELETE' && parsedUrl.pathname.startsWith('/api/items/')) {
    const itemId = parsedUrl.pathname.split('/').pop();
    res.statusCode = 200;
    res.end(JSON.stringify({ message: `DELETE request - Deleting item ${itemId}` }));

// Handle 404 Not Found
} else {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'Route not found' }));
}
});

const PORT = 3000;
server.listen(PORT, () => {
console.log(`Server running on http://localhost:${PORT}`);
});