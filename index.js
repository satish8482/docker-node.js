const http= require('http');
var port = process.env.PORT || 8086;
const server= http.createServer((req ,res)=>{

    const data ={

        data:'hello world !',
        hostname:require('os').hostname()
    };

    res.writeHead(200,{'Content-Type':'application/json'});
    res.end(JSON.stringify(data));


});

server.listen(process.env.PORT , (err)=>{

    if(err) return console.log(err);
    console.log('Magic happens on port ' + port);
});