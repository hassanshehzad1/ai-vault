# AI Vault

AI Vault is a Next.js (App Router) project that serves as a starter for an AI-powered UI. This README provides a complete setup, development, build, and deployment guide plus troubleshooting and contribution notes.

---

## Table of contents

- Project overview
- Prerequisites
- Installation
- Environment variables
- Scripts
- Project structure
- Styling & fonts
- Development workflow
- Linting & testing
- Build & production
- Docker (optional)
- Deployment (Vercel)
- Troubleshooting
- Contributing
- License

---

## Project overview

- Framework: Next.js (App Router)
- React: 19.x
- Tailwind CSS for utility-first styling (configured via PostCSS)
- Key deps: Radix UI, lucide-react, date-fns, class-variance-authority, tailwind-merge, vaul (vault-related helper)
- This repo contains a minimal app layout: app/layout.js, app/page.js, components/header.jsx and global styles.

---

## Prerequisites

- Node.js (LTS recommended). Tested with Node 18–20. Use the latest LTS for best compatibility.
- npm (bundled) or yarn / pnpm / bun
- Git (optional)

Windows-specific tips:
- Remove build artifacts: use PowerShell or CMD:
  - PowerShell: Remove-Item -Recurse -Force .\.next
  - CMD: rmdir /s /q .next

---

## Installation (local)

1. Clone repository (if applicable)
   ```bash
   git clone <repo-url>
   cd ai-vault
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   # or
   pnpm install
   ```

3. Create environment file
   - Copy example (create the file if it doesn't exist)
   ```bash
   copy .env.example .env.local   # Windows CMD/PowerShell
   # or
   cp .env.example .env.local    # macOS / Linux
   ```
   - Edit `.env.local` with your keys (see Environment variables section).

4. Run dev server
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```
   Open http://localhost:3000

---

## Environment variables

- Add secrets and keys to `.env.local` (this file should not be committed).
- Typical variables (example names; confirm required keys in your code):
  ```
  NEXT_PUBLIC_API_URL=https://api.example.com
  NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
  AI_SERVICE_API_KEY=YOUR_AI_KEY
  ```
- Restart the dev server after changing `.env.local`.

---

## Scripts (package.json)

- dev — next dev (development server)
- build — next build (production build)
- start — next start (serve production build)
- lint — run ESLint

Usage:
```bash
npm run dev
npm run build
npm start
npm run lint
```

---

## Project structure (high level)

- app/ — Next.js App Router routes & layouts
  - app/page.js — homepage component
  - app/layout.js — RootLayout (includes Google font and Header)
  - app/globals.css — global styles
- components/ — shared components (Header, etc.)
  - components/header.jsx
- public/ — static assets (images, icons)
- package.json — dependency + script config
- postcss.config.mjs, tailwind.config.js — Tailwind/PostCSS config
- README.md — this file

---

## Styling & fonts

- Tailwind CSS is configured via PostCSS. If you change Tailwind config, update `tailwind.config.js`.
- Global styles in `app/globals.css`.
- Fonts: Poppins loaded in `app/layout.js` via `next/font/google`.

---

## Development workflow

- Edit UI under `app/` and `components/`.
- Use the browser to auto-refresh pages at http://localhost:3000.
- Break large components into small reusable pieces in `components/`.
- Keep styling in Tailwind utility classes or component CSS modules where required.

Recommended VS Code extensions:
- ESLint
- Tailwind CSS IntelliSense
- Prettier (optional)

---

## Linting & testing

- Lint:
  ```bash
  npm run lint
  ```
  Ensure ESLint version and rules in `.eslintrc.json` are compatible with your environment.

- Testing:
  - No test runner configured by default. Recommended options:
    - Jest + React Testing Library
    - Vitest for modern, fast tests
  - Add a test script and config if you add tests.

---

## Build & production

1. Build
   ```bash
   npm run build
   ```

2. Serve build locally
   ```bash
   npm start
   ```
3. If you need to clear cache or rebuild clean:
   - macOS / Linux:
     ```bash
     rm -rf .next node_modules
     npm install
     npm run build
     ```
   - Windows (PowerShell):
     ```powershell
     Remove-Item -Recurse -Force .\.next, .\node_modules
     npm install
     npm run build
     ```

---

## Docker (optional)

Example Dockerfile (minimal):

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## Deployment (Vercel recommended)

- Connect repo to Vercel.
- Build command: `npm run build`
- Output directory: Next.js default (Vercel handles this)
- Ensure environment variables are set in Vercel dashboard.

Other hosts: Netlify (with adapter), custom Node servers, Docker containers.

---

## Troubleshooting

- "Port already in use": kill existing process or change port:
  ```bash
  npx kill-port 3000
  # or start with a custom port
  PORT=3001 npm run dev
  ```
  (On Windows use PowerShell: $env:PORT=3001; npm run dev)

- Stale build: delete `.next` and rebuild.
- Mismatched dependency versions: check `package.json` and run `npm install` fresh.
- ESLint errors: run `npm run lint` and fix per rules.

---

## User authentication (Clerk)

This project uses Clerk for authentication. The app includes example routes and components for sign-in / sign-up and a middleware to protect routes.

### Quick setup (Clerk dashboard)
1. Create an account at https://clerk.com and create a new application.
2. Copy the following keys from the Clerk dashboard into your environment:
   - CLERK_PUBLISHABLE_KEY or NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY (frontend)
   - CLERK_SECRET_KEY (server)
   - CLERK_FRONTEND_API (optional for some Clerk setups)

Add them to `.env.local`:
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_...
CLERK_SECRET_KEY=sk_...
CLERK_FRONTEND_API=clerk.your-app.clerk.com
```
Restart the dev server after adding env vars.

### Install
Clerk is already listed in package.json: `@clerk/nextjs`. If not installed:
```bash
npm install @clerk/nextjs
```

### Provider (app/layout.js)
Wrap the app with ClerkProvider in the root layout (example already present in this repo):

```jsx
import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
```

### Sign-in / Sign-up pages (App Router)
Use Clerk's pre-built components. Example pages (already in repo under app/(auth)):

Sign-up page:
```jsx
// app/(auth)/sign-up/[[...sign-up]]/page.jsx
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return <SignUp />;
}
```

Sign-in page:
```jsx
// app/(auth)/sign-in/[[...sign-in]]/page.jsx
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return <SignIn />;
}
```

Visit `/sign-in` and `/sign-up` to use them.

### Header / UI controls
Use Clerk UI components to show sign-in / user controls:

```jsx
// components/header.jsx
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <header>
      <SignedOut>
        <SignInButton />
        <SignUpButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
}
```

### Protecting routes
Two options:

1) Middleware (repo includes middleware.js) — protects matching routes and redirects unauthenticated users to sign-in automatically.

Example matcher in middleware.js (already present):
```js
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/accounts(.*)",
  "/transactions(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();
  if (!userId && isProtectedRoute(req)) {
    const { redirectToSignIn } = await auth();
    return redirectToSignIn();
  }
});
```

2) Server-side guard (component-level)
In app router server components you can check auth and redirect:

```jsx
// app/dashboard/page.jsx (server component)
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function DashboardPage() {
  const { userId } = auth();
  if (!userId) redirect("/sign-in");
  return <div>Protected dashboard for {userId}</div>;
}
```

### Accessing user data
- Client components: use hooks or components from `@clerk/nextjs` (e.g., useUser(), UserButton).
- Server components: call `auth()` from `@clerk/nextjs` (returns userId, sessionId, etc.) or fetch user via server SDK with CLERK_SECRET_KEY.

### Common issues
- "ClerkProvider" errors: ensure publishable key is available in environment or that provider is used in the root of the app.
- Silent redirects: check middleware matcher and route patterns.
- Missing env vars: restart dev server after changes.

### References
- Clerk Next.js docs: https://clerk.com/docs/nextjs
- Clerk middleware: https://clerk.com/docs/reference/middleware

---

## Contributing

- Fork the repo and open a PR.
- Keep commits atomic and include meaningful messages.
- Add tests for new functionality where applicable.
- Update README and docs when adding features.

---

## Notes

- Keep `.env.local` out of version control.
- Review and pin major dependency upgrades (Next.js, React) and read upgrade guides.

---

## License

- Add license as needed (e.g., MIT). Create a `LICENSE` file in the repo.
