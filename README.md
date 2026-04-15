
# 🚀 AI Marketing Agency - Custom Proposal System

A high-performance React application built with **Vite** and **Supabase**. This project features a public-facing proposal request form and a secured **Admin Dashboard** for managing client inquiries.

## ✨ Features

- **Custom Proposal Form**: Validated form that sends client data directly to Supabase.
- **Admin Panel**: A protected route (`/admin`) with a predefined login shield.
- **Real-time Dashboard**: View, track, and delete customer requests.
- **Dark Mode Support**: Fully responsive UI that adapts to user theme preferences.
- **Security**: Row Level Security (RLS) enabled on Supabase to protect sensitive data.

## 🛠️ Tech Stack

- **Frontend**: React.js (Vite)
- **Styling**: Tailwind CSS
- **Icons**: Lucide-React
- **Database/Auth**: Supabase
- **Routing**: React Router DOM

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
`https://github.com/Raheem017/accordmarketers`

### 2. Add environment variables

Create `.env.local` in the repo root and define:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

This Vite app lives at the repository root, so place `.env.local` next to `package.json`.