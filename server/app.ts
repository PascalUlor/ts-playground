import http from 'http';

console.log('>>>>>> App running')
const server = http.createServer((req, res) => { 
    console.log('req url' + req.url)
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, POST, GET, PUT, DELETE',
        'Access-Control-Max-Age': 2592000, // 30 days,
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        /** add other headers as per requirement */
      };
    
      if (req.method === 'OPTIONS') {
        res.writeHead(204, headers);
        res.end();
        return;
      }
    
      if (['GET', 'POST'].indexOf(`${req.method}`) > -1) {
        res.writeHead(200, headers);
        res.end('~From Node Backend Built with TypeScript');
        return;
      }
    res.writeHead(405, headers);
    res.end(`${req.method} is not allowed for the request.`);
})


const port = 4000
server.listen(port, 'localhost', ()=> console.log(`App running on port ${port}`));