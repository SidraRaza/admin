import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'qqxycy13',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'productions',
  apiVersion: '2025-01-10', 
  useCdn: true,
  
});
console.log(process.env.NEXT_PUBLIC_SANITY_DATASET);
console.log(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
console.log(process.env.SANITY_API_TOKEN);




