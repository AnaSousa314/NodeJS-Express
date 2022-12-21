module.exports = (request,response,next) => {
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
    next();
  }
