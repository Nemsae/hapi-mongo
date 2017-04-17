'use strict'

const Hapi = require('hapi')

//  Server definition
const server = new Hapi.Server
server.connection({
  host: 'localhost',
  port: 3000
})

//  routes
server.route({
  method: 'GET',
  path: '/books',
  handlers: function (request, reply) {
    return reply('Books will be shown here')
  }
})

server.start((err) => {

  if (err) throw err
  console.log('Server running at port ', server.info.uri)
})
