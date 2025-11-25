import express from 'express';
import dotenv from 'dotenv';
const PORT = process.env.PORT || 8000;
const app = express();

import cors from 'cors';
import connectDB from './config/db.js';
dotenv.config();

import internRoutes from './route/intern.route.js';

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Placement System Backend is running');
});

connectDB();

//Routes
app.use('/api', internRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});