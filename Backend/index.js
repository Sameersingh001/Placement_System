import express from 'express';
import dotenv from 'dotenv';
const PORT = process.env.PORT || 8000;
const app = express();

import cors from 'cors';
import connectDB from './config/db.js';
dotenv.config();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Placement System Backend is running');
});

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});