const config = require('config')
const { createLogger } = require('bunyan')

const app = require('express')()
const httpServer = require('http').createServer(app)

const {
  http,
  logger,
} = config

const log = createLogger(logger)

app.get('/', (req, res) => {
  res.send('OK')
})

app.get('/headers', (req, res) => {
  const results = req.headers

  log.debug({ results }, '/headers')

  res.send(results)
})

app.post('/body', (req, res) => {
  const results = req.body

  log.debug({ results }, '/body')

  res.send(results)
})

app.get('/query', (req, res) => {
  const results = req.query

  log.debug({ results }, '/query')

  res.send(results)
})

app.get('/meta', (req, res) => {
  const {
    ip,
    ips,
    cookies,
    baseUrl,
    method,
    originalUrl,
    params,
    path,
    protocol,
    route,
    secure,
    subdomains,
    xhr,
  } = req

  const results = {
    ip,
    ips,
    cookies,
    baseUrl,
    method,
    originalUrl,
    params,
    path,
    protocol,
    route,
    secure,
    subdomains,
    xhr,
  }

  log.debug({ results }, '/meta')

  res.send(results)
})

httpServer.listen(http.port, http.host, () => {
  log.info(config)
  log.info('listening...')
})
