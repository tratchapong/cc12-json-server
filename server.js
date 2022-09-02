const jsonServer = require('json-server')
const server = jsonServer.create()
const db = require('./db')
const router = jsonServer.router(db)
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.bodyParser)

server.get('/echo', (req, res) => {
  res.jsonp(req.query)
})

// add any custom middleware 
server.post('/category',(req, res, next) => {
  console.log(555)
  req.body.createdAt = Date.now()
  next()
})

server.use(router)

server.listen(8080, () => {
  console.log('JSON Server is running')
})