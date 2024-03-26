class TextToVoice {
    constructor(language) {
        this.language = language;
    }

    convertToSpeech(text) {
        // Логіка перетворення тексту в мовлення з використанням обраної мови
        return `Speech output for "${text}" in ${this.language} language`;
    }
}

module.exports = TextToVoice;