import http from 'http'
import { initTRPC } from '@trpc/server'
import { createHTTPHandler } from '@trpc/server/adapters/standalone'
import { z } from 'zod'

const trpc = initTRPC.create()
const publicProcedure = trpc.procedure
const router = trpc.router

const appRouter = router({
  getGreeting: publicProcedure.input(z.string()).query(({ input }) => {
    return `Hello ${input}!`
  }),
})

export type AppRouter = typeof appRouter

const handler = createHTTPHandler({
  router: appRouter,
  createContext() {
    return {}
  },
})

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Request-Method', '*')
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET')
  res.setHeader('Access-Control-Allow-Headers', '*')
  if (req.method === 'OPTIONS') {
    res.writeHead(200)
    return res.end()
  }
  handler(req, res)
})

server.listen(3000)
