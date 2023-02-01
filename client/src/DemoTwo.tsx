import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { httpBatchLink } from '@trpc/client'
import { useState } from 'react'
import { createTRPCReact } from '@trpc/react-query'
import { AppRouter } from '@examples/minimal-react-server'

export const trpc = createTRPCReact<AppRouter>()

const Greeting = () => {
  const greeting = trpc.getGreeting.useQuery('Sibe Siech')
  return <div>{greeting.data}</div>
}

export const DemoTwo = () => {
  const [queryClient] = useState(() => new QueryClient())
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:3000',
        }),
      ],
    })
  )
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Greeting />
      </QueryClientProvider>
    </trpc.Provider>
  )
}
