
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { GoogleGenAI } = require("@google/genai");

const app = express();

app.use(cors());
app.use(express.json());

if (!process.env.GEMINI_API_KEY) {
  console.error("GEMINI_API_KEY missing");
}

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

// Health check
app.get("/", (req, res) => {
  res.send("Backend running");
});

// Test route
app.get("/test", async (req, res) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "Say hello"
    });

    res.send(response.text);

  } catch (error) {
    console.error("Test Error:", error);
    res.status(500).send(error.message);
  }
});

// Main route
app.post("/api/generate", async (req, res) => {
  try {
    const prompt = req.body?.prompt;

    if (!prompt || !prompt.trim()) {
      return res.status(400).json({
        error: "Prompt required"
      });
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
Generate clean frontend UI code for:
${prompt}

Return only code.
Use React + Tailwind CSS.
No explanations.
`
    });

    if (!response.text) {
      throw new Error("Empty response from Gemini");
    }

    res.json({
      output: response.text
    });

  } catch (error) {
    console.error("Gemini Error:", error);

    res.status(500).json({
      error: error.message || "Generation failed"
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});