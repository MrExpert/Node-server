var http = require ('http');
var inDex = require ('./index.html');

http.createServer(onRequest).listen(8888);
console.log('Server is runnning');
inDex.readFile('index.html',function (){

function onRequest(request, response) {
    console.log('User request coming' + request.url);
    response.writeHead('200', {'Content-Type': 'text/plain'});
    response.write(inDex);
    response.end();
  } 
})