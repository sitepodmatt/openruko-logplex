var RingBuffer = require('./ringbuffer');

var version = require('./package.json').version;
console.log('Openruko logplex server v' + version);

var webServerPort = process.env.WEBPORT || 9996;
var webServer = require('./webserver').createServer({ port: webServerPort });
webServer.start();

var udpServerPort = process.env.UDPPORT || 9997;
var udpServer = require('./udpserver').createServer({ port: udpServerPort });
udpServer.start();

process.on('SIGTERM', function() {
  console.log('SIGTERM received shutting down gracefully');
  server.close();
  webServer.stop();
  console.log('Shutdown gracefully.');
});
