const app = require('./src/app.js').default;

const PORT = 3000;

app.listen(PORT, () => {
  console.log('servidor escutando!');
});