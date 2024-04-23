CREATE TABLE TextToSpeechHistory (
    history_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES Users(user_id),
    text TEXT NOT NULL,
    audio_file_path VARCHAR(255) NOT NULL,
    conversion_datetime TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);