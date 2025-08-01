import { useState } from "react";

function PromptInput({ onGenerate }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate(input);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full p-2 border rounded"
        rows={4}
        placeholder="Describe the UI component you want..."
      />
      <button
        type="submit"
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Generate
      </button>
    </form>
  );
}

export default PromptInput;
