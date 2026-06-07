import "dotenv/config";
import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI(process.env.GEMINI_API_KEY);
const analyzeResume = async (resumeText) => {


    const prompt = `
    You are an ATS resume analyzer.

        Analyze the resume and return ONLY valid JSON.

        {
        "atsScore": number,
        "summary": string,
        "strengths": [string],
        "weaknesses": [string],
        "suggestions": [string],
        "missingKeywords": [string]
        }

        Rules:
        1. atsScore must be between 0 and 100.
        2. strengths must contain at least 3 points.
        3. weaknesses must contain at least 3 points.
        4. suggestions must contain at least 5 actionable improvements.
        5. Return JSON only.
        6. Do not use markdown.

        Resume:
    ${resumeText}
    `;

    const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
    });


    // console.log("AI Response:", response.text);
    // Gemini sometimes wraps JSON in markdown
    const cleanedResponse = response.text
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

    return JSON.parse(cleanedResponse);
};
export default analyzeResume;