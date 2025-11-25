import express from 'express';

import { registerIntern} from '../controller/intern.controller.js';

const router = express.Router();

// Create a new intern
router.post('/register', registerIntern);

// Get all interns
// router.get('/', getAllInterns);

// // Get intern by ID
// router.get('/:id', getInternById);
// // Update intern by ID
// router.put('/:id', updateIntern);
// // Delete intern by ID
// router.delete('/:id', deleteIntern);
// router.put('/profile', updateIntern);

export default router;