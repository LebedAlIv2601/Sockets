var s = require('net').Socket();
s.connect(8080);
s.write('IDI-KA OTSYUDA NAHER!')
s.end()