# Wells County Democratic Party Website

Official website for the Wells County Democratic Party, hosted via GitHub Pages.

🌐 **Live site:** https://wellscountydemocrats.github.io

---

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Main landing page with hero, pillars, events, voter info, newsletter |
| About | `pages/about.html` | Leadership, platform, candidates |
| Events | `pages/events.html` | Mobilize.us calendar embed |
| Get Involved | `pages/get-involved.html` | Volunteer, phone bank, run for office, precinct chairs |
| Voter Info | `pages/voter-info.html` | Indiana voter resources, deadlines |
| Contact | `pages/contact.html` | Contact form (Formspree) + party info |
| Press | `pages/press.html` | Press releases and media contact |

## File Structure

```
wellscountydemocrats.github.io/
├── index.html              ← Homepage
├── css/
│   └── style.css           ← All styles
├── js/
│   └── main.js             ← Navigation + interactions
├── images/
│   └── logo.png            ← Party logo
└── pages/
    ├── about.html
    ├── events.html
    ├── get-involved.html
    ├── voter-info.html
    ├── contact.html
    └── press.html
```

## Setup Notes

### Contact Form (Formspree)
The contact form on `pages/contact.html` uses [Formspree](https://formspree.io) for free email delivery.

1. Go to https://formspree.io and create a free account
2. Create a new form and copy your Form ID (looks like `xpwzqabc`)
3. In `pages/contact.html`, replace `YOUR_FORM_ID` with your actual ID:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Custom Domain
Once you're ready to point your domain:
1. Add a `CNAME` file to the repo root containing just your domain name (e.g. `wellscountydemocrats.org`)
2. In your domain registrar, add a CNAME record pointing to `wellscountydemocrats.github.io`
3. In GitHub repo Settings → Pages → Custom domain, enter your domain

### Enabling GitHub Pages
1. Go to this repo on GitHub
2. Settings → Pages
3. Source: Deploy from a branch
4. Branch: `main` / `root`
5. Save — site will be live in a few minutes

## Updating Content

### Adding Leadership Names
Edit `pages/about.html` — find the `leader-grid` section and replace the `[Name]` placeholders.

### Adding Press Releases
Edit `pages/press.html` — copy the commented-out card template and fill in the details.

### Adding Candidates
Edit `pages/about.html` — replace the placeholder card in the `#candidates` section.

### Updating Events
Events are pulled live from Mobilize.us — no changes needed here. Update events at:
https://www.mobilize.us/wellscountydemocraticparty/

---

*Paid for by the Wells County Democratic Party. Not authorized by any candidate or candidate committee.*
