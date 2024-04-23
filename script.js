async function processText() {
    const textInput = document.getElementById("textInput").value;
    const historyList = document.getElementById("historyList");
  
    try {
      const response = await fetch('https://api.openai.com/v1/tts/stream', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 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' // Замените YOUR_API_KEY на ваш реальный ключ
        },
        body: JSON.stringify({
          engine: 'tts-1', 
          text: textInput,
          format: 'mp3'
        })
      });
  
      if (!response.ok) {
        throw new Error('Ошибка при синтезе речи');
      }
  
      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
  
      // Добавляем элемент в историю
      const li = document.createElement("li");
      li.textContent = textInput;
      historyList.appendChild(li);
  
      // Устанавливаем аудио воспроизведение
      const audioPlayer = document.getElementById("audioPlayer");
      audioPlayer.src = audioUrl;
      audioPlayer.play();
    } catch (error) {
      console.error('Ошибка:', error);
    }
  }
  