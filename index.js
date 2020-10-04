var http = require('http');

//criaremos o nosso primeiro servidor 

http.createServer(function(req, res){
    res.write('ceunsp andes - Servidor node')
    res.end(); // fim de resposta

}).listen(5000);
    // o servidor ficara ouvindo na porta 5000
    