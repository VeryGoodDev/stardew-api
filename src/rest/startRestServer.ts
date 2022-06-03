import { createServer } from 'http'

import { Status } from './constants'

import type { Server } from 'http'

const startServer = (port = 9000): Server => {
  const server = createServer((request, response) => {
    const headers = Object.fromEntries([[`Content-Type`, `application/json`]])
    const url = request.url ?? ``
    response.writeHead(Status.OK, headers)
    if (/^\/villagers\/(?<villager>.+)/.test(url)) {
      response.end(JSON.stringify({ name: url.replace(/^\/villagers\//, ``) }))
      return
    }
    response.end(JSON.stringify({ url: request.url }))
  })

  server.listen(port, () => {
    console.log(`Server successfully started at http://localhost:${port}`)
  })

  return server
}

export default startServer
