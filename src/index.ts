import { createServer } from 'http'

const PORT = 9000

const Status = {
  // eslint-disable-next-line id-length -- Actual name of HTTP response code
  OK: 200,
} as const

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

server.listen(PORT, () => {
  console.log(`Server successfully started at http://localhost:${PORT}`)
})
