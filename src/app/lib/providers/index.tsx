'use client'

import { ApolloProvider } from '@apollo/client'
import client from '../configs/apolloClient'
import { UiProvider } from './UiProvider'

export function Providers({ children }: { children: React.ReactNode }) {
  const providers = [UiProvider]

  return (
    <ApolloProvider client={client}>
      <ComposeProviders providers={providers}>{children}</ComposeProviders>
    </ApolloProvider>
  )
}

function ComposeProviders({ providers, children }: { providers: React.FC<{ children: React.ReactNode }>[]; children: React.ReactNode }) {
  return providers.reduceRight((acc, Provider) => {
    return <Provider>{acc}</Provider>
  }, children)
}
