module.exports = {
  http: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 8081,
  },
  logger: {
    name: 'dummy-api',
    level: 'debug',
  },
}
