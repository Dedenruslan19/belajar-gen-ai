import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "API_KEY_HERE" });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Say Hi from Gemini",
  });
  console.log(response.text);
}

await main();