/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useState, ReactNode, ReactElement } from 'react';
import createCache from '@emotion/cache';
import { useServerInsertedHTML } from 'next/navigation';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

interface ThemeRegistryProps {
  options: any;
  children: ReactElement | ReactNode;
}

export default function ThemeRegistry(props: ThemeRegistryProps) {
  const { options, children } = props;

  const [{ cache, flush }] = useState(() => {
    const cacheResult = createCache(options);
    cacheResult.compat = true;
    const prevInsert = cacheResult.insert;
    let inserted: string[] = [];
    cacheResult.insert = (...args) => {
      const serialized = args[1];
      if (cacheResult.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };
    const flushResult = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache: cacheResult, flush: flushResult };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) {
      return null;
    }
    let styles = '';
    for (const name of names) {
      styles += cache.inserted[name];
    }
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
