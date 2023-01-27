import { FunctionComponent, ReactElement } from 'react'

import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

export const QueryWrapper: FunctionComponent<{ children: ReactElement<any, any> }> = ({
  children
}) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
