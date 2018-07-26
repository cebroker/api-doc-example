function deleteProfessions(req, res, next) {
  res.status(204).send('Profession successfully deleted');
}

module.exports = deleteProfessions;
