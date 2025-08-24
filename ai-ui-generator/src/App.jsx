import axios from "axios";
import { useState, useRef } from "react";
import PromptInput from "./Components/PromptInput";
import OutputDisplay from "./Components/OutputDisplay";

function App() {
  const [generatedCode, setGeneratedCode] = useState("");
  const [loading, setLoading] = useState(false);
  const outputRef = useRef(null); // for scroll-to-output

  const handleGenerate = async (prompt) => {
    if (!prompt.trim()) {
      setGeneratedCode("// ⚠️ Please enter a prompt.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("https://ai-uiux-backend.onrender.com/api/generate", {
        prompt,
      });
      setGeneratedCode(response.data.output);
      setTimeout(() => {
        outputRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100); // ensures scroll after render
    } catch (error) {
      console.error("Frontend Error:", error.message);
      setGeneratedCode("// Error generating code. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const templates = [
    "Login page with dark mode",
    "E-commerce product card",
    "Responsive navbar with icons",
    "Dashboard UI with sidebar",
    "Profile card with avatar and bio",
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 text-center">🪄 AI UI Generator</h1>

      {/* Suggestions Section */}
      <div className="mb-4">
        <p className="font-semibold mb-2 text-center">💡 Try These Prompts:</p>
        <div className="flex flex-wrap gap-2 justify-center">
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
      </div>

      {/* Prompt Input Section */}
      <p className="font-semibold mb-2 text-center">📝 Describe the UI component you want:</p>
      <PromptInput onGenerate={handleGenerate} />

      {/* Output Section */}
      <div ref={outputRef}>
        {loading ? (
          <div className="text-center mt-6 text-blue-500 font-semibold">⏳ Generating...</div>
        ) : (
          <>
            {generatedCode && (
              <>
                <p className="font-semibold mt-6 mb-2 text-center">📄 Generated Code:</p>
                <OutputDisplay code={generatedCode} />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
