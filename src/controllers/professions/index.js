const createProfessions = require('./createProfessions');
const getProfessions = require('./getProfessions');
const getProfession = require('./getProfession');
const updateProfession = require('./updateProfession');
const deleteProfession = require('./deleteProfession');

const router = require('express').Router();

router
  .route('/')
  .get(getProfessions)
  .post(createProfessions);

router
  .route('/:id')
  .get(getProfession)
  .patch(updateProfession)
  .delete(deleteProfession);

module.exports = router;
