# Deploy SignalFlow to Vercel

SignalFlow is a Vite React static site. The repository includes `vercel.json`, which configures Vercel to install with the locked pnpm dependencies, run the production build, serve `dist/public`, and route client-side paths back to `index.html`.

## Vercel settings

When importing the GitHub repository, Vercel should detect the project automatically. If it asks for values, use the following configuration:

| Setting | Value |
|---|---|
| Framework preset | Vite |
| Install command | `pnpm install --frozen-lockfile` |
| Build command | `pnpm build` |
| Output directory | `dist/public` |
| Root directory | `.` |

No runtime secrets are required by the current homepage. The signup interaction is intentionally a frontend demo and does not transmit email addresses. If a real signup backend is added later, configure those values in Vercel Project Settings → Environment Variables rather than committing them to the repository.

The visual assets used by the homepage are stored as compressed WebP files in `client/public/assets`, so the Vercel deployment does not depend on Manus storage URLs.
