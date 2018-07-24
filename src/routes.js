const express = require('express');
const router = express.Router();
const professions = require('./controllers/professions');

router.get('/', (req, res, next) => {
  res.status(200).json({ response: 'Example API' });
});

router.use('/professions', professions);

module.exports = router;
