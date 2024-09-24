This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# CHAPTER 1, 2, 3

## Routing
- File-based route
- Nested route
- Dynamic rout
- Catch-all route

## Link
- <Link> element, the network fetches only a small Javascript file needed for that route.
- <a> element, the browser reloads the entire web applications.

- Each route (or folder) in your application should have a `page.js` file that exports a default component. This component will be used as the UI for that route.

- The `layout.js` file inside `/app` folder is a shared UI that shapes the layout of your application. You can place components that are used in all routes in this file.

# CHAPTER 4 - SERVER AND CLIENT COMPONENTS

- All components created in Next.js are server components by default. The Javascript bundle size can be minimized and the application will load faster.

- A server component is also SEO-friendly because search engine bots will be able to see the content of the page.

- Why use client components if server components are that good?
Because the main drawback of server components is interactivity. A server component can't listen to browser events such as a click , a form submission and changes on an input field.

- Recomment to create a client component in a seperate file, and then import the client component to the server component.

# CHAPTER 5 - SERVER ACTIONS AND DATA FETCHING

- A server action is an asynchronous function that's executed on the server, but it can be called both from server and client components.

- A server action is private, so you don't need to create dedicated API routes to run code that should be hidden from the client, like updating the database and fetching external API with secrect keys.

### When to use server actions?

- Sending requests to external APIs
- Manipulating database records (CRUD)
- Performing business logic such as validating submitted data and processing payments.

