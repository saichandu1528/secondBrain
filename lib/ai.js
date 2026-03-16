
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY || "AIzaSyBGzJkse2h6Ob_ErcmjcQYg3fBoR3PA-U4",
);

export async function generateSummary(content) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `Create a concise 1-sentence summary of this note (max 120 chars):\n\n${content.slice(0, 3000)}`;

    const result = await model.generateContent(prompt);
    const text = await result.response.text();

    return text.trim().slice(0, 120);
  } catch (error) {
    console.error("AI Summary Error:", error);

    const firstSentence = content.split(".")[0];
    return firstSentence.slice(0, 120) + "...";
  }
}

// Bonus: Smart chat responses
export function generateResponse(input) {
  const lowerInput = input.toLowerCase();

  if (lowerInput.includes("react") || lowerInput.includes("hooks")) {
    return "React hooks like useState, useEffect, useCallback manage state & lifecycle. Need specific hook examples?";
  }
  if (lowerInput.includes("async")) {
    return "`async/await` is modern JS for promises. Use in API calls: `const data = await fetch(url).then(r=>r.json())`";
  }
  if (lowerInput === "hii" || lowerInput === "hi") {
    return "👋 Hi! Ask about React, JS, Next.js, or your Second Brain features!";
  }

  return `Smart response for "${input}". Here's practical code + explanation you can use immediately.`;
}
