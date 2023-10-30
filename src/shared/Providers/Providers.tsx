/* eslint-disable import/no-extraneous-dependencies */
'use client';
import { FC, PropsWithChildren, useState } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';

// https://github.com/wpcodevo/nextjs13-react-query/blob/main/src/app/hydration/page.tsx

const Providers: FC<PropsWithChildren> = ({ children }) => {
  const [client] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={client}>
      <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default Providers;
