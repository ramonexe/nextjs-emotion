'use client';

import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { useServerInsertedHTML } from 'next/navigation';
import { useState } from 'react';

export default function EmotionRegistry({
  children
}: {
  children: React.ReactNode;
}) {
  const [cache] = useState(() => {
    return createCache({ key: 'emotion-cache' });
  });

  useServerInsertedHTML(() => {
    const names = Object.keys(cache.inserted);
    if (names.length === 0) return null;
    
    return (
      <style
        data-emotion={`${cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{
          __html: Object.values(cache.inserted).join(' ')
        }}
      />
    );
  });

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}