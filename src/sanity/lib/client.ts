import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'qqxycy13',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2025-01-10', 
  useCdn: false,
  token: process.env.SANITY_API_TOKEN || 'skLfR6sPB8tpFeq2RZdY1rYDlacvOF5LVZniZHGtuuNhXQiKtXmilvDfmJ2Hlg982VpeB7QURG4p1WZQktcvpSjcSJO9IobzqBaPK8j8oNDYlxS5QXSfhdeKrFmDdO3KRHH1yk212lrtU0N0GyzEDeADhwXGyRF6mp30z2ExiertuQvR8mbT',  
});

