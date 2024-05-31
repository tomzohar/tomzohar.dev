const http = require('http');
http.createServer(function (req, res) {
	res.write("On the way to be a Fullstack engineer!\n I'm now connected to github remote :\)\nThis code was pushed from local dev pc");
	res.end();
}).listen(3000);

console.log('Server started on port 3000');

console.log("Another test");