import { useEffect, useState } from 'react'
import { httpBatchLink } from '@trpc/client'
import { createTRPCProxyClient } from '@trpc/react-query'

import { AppRouter } from '@examples/minimal-react-server'
export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000',
    }),
  ],
})

export const DemoSimple = () => {
  const [greeting, setGreeting] = useState('')

  useEffect(() => {
    trpc.getGreeting
      .query('Siebe Siech')
      .then(response => setGreeting(response))
  }, [])

  return <h1>{greeting}</h1>
}
