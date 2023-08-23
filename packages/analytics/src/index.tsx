'use client';

import React from 'react';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';

export function Analytics() {
  return <VercelAnalytics debug={false} />;
}
