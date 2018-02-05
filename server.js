const Hapi = require('hapi');


const server = new Hapi.Server();

server.connection({
  port: 8080,
  host: 'localhost',
});


if (!module.parent) {
  server.start((error) => {
    if (error) {
      throw (error);
    }
    console.log('Server started at port 8080');
  });
}

module.exports = server;
