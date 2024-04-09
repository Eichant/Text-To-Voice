const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Функція для конвертації тексту в мовлення (в цьому прикладі просто мокована функція)
function convertToSpeech(text, language) {
    // Ваша логіка конвертації тексту в мовлення
    return `Speech output for "${text}" in ${language} language`;
}

// Маршрут для конвертації тексту в мовлення
app.post('/api/text-to-speech/convert', (req, res) => {
    const { text, language } = req.body;
    const speech = convertToSpeech(text, language);
    res.send(speech);
});

const port = 3001;
app.listen(port, () => console.log(`Text-to-Speech Service listening at http://localhost:${port}`));
