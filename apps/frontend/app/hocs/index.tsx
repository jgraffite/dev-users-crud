import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react';
  
const queryClient = new QueryClient();

interface AppReactQueryContextProps {
    children: React.ReactNode;
}

const AppReactQueryContext: React.FC<AppReactQueryContextProps> = ({children}) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

export default AppReactQueryContext;