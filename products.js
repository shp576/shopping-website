/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'mark-it';
const collection = 'NEW_COLLECTION_NAME';

// The current database to use.
use(database);

// Create a new collection.
db.createCollection(collection);

try {
    await client.connect();
    console.log('Connected to the database');

    const database = client.db();
    const productsCollection = database.collection('products');

    // Insert a single document
    const result = await productsCollection.insertOne(productData);

    console.log(`Product inserted with ID: ${result.insertedId}`);
  } catch (error) {
    console.error('Error adding product to the database', error);
  } finally {
    await client.close();
    console.log('Connection closed');
  }


// Example product data
const sampleProduct = {
  name: 'iphone',
  description: 'brand new iphone',
  price: 29.99,
  category: 'Electronics',
};

// Call the function to add the product to the database
addProduct(sampleProduct);
