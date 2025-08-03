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
![Prompt UI](<img width="923" height="430" alt="image" src="https://github.com/user-attachments/assets/8c8055f0-c404-405a-88fe-000cd51b2933" />
)

### ⚙️ Code Output Display
![Output UI]()

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

