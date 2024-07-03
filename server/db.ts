import { MongoClient } from 'mongodb';
import dotenv from "dotenv";
let mongoURI: string;
dotenv.config();

if (process.env.MONGO_URI) {
  mongoURI = process.env.MONGO_URI;
} else {
  throw new Error('MONGO_URI environment variable is not set');
}

const client = new MongoClient(mongoURI);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

(async () => {
  await connectToDatabase();
})();

export default client;