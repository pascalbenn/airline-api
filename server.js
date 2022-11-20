// import the code from the npm library called json-server
const jsonServer = require('json-server');

// create a server object to configure with later commands
const server = jsonServer.create();

// tell the server to use the db.json as the data source
const router = jsonServer.router('db.json');

// fetch normal default settings from json server package of code
const middlewares = jsonServer.defaults();

// define which port to listen on, defaulting to 3000 in the 
// absense of an explicit number defined inside $PORT
const port = process.env.PORT ||3000;

// set up our servver to use the middleware defaults from line 11
server.use(middlewares);

// set up our server to use the data deifned in line 8
server.use(router);


// run our server, listening on the port number defined in line 15
server.listen(port);
