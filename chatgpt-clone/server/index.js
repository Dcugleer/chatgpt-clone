const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/api/chat', async (req, res) => {
  const { message, systemPrompt } = req.body;
  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: systemPrompt || "Você é um assistente útil." },
        { role: "user", content: message }
      ]
    }, {
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    res.json({ reply: response.data.choices[0].message.content });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).send('Erro ao consultar o modelo');
  }
});

app.listen(5000, () => console.log('Servidor rodando na porta 5000'));
