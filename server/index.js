const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();

app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post("/api/generate", async (req, res) => {
  const { prompt } = req.body;

  try {
    console.log("Request received:", prompt);

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash"
    });

    const result = await model.generateContent(
      `Generate clean frontend UI code for: ${prompt}`
    );

    const response = await result.response;
    const output = response.text();

    res.json({ output });

  } catch (error) {
    console.error("Gemini Error:", error.message);
    res.status(500).json({
      error: "Failed to generate response"
    });
  }
});

app.get("/", (req, res) => {
  res.send("Backend running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});