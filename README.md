<h1>My Portfolio</h1>

URL: https://joshashton.dev


Core technologies are React and Node.js, using swiper as well.
See:
- https://react.dev/learn
- https://nodejs.org/en/learn/getting-started/introduction-to-nodejs
- https://swiperjs.com/react

<br>

<h2>Documentation</h2>

<h3>Setup</h3>

<h4>Development Environment</h4>

```
git clone https://github.com/quaxlyqueen/portfolio
cd portfolio
npm install
node src/server.js &
npm start
```

<h4>Production Environment</h4>

```
git clone https://github.com/quaxlyqueen/portfolio
cd portfolio
npm run build
cd dist
node ../src/server.js &
serve -s
```

<h3>Project structure</h3>

- `/main.jsx` is the root and router.
- `/App.jsx` is the primary page of my portfolio, and currently contains all application data. New projects are added here.
- `/Home.jsx`, `/Projects.jsx`, and `/Contact.jsx` are pages (or slides) of `/App.jsx`.
- `/components/*` are the components used to build the pages.

<h3>Styling guidelines:</h3>

<h4>Colorscheme data:</h4>

<h5>Purple</h5>

```
--dark-0: #170123;
--dark-1: #39124e;
--dark-2: #5e3276;
--dark-3: #84509f;
--primary: #4a245e;
--accent-1: #9e75a8;
--accent-2: #c69bca;
--text: #EBD2FF;
```

<h5>Green</h5>

```
--dark-0: #091A19;
--dark-1: #10211E;
--dark-2: #162722;
--dark-3: #1C2E26;
--primary-1: #304334;
--primary: #6B825C;
--accent-0: #90D889;
--accent-1: #8FC973;
--accent-2: #B8DAA6;
--text: #E0EAD9;
```

<h2>TODO</h2>

<h3>Features</h3>

- [x] Refactor and reorder the HTML & CSS. (v.0.0.1)
- [x] Template HTML blocks for repeated components. (v.0.0.1)
- [x] Contact page. (v.0.0.1)
- [x] Proper 404 page (v.0.0.1)
- [ ] Resume page (HTML and PDF options). (v.0.0.1)
  - [ ] Make resume 1 page (v.0.0.1)
- [ ] Security:
  - [ ] Separate user for self-hosting, with reduced permissions. (v.0.0.1)
  - [ ] Dockerize (v.0.0.1)

<h3>Future Features:</h3>

- [ ] Rewrite CSS into components/modules (v.0.0.2)
- [ ] Read in data for portfolio a plain text files. (v.0.0.2)
- [ ] Script to easily add new projects. (v.0.0.2)
- [ ] Demo's of various projects. (embed Java Swing app or Flutter app directly into portfolio). (v.0.0.2)
- [ ] Blog page. (v.0.0.3)
- [ ] Convert SLCC e-portfolio to my own website (v.0.0.4)

<h3>Bugs:</h3>

- [ ] /Home.jsx, Profile picture animation is slightly cutoff on mobile. (v.0.0.2)
- [X] /Projects.jsx, More prominent slide indicator for projects (or n/10 counter, or some similar solution). (v.0.0.2)
- [x] /Projects.jsx, Alignment of project card on mobile. (v.0.0.1)
- [ ] /Projects.jsx, cursor icon when hover on the slide buttons should be a pointer, not highlighter.
- [ ] /Contact.jsx, handle blank and spam inputs
- [ ] /Contact.jsx, Contact form submission centers entire section. (v.0.0.2)
- [ ] /ErrorPage.jsx, stylize the error page.
- [x] /Resume.jsx, PDF viewer width is constant, doesn't respond to resizing (or setting the width in CSS). (v.0.0.1)
- [x] /components/SkillCard.jsx, Add state to skill accordions for mobile. (v.0.0.1)
- [x] /main.css, Breathing animation of background gradient stopped. (v.0.0.1)
