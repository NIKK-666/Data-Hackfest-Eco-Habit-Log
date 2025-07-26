

---

```
# 🌱 EcoLog – Eco Habit Tracker (Hackfest Submission)

EcoLog is a lightweight, AI-powered web app that encourages users to live a more sustainable life by tracking small eco-friendly habits. It rewards actions with points and provides personalized green living tips using **Google Gemini AI**.

🚀 Built during **AI Hackfest 2025**  
🔓 No login required — privacy-first and easy to use.

---

## 📽️ Demo Video

▶️ [Watch on Vimeo](https://vimeo.com/1104751202)  
Or view below:

<div align="center">
  <iframe src="https://player.vimeo.com/video/1104751202" width="100%" height="400" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
</div>

---

## 📸 Preview

![EcoLog Screenshot](./preview.png) <!-- Optional: Replace or remove -->

---

## 🎯 Features

- ✅ Track daily eco-friendly habits
- ➕ Add custom habits (e.g., "Turned off AC", "Used public transport")
- 💯 Points system (10 points per habit)
- 🔁 Streak tracking
- 🤖 AI suggestions via Gemini API (`gemini-pro`)
- 📊 Dashboard for recent logs
- ⚡ Fully responsive Tailwind UI

---

## 🧱 Tech Stack

| Layer        | Tech                              |
|--------------|-----------------------------------|
| Frontend     | React + Tailwind CSS              |
| Backend      | Node.js + Express.js              |
| AI API       | Google Gemini (API key based)     |
| Database     | MongoDB Atlas (Mongoose ORM)      |
| Hosting      | Vercel (frontend), Render (backend) |

---

## 📂 Project Structure

```

Data-Hackfest-Eco-Habit-Log/
├── client/         # React Frontend (Habits + Dashboard)
├── server/         # Express Backend (MongoDB + Gemini API)
├── .env.example    # Sample environment config
├── README.md

````

---

## ⚙️ Environment Setup

### 1. Clone the repository
```bash
git clone https://github.com/NIKK-666/Data-Hackfest-Eco-Habit-Log.git
cd Data-Hackfest-Eco-Habit-Log
````

### 2. Setup environment files

Create `.env` file in `server/` and add:

```env
MONGODB_URI=
GEMINI_API_KEY=.
```

### 3. Install dependencies

```bash
# Backend
cd server
npm install
npm run dev

# Frontend (in another terminal)
cd ../client
npm install
npm start
```

---



---

## 📹 Demo Script

> “Hi, I’m Nikhil, and this is **EcoLog** — a simple tool to build sustainable habits.
> Just check the green actions you did today, and EcoLog will give you points and an AI tip using Google Gemini.
> No login, no complexity — just eco-action made easy and personal.”

---

## 🤝 Contributions

Pull requests are welcome. Feel free to fork and add:

* 📈 Weekly stats (Chart.js)
* 📱 Mobile PWA support
* 🧠 Habit recommendation engine

---

## 📄 License

MIT License © 2025 [Nikhil Barman](https://github.com/NIKK-666)

---

## 🙌 Acknowledgements

* [Google Gemini API](https://ai.google.dev/)
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
* [Tailwind CSS](https://tailwindcss.com/)
* [Hackfest AI](https://mlh.io/)

---

```

