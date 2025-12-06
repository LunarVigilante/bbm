# Blackbeard Media Group Landing Page

A premium Next.js 16 + Tailwind CSS landing page that showcases Blackbeard Media Groups AI-powered service catalog. The project uses the App Router, modern React patterns, and Tailwinds design tokens to deliver an immersive SaaS experience.

## Prerequisites

- Node.js 20+
- npm 10+

## Local Development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to explore the site. Any change to files inside `app/` or `components/` will trigger hot reloads.

## Production Build

```bash
npm run build
npm run start
```

The build step compiles the App Router bundle and the start command serves it with `next start` on port 3000.

## Docker Support

A multi-stage Dockerfile is provided for reproducible builds:

```bash
# Build the image
docker build -t bbm-web .

# Run the container
docker run --rm -p 3000:3000 bbm-web
```

### Docker Compose

Use the included compose file to build and start the stack in one step:

```bash
docker compose up --build
```

This exposes the app on `http://localhost:3000` and sets `NODE_ENV=production` inside the container.

## Useful Scripts

| Script        | Description                            |
| ------------- | -------------------------------------- |
| `npm run dev` | Start the Next.js dev server           |
| `npm run lint`| Run ESLint across the project          |
| `npm run build` | Generate the production bundle       |
| `npm run start` | Serve the production build           |

## Environment Variables

All content is currently static, but you can add runtime configuration by defining environment variables (for example, `NEXT_PUBLIC_ANALYTICS_ID`) and injecting them via `.env`, Docker `environment`, or your hosting provider.
