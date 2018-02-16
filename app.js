const  http = require('http');
const fs = require('fs');
const log4js = require('log4js');

const logger = log4js.getLogger(); 
logger.level = 'debug';

http. createServer((request, response) =>{
    logger.info('Conexion a la app');
    fs.readFile('./index.html', (err, html) =>{
        if(err){
          logger.warn("Kaboooom!!!");
          response.writeHead(404, {'Content-Type': 'text/html'});
          response.write("404 - Not Found");  
          response.end();
        } 
        else{
          logger.info("202 - Ok");
          response.write(html);   
          response.end();
        } 
    });
    
}).listen(4000);

