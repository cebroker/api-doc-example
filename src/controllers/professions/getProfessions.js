function getProfessions(req, res, next) {
  res
    .status(200)
    .json([
      { id: 1, name: 'profession 1', state: 'FL' },
      { id: 2, name: 'profession 2', state: 'FL' }
    ]);
}

module.exports = getProfessions;
