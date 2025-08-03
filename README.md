# 🧠 AI UI/UX Generator

Generate beautiful UI/UX component code using natural language prompts with the power of AI.

🚀 [Live Demo](https://ai-uiux-olive.vercel.app/)  
🔗 [Backend API](https://ai-uiux-backend.onrender.com)  
🗂️ [Frontend GitHub](https://github.com/ShikharMishra9161/AI-uiUX)  
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
![Prompt UI](<img width="1846" height="859" alt="Screenshot 2025-08-02 210851" src="https://github.com/user-attachments/assets/b279e533-d9fc-4ce9-98b6-57cb53989937" />
)

### ⚙️ Code Output Display
![Output UI](<img width="580" height="423" alt="image" src="https://github.com/user-attachments/assets/41470453-707e-49fd-af15-e5b12108f9f8" />
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

