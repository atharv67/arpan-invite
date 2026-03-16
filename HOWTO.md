# How to Update Your Wedding Website

All wedding details live in **one single file**: `config/wedding.ts`

Open that file in any text editor (VS Code works great), make your changes, and push to GitHub — Vercel auto-deploys in ~90 seconds.

---

## Changing Text & Details

### Names, bios, parents
Edit the `couple.arpan` and `couple.shivani` blocks.

### Wedding date (countdown timer)
Change `weddingDate` (format: `"YYYY-MM-DD"`) AND `weddingDateDisplay` (human-friendly).

### Events
Each event in the `events` array has:
- **`visible: true/false`** — set to `false` to hide an event without deleting it
- **`name, date, time, venue, address, dresscode, description`** — self-explanatory
- **`icon`** — one of: `mehendi | haldi | sangeet | wedding | reception | puja | baraat | ganpati`
- **`culturalTag`** — one of: `marwari | maharashtrian | both` (controls accent color)

### Adding a new event
Copy-paste any existing event block, change the fields, set `visible: true`.

---

## Adding Photos

### Couple photos
- Place files at: `public/images/couple/arpan.jpg` and `public/images/couple/shivani.jpg`
- Update the `photoPath` fields in config if you use different filenames

### Gallery photos
1. Drop photo files into `public/images/gallery/`
2. Add entries to `gallery.photos` in config:
   ```ts
   { filename: "my-photo.jpg", caption: "Caption here" }
   ```
If a file is missing, the site shows a decorative A&S placeholder — no errors.

---

## Deployment to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import the GitHub repo
3. No build settings needed — Vercel auto-detects Next.js
4. After deploy, add a custom domain in Vercel → Settings → Domains

After that, every `git push` auto-deploys in ~90 seconds.

---

## Development (local preview)

```bash
npm run dev
# Open http://localhost:3000
```

```bash
npm run build   # Check for errors before pushing
```
