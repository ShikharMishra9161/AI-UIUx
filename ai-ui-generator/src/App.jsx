
import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  Wand2,
  Sparkles,
  Copy,
  Download,
  LayoutDashboard,
  History,
  FileCode2,
  Moon,
  Send,
  Eye
} from "lucide-react";

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState("code");

  const API_URL =
    process.env.REACT_APP_API_URL ||
    "http://localhost:5000";

  const [generated, setGenerated] = useState(
`// Generated React component will appear here
function ProductCard(){
 return(
   <div className="rounded-2xl shadow p-6">
     <h2>Product</h2>
   </div>
 )
}`
  );

  const examples = [
    "SaaS analytics dashboard",
    "Modern pricing section",
    "Admin panel with charts",
    "Login page with dark mode"
  ];

  // REAL API CALL
  const fakeGenerate = async (value) => {
    const p = value || prompt;

    if (!p.trim()) return;

    setLoading(true);

    try {
      const response = await axios.post(
        `${API_URL}/api/generate`,
        {
          prompt: p
        }
      );

      setGenerated(
        response.data.output ||
        "// No code returned."
      );

    } catch (error) {

      console.error(
        "Frontend Error:",
        error.response?.data || error.message
      );

      setGenerated(
        "// Error generating code."
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="grid md:grid-cols-[260px_1fr] min-h-screen">

        {/* Sidebar */}
        <aside className="border-r border-white/10 p-5 bg-slate-900/70 backdrop-blur-xl">

          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 shadow-xl">
              <Wand2 />
            </div>

            <div>
              <h2 className="font-bold text-lg">
                AI UI Generator
              </h2>

              <p className="text-xs text-slate-400">
                Prompt to production UI
              </p>
            </div>
          </div>

          <nav className="space-y-3">
            {[
              ["Templates", LayoutDashboard],
              ["History", History],
              ["Exports", FileCode2]
            ].map(([label, Icon]) => (
              <button
                key={label}
                className="w-full flex items-center gap-3 p-4 rounded-2xl bg-white/5 hover:bg-white/10"
              >
                <Icon size={18}/>
                <span>{label}</span>
              </button>
            ))}
          </nav>

          <div className="mt-8 p-5 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/10 border border-white/10 shadow-2xl">
            <p className="text-sm font-semibold">
              Recent Generations
            </p>

            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <div className="p-3 rounded-xl bg-white/5">
                Login UI
              </div>

              <div className="p-3 rounded-xl bg-white/5">
                Ecommerce Card
              </div>

              <div className="p-3 rounded-xl bg-white/5">
                Admin Dashboard
              </div>
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="p-6 md:p-10">

          {/* Hero */}
          <motion.div
            initial={{opacity:0,y:20}}
            animate={{opacity:1,y:0}}
            className="rounded-[32px] p-8 border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 shadow-2xl"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">

              <div>
                <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-white via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                  Generate Production-Ready UI with AI
                </h1>

                <p className="mt-4 text-slate-300 max-w-2xl">
                  Describe components, screens, or dashboards and generate React + Tailwind code instantly.
                </p>
              </div>

              <button className="px-5 py-3 rounded-2xl bg-white/10 border border-white/10 flex gap-2">
                <Moon size={18}/>
                Dark Mode
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-8">
              {[
                ["AI-Powered Code Generation","Generate components from prompts"],
                ["Instant UI Prototyping","Preview ideas in seconds"],
                ["React + Tailwind Export","Developer-ready output"]
              ].map(([title,desc])=>(
                <div
                  key={title}
                  className="p-6 rounded-3xl bg-white/5 border border-white/10"
                >
                  <Sparkles className="mb-3"/>

                  <h3 className="font-bold text-lg">
                    {title}
                  </h3>

                  <p className="text-slate-400 mt-2 text-sm">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Prompt Box */}
          <section className="mt-8 rounded-[28px] p-6 border border-white/10 bg-slate-900">

            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">
                Prompt Generator
              </h2>

              <button className="px-4 py-2 rounded-xl bg-indigo-500 flex gap-2">
                <Sparkles size={16}/>
                Improve Prompt
              </button>
            </div>

            <textarea
              value={prompt}
              onChange={(e)=>setPrompt(e.target.value)}
              placeholder="Describe the UI you want..."
              className="w-full h-36 p-5 rounded-3xl bg-slate-800 border border-white/10"
            />

            <div className="mt-4 flex flex-wrap gap-3">
              {examples.map((e)=>(
                <button
                  key={e}
                  onClick={()=>{
                    setPrompt(e);
                    fakeGenerate(e);
                  }}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10"
                >
                  {e}
                </button>
              ))}
            </div>

            <div className="mt-5 flex justify-between items-center">
              <span className="text-sm text-slate-400">
                {prompt.length}/500
              </span>

              <button
                onClick={()=>fakeGenerate()}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-500 flex gap-2"
              >
                <Send size={18}/>
                Generate UI
              </button>
            </div>

          </section>

          {/* Output */}
          <section className="mt-8 rounded-[28px] overflow-hidden border border-white/10 bg-slate-900">

            <div className="flex justify-between px-5 py-4 border-b border-white/10">

              <div className="flex items-center gap-3">
                <button
                  onClick={()=>setTab("code")}
                >
                  Generated Code
                </button>

                <button
                  onClick={()=>setTab("preview")}
                  className="flex items-center gap-2"
                >
                  <Eye size={15}/>
                  Preview
                </button>
              </div>

              <div className="flex gap-3">
                <button className="px-4 py-2 rounded-xl bg-white/5 flex gap-2">
                  <Copy size={16}/>
                  Copy
                </button>

                <button className="px-4 py-2 rounded-xl bg-white/5 flex gap-2">
                  <Download size={16}/>
                  Export
                </button>
              </div>

            </div>

            <div className="p-6 min-h-[420px]">

              {loading ? (
                <div className="flex flex-col items-center justify-center h-80 gap-5">
                  <div className="w-14 h-14 rounded-full border-4 border-white/20 border-t-white animate-spin"></div>

                  <p>
                    Generating UI...
                  </p>
                </div>

              ) : tab==="code" ? (

                <pre className="text-sm whitespace-pre-wrap overflow-auto bg-slate-950 p-6 rounded-3xl">
                  {generated}
                </pre>

              ) : (

                <div className="rounded-3xl border border-dashed border-white/10 p-10 bg-slate-950 min-h-[340px]">
                  Live Preview Placeholder
                </div>

              )}

            </div>

          </section>

        </main>
      </div>
    </div>
  );
}