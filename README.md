# Lawgically IT.support

The website for Lawgically IT.support, a web and AI engineering agency in Raipur. It covers websites, digital marketing and IT support. Built with Next.js 15, React 19 and TypeScript, ready for Vercel.

## Run it on your computer

You need Node.js 20 or newer (22 or 24 recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy on Vercel

1. Push this folder to a new GitHub repository:
   ```bash
   git remote add origin https://github.com/<your-username>/lawgically-it-support.git
   git push -u origin main
   ```
2. Go to vercel.com → **Add New → Project** → import the repository.
3. Leave every setting as it is (Vercel detects Next.js) and click **Deploy**.
4. To use your own domain, open the project → **Settings → Domains** → add it, then follow Vercel's DNS steps.
5. After the domain works, change `url` in `lib/data.ts` to the real address and push again, so search engines and link previews use the right address.

## Where to change things

Almost everything you will want to edit is in **`lib/data.ts`**:

| What | Where in `lib/data.ts` |
| --- | --- |
| WhatsApp number, email, location, support hours, reply time, LinkedIn | `site` |
| Projects in "Real projects. Real results." | `projects` |
| Prices and plan details | `pricing` |
| FAQ questions and answers | `faqs` |
| Founder experience timeline | `experience` |

Page layout and section text are in `app/page.tsx`. All styling is in `app/globals.css`, and the brand colours are at the top of that file.

### Live project previews

Each website project shows the **real live site** inside its preview frame, loaded just before it scrolls into view. Clicking the preview opens the site in a new tab.

Some websites refuse to be shown inside another page. If a preview stays as the drawn mock-up, or shows an error, set `embed: false` for that project in `lib/data.ts`. It will then show the drawn preview and still link to the live site. Stamp2Fly is set to `embed: false` for now. Try `true` and check.

### Photos and logo

- The logo files are `public/logo-mark.png` (top bar) and `public/logo-full.png` (footer and share image). `app/icon.png` is the browser tab icon.
- The "Who we help" cards have photo placeholders. Put your photos in `public/` and replace the placeholder block in `app/page.tsx` with an `<Image>` tag; there is a comment showing where.

## Before going live

Fill in everything written in `[square brackets]`: prices, support hours, reply time, website timeline, the two testimonial cards and the "you own your work" promise. Keep "free consultation" only if the first call is free.
