const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/api/events', (req, res) => {
  res.json([
    {
      title: "Evento di Test 1",
      description: "Questo è un evento dimostrativo."
    },
    {
      title: "Evento di Test 2",
      description: "Un altro evento di prova con dati statici."
    }
  ]);
});

app.listen(port, () => {
  console.log(`Server in ascolto su http://localhost:${port}`);
});
