'use client';

import { Global } from '@emotion/react';
import globalStyles from './globals';

export default function GlobalStyles() {
  return <Global styles={globalStyles} />;
}