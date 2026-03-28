# Darshan 360

AI-powered heritage tourism website focused on **Gwalior Fort** and **Orchha**, built with Next.js App Router.

## Features

- Story-driven destination discovery
- Dedicated AI assistant page (`/ai`) with suggested prompts and typing indicator
- AI itinerary planner (`/planner`) based on number of days + interests
- Destination detail pages (`/site/[slug]`) with history, attractions, best time, and gallery
- OpenRouter primary LLM + Gemini fallback through secure server API routes

## Tech Stack

- Next.js 14 (App Router)
- Tailwind CSS
- Next.js API Routes (`/api/chat`)
- OpenRouter + Gemini APIs

## Environment Variables

Create `.env.local` in the project root:

```env
OPENROUTER_API_KEY=
OPENROUTER_MODEL=meta-llama/llama-3.1-8b-instruct:free
GEMINI_API_KEY=
GEMINI_MODEL=gemini-1.5-flash
```

If keys are missing, the app gracefully returns a mock assistant response.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```
# karmyoddha
# karmyoddha
