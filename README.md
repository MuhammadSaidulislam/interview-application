This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


Next.js Project Structure (Full-stack with Auth, DB, API, UI)
interview-content-app/
│── prisma/                     # Database schema & migrations
│   └── schema.prisma
│
│── src/
│   ├── app/                    # App Router (pages + API routes)
│   │   ├── (public)/           # Public-facing routes
│   │   │   ├── page.tsx        # Home (upload content form)
│   │   │   └── public/
│   │   │       └── page.tsx    # Approved content listing
│   │   │
│   │   ├── (admin)/            # Admin-only routes
│   │   │   ├── page.tsx        # Admin dashboard
│   │   │   └── users/
│   │   │       └── page.tsx    # Example: manage users
│   │   │
│   │   ├── api/                # Backend API routes
│   │   │   ├── auth/           # Authentication APIs
│   │   │   │   └── [...nextauth]/route.ts
│   │   │   ├── content/
│   │   │   │   ├── route.ts    # GET (all approved) + POST (upload)
│   │   │   │   └── [id]/
│   │   │   │       └── route.ts # PATCH (approve/reject)
│   │   │   └── users/          # User management APIs
│   │   │       └── route.ts
│   │   │
│   │   ├── layout.tsx          # Global layout
│   │   ├── globals.css         # Global styles (Tailwind etc.)
│   │   └── error.tsx           # Error boundary
│   │
│   ├── components/             # Reusable UI components
│   │   ├── ui/                 # ShadCN / design system components
│   │   │   ├── button.tsx
│   │   │   └── card.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ContentCard.tsx     # For showing content
│   │   └── UploadForm.tsx      # Content upload form
│   │
│   ├── features/               # Feature-based modules
│   │   ├── content/            # Content module
│   │   │   ├── hooks/          # Hooks related to content
│   │   │   │   └── useContent.ts
│   │   │   ├── services/       # API calls
│   │   │   │   └── contentService.ts
│   │   │   └── components/     # Feature-specific UI
│   │   │       └── ContentList.tsx
│   │   └── auth/               # Auth module
│   │       ├── hooks/
│   │       │   └── useAuth.ts
│   │       ├── services/
│   │       │   └── authService.ts
│   │       └── components/
│   │           └── LoginForm.tsx
│   │
│   ├── lib/                    # Shared utilities/helpers
│   │   ├── prisma.ts           # Prisma client singleton
│   │   ├── auth.ts             # Auth utilities (role check, session)
│   │   ├── apiClient.ts        # Fetch wrapper for client requests
│   │   └── validators.ts       # Zod / Yup validators
│   │
│   ├── context/                # React Context Providers
│   │   └── AuthContext.tsx
│   │
│   ├── hooks/                  # Global reusable React hooks
│   │   ├── useToast.ts
│   │   ├── useModal.ts
│   │   └── useDebounce.ts
│   │
│   ├── store/                  # Global state management (Zustand/Redux)
│   │   └── contentStore.ts
│   │
│   ├── types/                  # TypeScript types/interfaces
│   │   ├── content.d.ts
│   │   ├── user.d.ts
│   │   └── auth.d.ts
│   │
│   ├── utils/                  # Utility functions
│   │   ├── formatDate.ts
│   │   ├── slugify.ts
│   │   └── logger.ts
│   │
│   ├── middleware.ts           # Middleware (auth/role-based routing)
│   └── config/                 # App-wide configuration
│       ├── authConfig.ts
│       └── siteConfig.ts
│
│── public/                     # Static assets (images, fonts, icons)
│   ├── logo.png
│   └── favicon.ico
│
│── .env                        # Environment variables
│── package.json
│── tsconfig.json
│── tailwind.config.ts
│── postcss.config.js

🔑 Key Highlights

(public) and (admin) → clean route groups, easy access control.

api/ → acts like backend (auth, content, users, etc.).

features/ → feature-based modularization (scales better than dumping all in components/).

lib/ + utils/ → clean separation: lib/ = shared integrations, utils/ = small helpers.

context/ → React Context for auth, theme, etc.

store/ → if you use global state (Zustand, Redux).

middleware.ts → protect routes (e.g., only admin can access /admin).

config/ → central app configs (auth providers, site metadata).