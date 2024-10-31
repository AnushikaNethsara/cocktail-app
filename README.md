This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started on Local

First, run the development server:

```bash
npm install
# and
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Project Overview

In this app, I implemented the Atomic Design Pattern to structure the user interface effectively. This includes:

- Atoms: The basic building blocks like buttons and input fields.
- Molecules: Combinations of atoms that create more complex components, such as a search bar.
- Organisms: Groups of molecules that function together, like a cocktail card that displays details and an "Add to Favorites" button.

Additionally, I utilized the Context API to manage the state of favorite cocktails across the app, making it easy to add and retrieve favorites seamlessly.

Tests files are added in the `src\tests` path. Comments are added for more clarification.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
