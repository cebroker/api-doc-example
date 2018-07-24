const createProfessions = require('./createProfessions');
const deleteProfessions = require('./deleteProfessions');
const getProfessions = require('./getProfessions');
const updateProfessions = require('./updateProfessions');

const router = require('express').Router();

router
  .route('/')
  .get(getProfessions)
  .post(createProfessions)
  .put(updateProfessions)
  .delete(deleteProfessions);

module.exports = router;
