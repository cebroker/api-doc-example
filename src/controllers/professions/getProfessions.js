function getProfessions(req, res, next) {
  res.status(200).json({ response: 'Get professions' });
}

module.exports = getProfessions;
