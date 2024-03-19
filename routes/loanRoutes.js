// Student Name: Sharath Payili
// Student ID: 1225905683
// Date: 02/18/2024

const express = require('express');
const { router } = express.Router();

// Middleware for database connection
const connectToDatabase = require('../middleware/db');

router.get('/test', (req, res) => {
    res.send('Hello World!');
})

// GET all loans
router.get('/loans', connectToDatabase, async (req, res) => {
  try {
    const loans = await req.collection.find({}).toArray();
    res.status(200).json(loans);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching loans' });
  }
});

function findLoanData(query) {
    try {
    client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const loanData = collection.findOne(query);
    console.log(loanData);
    return loanData;
    } finally {
    client.close();
    }
    }

// POST a new loan
router.post('/loans', connectToDatabase, async (req, res) => {
  try {
    const newLoan = req.body;
    await req.collection.insertOne(newLoan);
    res.status(201).json({ message: 'Loan created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating loan' });
  }
});

// PUT (update) an existing loan
router.put('/loans/:id', connectToDatabase, async (req, res) => {
  try {
    const loanId = req.params.id;
    const updatedLoan = req.body;
    await req.collection.updateOne({ _id: loanId }, { $set: updatedLoan });
    res.status(200).json({ message: 'Loan updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating loan' });
  }
});

// DELETE a loan
router.delete('/loans/:id', connectToDatabase, async (req, res) => {
  try {
    const loanId = req.params.id;
    await req.collection.deleteOne({ _id: loanId });
    res.status(200).json({ message: 'Loan deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting loan' });
  }
});

module.exports = router;
