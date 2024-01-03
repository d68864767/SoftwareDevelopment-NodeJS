```javascript
const axios = require('axios');
const openai = require('openai');

openai.apiKey = 'your-api-key';

const prompt = 'Translate the following English text to French: "{text}"';
const maxTokens = 60;

async function translateText(text) {
    try {
        const response = await openai.Completion.create({
            engine: 'davinci-codex',
            prompt: prompt.replace('{text}', text),
            max_tokens: maxTokens
        });

        if (response && response.choices && response.choices.length > 0 && response.choices[0].text) {
            return response.choices[0].text.trim();
        } else {
            throw new Error('Failed to generate translation');
        }
    } catch (error) {
        console.error(`Failed to translate text: ${error}`);
        throw error;
    }
}

module.exports = {
    translateText
};
```
