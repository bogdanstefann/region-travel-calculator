# WarEra – Ruta cutiilor

Pagină care calculează ordinea optimă de vizitare a regiunilor cu cutii, pornind din regiunea curentă.

## Deploy pe Netlify

**Varianta 1 – din Git (recomandat)**
1. Urcă folderul într-un repo GitHub.
2. Netlify → Add new site → Import from Git → alege repo-ul.
3. Setările se iau automat din `netlify.toml`. Deploy.

**Varianta 2 – din terminal**
```bash
npm i -g netlify-cli
netlify login
netlify deploy --prod
```

Notă: drag & drop pe Netlify nu publică funcția `/api/regions`. Pagina încearcă atunci API-ul WarEra direct, care poate fi blocat de CORS.

## Local
```bash
netlify dev
```
