const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter A Message</title></head>');
        res.write('<body>');
        res.write('<form action="/message" method="POST">');
        res.write('<input type="text" name="message">');
        res.write('<button type="submit">Send</button>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    } else {
        console.log(req.url, req.method, req.headers);
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body><h1>Test response</h1></body>');
        res.write('</html>');
        res.end();
    }
});

server.listen(80);