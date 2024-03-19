// Student Name: Sharath Payili
// Student ID: 1225905683
// Date: 02/18/2024


const { MongoClient } = require('mongodb');
const url = 'mongodb+srv://spayiliraspberrypi:admin1234@spayili-mdw-cluster-1.xu0un4j.mongodb.net/?retryWrites=true&w=majority'; // MongoDB server URL
const dbName = 'prac';
const collectionName = 'shopping';
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

const connectToDatabase = async (req, res, next) => {
  try {
    await client.connect();
    req.dbClient = client;
    req.db = client.db(dbName);
    req.collection = req.db.collection(collectionName);
    next();
  } catch (error) {
    res.status(500).json({ message: 'Database connection failed' });
  }
};

module.exports = connectToDatabase;
