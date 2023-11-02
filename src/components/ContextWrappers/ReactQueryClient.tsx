"use client"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { ComponentProps } from 'react'

const ReactQueryClient = ({ children }: any) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>

  )
}

export default ReactQueryClient