## Overview

This is a personal portfolio website built to showcase projects and skills. It's designed with a focus on clean code, simplicity, and modern web technologies.

## Tech Stack

- ⚛️ **Framework:** Next.js (App Router)
- 📜 **Language:** JavaScript
- 🎨 **Styling:** Tailwind CSS
- 🧩 **UI Components:** Shadcn/UI
- ✨ **Core Principles:** Functional components, Server Components first, Clean Code (DRY, Single Responsibility, etc.)

## Highlights

- **Modern Stack:** Leverages the latest features of Next.js and React.
- **Performance:** Optimized for speed using Server Components where possible.
- **SEO Ready:** Automatically generates `sitemap.xml` and `robots.txt` on build.
- **Developer Experience:** Simple setup and clear project structure.

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-name>
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```
3.  **Set up environment variables:**
    Copy `.env.example` to `.env.local` and fill in any required values.
4.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser.

## Project Structure

- `/app`: Contains all routes, pages, and layouts (using Next.js App Router).
- `/components/ui`: Reusable UI elements based on Shadcn/UI or custom Tailwind styles.
- `/components/sections`: Larger page sections (e.g., Hero, About).
- `/components/common`: Shared components like Navbar, Footer.
- `/lib`: Utility functions.
- `/public`: Static assets, including the generated `sitemap.xml` and `robots.txt`.
- `next-sitemap.config.js`: Configuration for sitemap generation.
