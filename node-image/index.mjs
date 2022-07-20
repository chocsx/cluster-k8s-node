import { createServer } from 'node:http'

const server = createServer(({r, rs}) => {
  rs.writeHead(200, { 'Content-Type': 'text/plain' })
  rs.end('hello')
})

server.listen(process.env.PORT || 3000, () => 
  console.log(`Server is running on port ${process.env.PORT || 3000}`))
