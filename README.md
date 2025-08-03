# 🧠 AI UI/UX Generator

Generate beautiful UI/UX component code using natural language prompts with the power of AI.

🚀 [Live Demo](https://ai-uiux-olive.vercel.app/)  
🔗 [Backend API](https://ai-uiux-backend.onrender.com)  
🗂️ [Frontend GitHub](https://github.com/ShikharMishra9161/AI-uiUx/tree/main/ai-ui-generator)  
🗂️ [Backend GitHub](https://github.com/ShikharMishra9161/AI-uiUx/tree/main/server)

---

## 🖼️ Features

- ✨ Prompt-based UI generator
- 🔌 Full-stack integration (React + Node.js + Express)
- ⚙️ Connected to Google Gemini API for smart code generation
- 🔄 Copy-to-clipboard functionality
- ⏳ Loading indicator while generating
- 📦 Deployed on Render (backend) & Vercel (frontend)

---

## 🛠️ Tech Stack

**Frontend:**  
- React  
- Axios  
- Tailwind CSS (optional/custom styles)

**Backend:**  
- Node.js  
- Express.js  
- Google Gemini API  
- CORS, dotenv, etc.

**Deployment:**  
- Vercel (Frontend)  
- Render (Backend)

---

## 📷 Screenshots

### 🖊️ Prompt Input UI
![Prompt UI](https://github.com/ShikharMishra9161/AI-uiUx/blob/main/ai-ui-generator/public/Screenshot%202025-08-02%20210851.png)

### ⚙️ Code Output Display
![Output UI](https://github.com/ShikharMishra9161/AI-uiUx/blob/main/ai-ui-generator/public/image.png)

---

## 🔍 How It Works

1. User types a prompt like _“Responsive navbar with dark mode”_
2. Prompt is sent to backend via `/api/generate`
3. Backend forwards it to Gemini AI model
4. AI responds with matching React component code
5. Code is shown in frontend with an option to copy

---


#💡 Future Improvements
User authentication (Login/Signup with JWT)

History of generated prompts

Dark/light mode toggle

Save/download code as .jsx files

Mobile responsive improvements

#📄 License
MIT

Made with ❤️ by Shikhar Mishra





