# Book Reviews Platform

A fullstack web application to explore books and leave reviews, built with modern tech from frontend to backend.

> Backend: **NestJS**  
> Frontend: **Next.js (App Router)**  
> Database: **MongoDB**  
> DevOps: **Docker Compose**  

---

## Features

- List books with average ratings  
- Book detail pages with user reviews  
- Submit reviews with form validation   
- Data cached and refreshed with React Query  
- Seed script for demo data  

---

## Running the App

### Option 1: With Docker (Recommended)

```bash
git clone https://github.com/lucasbachega/teste-fullstack.git
cd teste-fullstack
docker compose up --build -d
docker compose exec backend npm run seed 
```

Docker Compose will:
- Start the **frontend** on `http://localhost:3500`
- Start the **backend** on `http://localhost:9100`
- Start **MongoDB**
- Auto-seed the DB with demo data

---

### Option 2: Manual Setup

#### Install Dependencies

```bash
cd backend && npm install
cd frontend && npm install
```

#### Configure Environment Variables

**Backend → `backend/.env`:**

```env
PORT=9100
MONGO_URI=mongodb://localhost:27017/book-reviews
```

**Frontend → `frontend/.env.local`:**

```env
NEXT_PUBLIC_API_URL=http://localhost:9100
```

#### Run Servers

```bash
# Backend
cd backend
npm run start:dev

# Frontend
cd frontend
npm run dev
```

---

## Seeding Data

```bash
cd backend
npm run seed
```

---

## Stack Summary

- NestJS + MongoDB
- Next.js + React Query
- Zod + RHF for forms
- TailwindCSS
- Docker
