# Region Travel Calculator – WarEra

A page that works out the best order to visit the regions with boxes, starting from your current region.

## Deploy to Netlify

**Option 1 – from Git (recommended)**
1. Push this folder to a GitHub repo.
2. Netlify → Add new site → Import from Git → pick the repo.
3. Settings are read automatically from `netlify.toml`. Deploy.

**Option 2 – from the terminal**
```bash
npm i -g netlify-cli
netlify login
netlify deploy --prod
```

Note: drag & drop on Netlify doesn't publish the `/api/regions` function. The page then falls back to calling the WarEra API directly, which may be blocked by CORS.

## Local
```bash
netlify dev
```
