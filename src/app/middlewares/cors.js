module.exports = (request,response,next) => {
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
    response.setHeader('Access-Control-Allow-Methods', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    // response.setHeader('Access-Control-Allow-Headers', 'x-app-id');
    // response.setHeader('Access-Control-Allow-Methods', 'GET, DELETE');
    next();
  }

  // Header é case INSENSITIVE