# 📚 Project 1 Notes — Personal Portfolio Site
### What this project is, how it works, and what you learned

> **Read this file after looking at the code.** It's your study guide. If you can explain every section below in your own words, you truly understand Project 1 — and that's what interviews test.

---

## 1. THE PROCESS (What we did, step by step)

### Step 1: Plan before coding (30 mins)
Before writing code, decide:
- **Purpose:** A single page that proves who you are + links to your work
- **Sections:** Navbar → Hero → About → Skills → Projects → Contact → Footer
- **Audience:** Recruiters + hiring managers (they spend ~10 seconds on your site!)
- **Tech:** Plain HTML/CSS/JS — no frameworks yet. You need fundamentals first.

**Lesson:** Professional developers plan first. Jumping straight to code = messy projects.

### Step 2: Build the HTML structure (index.html)
HTML is the **skeleton**. It answers: *what is on the page?*
- We used **semantic tags**: `<header>`, `<main>`, `<section>`, `<footer>` instead of just `<div>` everywhere. Why? Screen readers, SEO, and recruiters' tools understand them.
- Each section has an `id` (`id="about"`, `id="projects"`). Nav links use `href="#about"` to jump there. That's how single-page navigation works.
- We linked CSS with `<link rel="stylesheet" href="style.css">` and JS with `<script src="script.js">` at the bottom of `<body>` (so the page loads first, then JS runs).

### Step 3: Style with CSS (style.css)
CSS is the **wardrobe**. It answers: *how does it look?*
Read the file top-to-bottom — it's organised in 9 numbered sections:

| CSS Section | What it does | Key concept |
|---|---|---|
| **1. Variables** | `--primary`, `--accent` etc. defined once, reused everywhere | DRY (Don't Repeat Yourself) |
| **2. Reset** | `* { margin:0; padding:0; box-sizing:border-box }` removes browser defaults | You control spacing, not the browser |
| **3. Reusable classes** | `.container` (centres content), `.btn` (button style) | Write once, use everywhere |
| **4. Navbar** | `position: sticky` + Flexbox row layout | Flexbox for 1D layout (rows/columns) |
| **5. Hero** | Gradient banner, big heading, blinking cursor animation | `@keyframes` for animations |
| **6. Sections** | Grid layouts for About/Skills/Projects cards | CSS Grid for 2D layout (rows + columns) |
| **7. Footer** | Dark bar at bottom | — |
| **8. Scroll reveal** | `.reveal` starts invisible, `.visible` animates in | Transitions + JS class toggle |
| **9. Responsive** | `@media (max-width: 768px)` — mobile rules | Media queries = different CSS per screen size |

**Key ideas to remember:**
- **Flexbox** = laying things in a row/column (navbar, buttons, socials)
- **Grid** = laying things in rows AND columns (skills/projects cards)
- **Variables** = change a colour once, it updates everywhere
- **Responsive** = test on your phone! If it breaks on mobile, recruiters on mobile will see a broken site.

### Step 4: Add behaviour with JavaScript (script.js)
JavaScript is the **brain**. It answers: *what happens when the user does something?*
Read the file top-to-bottom — 6 numbered features:

| JS Feature | What it does | Key concept |
|---|---|---|
| **1. Mobile menu** | Click hamburger → nav opens/closes | `addEventListener`, `classList.toggle` |
| **2. Typing effect** | Types/deletes roles in the hero ("Full-Stack Developer" → "MERN Learner"...) | `setTimeout` loops, string methods |
| **3. Active nav** | Highlights the nav link for the section you're viewing | `scroll` event, `offsetTop` |
| **4. Scroll reveal** | Cards fade/slide in as you scroll to them | `IntersectionObserver` (modern API) |
| **5. Form validation** | Checks name/email/message before "sending" | Regex, `preventDefault`, error messages |
| **6. Footer year** | Auto-updates © year | `new Date().getFullYear()` |

**Key ideas to remember:**
- `document.getElementById('...')` = "find this element on the page"
- `addEventListener('click', ...)` = "when user clicks, run this function"
- `classList.toggle('open')` = "add/remove a CSS class" — JS + CSS working together!
- `e.preventDefault()` on form submit = "stop the page reloading" (we handle it ourselves)

### Step 5: Test it
1. Open `index.html` in your browser (double-click, or VS Code → Live Server)
2. Resize the window to phone width — does the hamburger menu appear?
3. Click every nav link — does it scroll to the right section?
4. Submit the contact form empty — do errors show? Fill it in — does success show?
5. Open DevTools (F12) → Console — any red errors? Fix them.

**Lesson:** Testing is not optional. "It works on my machine" is not enough.

### Step 6: Git & GitHub (Version control)
This is how you save and share your work. Run these in your terminal inside the project folder:

```bash
git init                          # Start tracking this folder
git add .                         # Stage all files
git commit -m "Project 1: Portfolio site with HTML/CSS/JS"  # Save a snapshot
git branch -M main                # Name the branch "main"
git remote add origin https://github.com/YOUR-USERNAME/portfolio-project-1.git
git push -u origin main           # Upload to GitHub
```

**Key ideas:**
- `git add` = "prepare these files to save"
- `git commit` = "save a snapshot with a message"
- `git push` = "upload snapshots to GitHub"
- Commit **daily** with clear messages. Recruiters check this!

### Step 7: Deploy (Make it live on the internet)
A live link is 10x more impressive than a GitHub repo alone.

**Option A — Netlify (easiest, 2 mins):**
1. Go to netlify.com → sign up with GitHub
2. "Add new site" → "Import from Git" → pick your repo
3. Build settings: leave blank (no build step for plain HTML) → Deploy
4. You get a live URL like `your-name.netlify.app`

**Option B — Vercel:** Same idea at vercel.com.

**Option C — GitHub Pages:** Repo Settings → Pages → Deploy from branch → main.

After deploying, paste the live URL into your README.md (top of file) and into the Projects card on your site.

---

## 2. SECTION-BY-SECTION CODE EXPLANATION

### index.html — 7 sections
1. **Navbar** — Logo left, links right, hamburger on mobile. Links use `#id` anchors.
2. **Hero** — First impression. Name, typing roles, 2 buttons, social links.
3. **About** — Your story + 3 stat cards (24 projects, 2/week, 100% deployed).
4. **Skills** — 6 cards. "Learning Now" vs "Coming Soon" = honest and shows a plan.
5. **Projects** — 3 cards. #01 is this site, #02/#03 are placeholders you'll replace.
6. **Contact** — Form with validation. No backend yet (that's Week 8).
7. **Footer** — Copyright with auto-year + "Back to top".

### style.css — 9 sections (see table above)
The most important: **Variables → Reset → Reusable → Layout (Flex/Grid) → Responsive.**

### script.js — 6 features (see table above)
The most important: **getElementById → addEventListener → classList → validation.**

---

## 3. CONCEPTS YOU LEARNED (Interview Checklist)

Tick these off — you should be able to explain each one:
- [ ] Semantic HTML vs plain `<div>`s — why it matters
- [ ] CSS variables and DRY
- [ ] Flexbox (1D) vs Grid (2D) — when to use each
- [ ] Media queries and responsive design
- [ ] DOM: `getElementById`, `querySelector`, `classList`
- [ ] Events: `click`, `submit`, `scroll`
- [ ] `preventDefault()` — why forms need it
- [ ] Regex for email validation (basic)
- [ ] IntersectionObserver for scroll animations
- [ ] Git: init → add → commit → push
- [ ] Deployment: Netlify/Vercel/GitHub Pages

---

## 4. CUSTOMISE IT (Make it yours!)

Before pushing to GitHub, replace these placeholders:
1. `Your Name` → your real name (in `<title>`, hero, footer, logo)
2. `YOUR-USERNAME` → your GitHub username (social links, project links)
3. `you@example.com` → your real email
4. `Download CV` link → upload your CV PDF to the repo and link it
5. Add a profile photo in the About section (optional, `<img>` tag)
6. Take a screenshot → save as `screenshot.png` → it shows in your README

---

## 5. NEXT STEPS

1. ✅ Customise (above)
2. ✅ Test on phone + desktop
3. ✅ `git init` → commit → push to GitHub
4. ✅ Deploy to Netlify → paste live URL in README
5. ✅ Screenshot → `screenshot.png` → commit again
6. ✅ Update `portfolio-tracker.xlsx`: Project 1 = Done + links
7. ✅ Post on LinkedIn: "Project 1/24 done! Built my portfolio with HTML/CSS/JS. Live demo: [link]. Learned: Flexbox, Grid, DOM events. Next: To-Do App 🚀"

**Project 2 (next):** To-Do App with localStorage — we'll build it the same way: plan → HTML → CSS → JS → Git → Deploy.

---

*You now know more than most beginners who only watch tutorials. You built, tested, and shipped a real website. That's the whole game. Keep going. 💪*
