const app = require('./app');

const { PORT = 3000 } = process.env;

app.listen(PORT, () => {
  console.log(`Example API running on port ${PORT}`);
});

process.on('SIGINT', function() {
  console.log('Caught interrupt signal');
  process.exit();
});
