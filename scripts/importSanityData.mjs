import { createClient } from '@sanity/client';
import axios from 'axios';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

// Load environment variables from .env.local
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// Create Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2021-08-31',
});

// Function to upload an image to Sanity
async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data);
    const asset = await client.assets.upload('image', buffer, {
      filename: imageUrl.split('/').pop(),
    });
    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error('Failed to upload image:', imageUrl, error);
    return null;
  }
}

// Function to import data from API and upload to Sanity
async function importData() {
  try {
    console.log('Fetching products from API...');
    const response = await axios.get('https://677d48094496848554c9e6f3.mockapi.io/test');
    const products = response.data;
    
    
    console.log(`Fetched ${products.length} products`);

    for (const product of products) {
      console.log(`Processing product: ${product.title}`);

      // Upload image to Sanity
      let imageRef = null;
      if (product.image) {
        imageRef = await uploadImageToSanity(product.image);
      }
     
      // Map product to Sanity schema
      const sanityProduct = {
        _type: 'product',
        id: product.id, // Map 'id'
        title: product.title, // Map 'title'
        description: product.description, // Map 'description'
        price1: product.price, // Map 'price1'
        price2: product.discountedPrice || product.price, // Map 'price2' (fallback to price if discountedPrice is unavailable)
        image: imageRef
          ? {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: imageRef,
              },
            }
          : undefined, // Include image if available
      };


      console.log('Uploading product to Sanity:', sanityProduct.title);
      const result = await client.create(sanityProduct);
      console.log(`Product uploaded successfully: ${result._id}`);
    }

    console.log('Data import completed successfully!');
  } catch (error) {
    console.error('Error importing data:', error);
  }
}

// Run the import function
importData();
