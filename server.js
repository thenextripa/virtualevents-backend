const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/api/events', (req, res) => {
  res.json([
    { title: 'Evento 1', description: 'Descrizione evento 1' },
    { title: 'Evento 2', description: 'Descrizione evento 2' }
  ]);
});

app.get('/', (req, res) => {
  res.send('Backend VirtualEvents è attivo!');
});

app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});
