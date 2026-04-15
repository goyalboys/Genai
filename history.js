import { GoogleGenAI } from "@google/genai";
import readlineSync from 'readline-sync';
import "dotenv/config";

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GEMINI_API_KEY });

 const chat = ai.chats.create({
    model: "gemini-2.0-flash",
    history:[],
})


async function main(){
   
   const userProblem = readlineSync.question("Ask me anything--> ");
    const response = await chat.sendMessage({
    message: userProblem,
   });
   
   console.log(response.text);
   main();
}


main();