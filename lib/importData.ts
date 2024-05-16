import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import { Post } from './product';
import { connectDB } from './utils';


const importData = async () => {
  try {
    // Connect to the database
    await connectDB();

    // Read the data from the JSON file
    const dataPath = path.resolve(__dirname, 'data.json');
    const jsonData = fs.readFileSync(dataPath, 'utf-8');
    const blogPosts = JSON.parse(jsonData);

    // Insert data into the collection
    await Post.insertMany(blogPosts);

    console.log('Data imported successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error importing data:', error);
    process.exit(1);
  }
};

// Run the import function
importData();
