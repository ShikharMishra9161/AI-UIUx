import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function OutputDisplay({ code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="relative mt-4 rounded overflow-hidden">
      {/* Copy Button */}
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 bg-gray-700 text-white px-3 py-1 text-sm rounded hover:bg-gray-600 z-10"
      >
        {copied ? "Copied!" : "Copy Code"}
      </button>

      {/* Syntax Highlighted Code */}
      <SyntaxHighlighter
        language="jsx"
        style={oneDark}
        customStyle={{
          padding: "1rem",
          margin: 0,
          fontSize: "0.85rem",
          backgroundColor: "#1e1e1e",
        }}
        wrapLongLines={true}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export default OutputDisplay;
