import express from 'express';
import fs from 'fs';
import path from 'path';
import OpenAI from 'openai';

const app = express();
const port = 3000;
const apiKey = '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'; // Ваш API ключ OpenAI

const openai = new OpenAI({ apiKey });

app.use(express.static('public'));
app.use(express.json());

app.post('/synthesize', async (req, res) => {
  const { text } = req.body;
  const speechFile = path.resolve('./public/output.mp3');

  try {
    const mp3 = await openai.audio.speech.create({
      model: 'tts-1-hd',
      voice: 'onyx',
      input: text,
    });

    const buffer = Buffer.from(await mp3.arrayBuffer());
    await fs.promises.writeFile(speechFile, buffer);

    res.json({ audioUrl: '/output.mp3' });
  } catch (error) {
    console.error('Ошибка при синтезе речи:', error);
    res.status(500).json({ error: 'Ошибка при синтезе речи' });
  }
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
