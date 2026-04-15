import { GoogleGenAI } from "@google/genai";
import 'dotenv/config';
import readlineSync from 'readline-sync';

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function main() {
    const conversation = [];
    while(true){
        var userMessage = readlineSync.question('You: ');
        conversation.push({ role: "user", text: userMessage });
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: conversation
        });
        conversation.push({ role: "assistant", text: response.text });
        console.log("Assistant: " + response.text);
    }
}

main();