# 📊 Comments Dashboard (React + TypeScript)

A stylish dashboard built with **React, TypeScript, Vite, and TailwindCSS** for displaying comments data with pagination, search, and sorting.  
Includes a **Profile page** (with dummy user data) and a **Comments Dashboard page** (with 500 dummy comments).

---

## 🚀 Features
- **Profile Page**
  - Displays first user record from dummy API
  - Glassmorphism profile card UI
  - Navigation back to Dashboard
---
## 🌍 Live Demo

The project is deployed on **Vercel**.  
🔗 [Live Dashboard](https://swift-liard-alpha.vercel.app/)

- **Comments Dashboard**
  - Fetches 500 comments from dummy API
  - Custom **pagination** (10 / 50 / 100 per page)
  - **Partial search** (name, email, body)
  - **Sorting** on Post ID, Name, and Email
  - Sorting cycles: No sort → Ascending → Descending → No sort
  - State persistence (search, page, page size, sort) in `localStorage`

- **UI**
  - Responsive layout
  - Fancy **glassmorphism design**
  - Gradient headings, hover effects
  - Cross-browser compatible (Chrome, Firefox, Edge)

---

## 🛠️ Tech Stack
- **React 18**
- **TypeScript**
- **Vite**
- **React Router v6**
- **TailwindCSS**
- **Lucide React (icons)**

---
## 📂 Project Structure
```bash
src/
 ├── api.ts            # API functions & types
 ├── App.tsx           # Routes + Header
 ├── App.css           # Header styling
 ├── index.css         # Tailwind base
 ├── main.tsx          # Entry point
 ├── pages/
 │    ├── Dashboard.tsx
 │    └── Profile.tsx
 └── components/
      └── Pagination.tsx
```

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/vik802207/swift/.git
# Install dependencies
npm install

# Start development server
npm run dev
```
## 🌐 APIs Used

- **Users API** → [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)  
  Used to fetch the first user record for the Profile page.

- **Comments API** → [https://jsonplaceholder.typicode.com/comments](https://jsonplaceholder.typicode.com/comments)  
  Used to fetch 500 dummy comments for the Dashboard.
## ✨ Author

**Developed by Vikash Gupta**  
7th Semester @ IIITN | Web Developer 🚀
