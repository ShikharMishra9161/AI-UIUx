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
![Prompt UI](<img width="1424" height="861" alt="Screenshot 2025-08-03 121127" src="https://github.com/user-attachments/assets/b2607f08-0005-4905-957c-6467d29c8bd8" />
)

### ⚙️ Code Output Display
![Output UI](<img width="578" height="423" alt="image" src="https://github.com/user-attachments/assets/55cbc59d-d8ff-4fce-aa52-cd4db9e1493e" />
)

---

## 🔍 How It Works

1. User types a prompt like _“Responsive navbar with dark mode”_
2. Prompt is sent to backend via `/api/generate`
3. Backend forwards it to Gemini AI model
4. AI responds with matching React component code
5. Code is shown in frontend with an option to copy

---

## 🧪 Local Setup (Optional)

### 1. Clone frontend and backend

```bash
git clone https://github.com/ShikharMishra9161/AI-uiUX
git clone https://github.com/ShikharMishra9161/ai-uiux-backend

