function getProfession(req, res, next) {
  res.status(200).json({ id: 1, name: 'profession 1' });
}

module.exports = getProfession;
