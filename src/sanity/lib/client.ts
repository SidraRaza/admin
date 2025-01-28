import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID  ,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET  ,
  apiVersion: '2025-01-10', 
  useCdn: true,
  
});




