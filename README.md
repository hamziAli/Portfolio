# Hamza Ali — Portfolio

Personal portfolio website built with Next.js. Showcases my background, projects, certifications, and skills as a CS undergrad focused on web development, DevOps, and cloud computing.

**Live site:** _add your deployed URL here once live_

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Custom CSS (CSS variables for theming) + Tailwind utility classes
- **Icons:** [lucide-react](https://lucide.dev/)
- **Animation:** Framer Motion (for scroll-based components)
- **Language:** JavaScript / TypeScript

---

## Features

- 🌓 Light / dark mode toggle
- 📱 Fully responsive — mobile, tablet, and desktop
- ⚡ Sticky navbar with smooth-scroll section links and a mobile hamburger menu
- 🧑‍💻 Animated hero section with a binary "matrix decode" name reveal
- 📄 Resume viewable and downloadable directly from the site
- 🗂️ Project cards with tech stack, live demo, and GitHub links
- 🏅 Certifications grid
- 🛠️ Categorized skills section (Languages, Frameworks, Tools, Concepts)

---

## Project Structure

```
portfolio/
├── app/
│   ├── page.tsx          # Homepage — renders all sections
│   └── layout.tsx        # Root layout, fonts, metadata
├── components/
│   ├── Hero.jsx           # Landing section
│   ├── About.jsx          # About Me section
│   ├── Resume.jsx         # Embedded resume viewer
│   ├── Projects.jsx       # Projects grid
│   ├── Certifications.jsx # Certifications grid
│   ├── Skills.jsx         # Skills section
│   └── Contact.jsx        # Contact form / footer
├── public/
│   ├── profile.jpeg       # Profile photo
│   └── Resume.pdf         # Resume file
└── README.md
```

---

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/hamziAli/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production
```bash
npm run build
npm start
```

---

## Updating Content

| To update...        | Edit this file                          |
|----------------------|------------------------------------------|
| Name, tagline, intro | `components/Hero.jsx`                    |
| Profile photo        | Replace `public/profile.jpeg`            |
| Resume               | Replace `public/Resume.pdf`              |
| About section        | `components/About.jsx`                   |
| Projects              | `components/Projects.jsx`                |
| Certifications        | `components/Certifications.jsx`          |
| Skills                | `components/Skills.jsx`                  |
| Contact info          | `components/Contact.jsx`                 |

---

## Deployment

This project is built for easy deployment on [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

Or connect the GitHub repo directly in the Vercel dashboard for automatic deploys on every push.

---

## Contact

- **GitHub:** [github.com/hamziAli](https://github.com/hamziAli)
- **LinkedIn:** [linkedin.com/in/hamza-ali-69730431a](https://linkedin.com/in/hamza-ali-69730431a)
- **Email:** hamza93313813@gmail.com

---

## License

This project is open source and available under the [MIT License](LICENSE).
