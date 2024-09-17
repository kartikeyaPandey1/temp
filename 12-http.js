const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('welcome to our page');
    }
    if(req.url==='/about'){
        res.end('here is our short history')
    }
    res.end(`
        <h1> Oops not loaded</h1>
        <p>can't seem to find the page you are looking for</p>

        
        `)
})

server.listen(5000);