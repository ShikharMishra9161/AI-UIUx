import axios from "axios";
import { useState } from "react";
import PromptInput from "./Components/PromptInput";
import OutputDisplay from "./Components/OutputDisplay";
                                                       
function App() {
  const [generatedCode, setGeneratedCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (prompt) => {
    if (!prompt.trim()) {
      setGeneratedCode("// Please enter a prompt.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("https://ai-uiux-backend.onrender.com/api/generate", {
        prompt: prompt,
      });
      setGeneratedCode(response.data.output);
    } catch (error) {
      console.error("Frontend Error:", error.message);
      setGeneratedCode("// Error generating code. Please try again.");
    }
    setLoading(false);
  };

  // Sample templates
  const templates = [
    "Login page with dark mode",
    "E-commerce product card",
    "Responsive navbar with icons",
    "Dashboard UI with sidebar",
    "Profile card with avatar and bio"
  ];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">AI UI Generator</h1>

      {/* Template Buttons */}
      <div className="flex flex-wrap gap-2 justify-center mb-4">
        {templates.map((template, index) => (
          <button
            key={index}
            className="bg-gray-200 text-gray-800 px-3 py-1 rounded hover:bg-gray-300 transition"
            onClick={() => handleGenerate(template)}
          >
            {template}
          </button>
        ))}
      </div>

      {/* Prompt Input */}
      <PromptInput onGenerate={handleGenerate} />

      {/* Output Display */}
      {loading ? (
        <div className="text-center mt-6 text-blue-500 font-semibold">Generating...</div>
      ) : (
        <OutputDisplay code={generatedCode} />
      )}
    </div>
  );
}

export default App;


