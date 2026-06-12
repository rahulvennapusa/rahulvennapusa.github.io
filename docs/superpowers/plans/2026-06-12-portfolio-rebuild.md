# Portfolio Site Rebuild Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild index.html and blog.html as proper Bootstrap 5 HTML5 documents, fixing all known bugs and applying GitHub Pages portfolio best practices.

**Architecture:** Static HTML site served by GitHub Pages. No build tools. Bootstrap 5 + Font Awesome 6 + Google Fonts loaded from CDN. Custom about.css and about.js kept as local files.

**Tech Stack:** HTML5, Bootstrap 5.3 (CDN), Font Awesome 6.5 (CDN), Google Fonts (CDN), vanilla JS (no jQuery).

---

### Task 1: Add smooth-scroll to about.css

**Files:**
- Modify: `resources/css/about.css` (prepend one rule)

- [ ] **Step 1: Add `html { scroll-behavior: smooth; }` at top of file**

Open `resources/css/about.css` and insert as the very first rule (before `body {`):

```css
html {
  scroll-behavior: smooth;
}
```

- [ ] **Step 2: Verify file starts correctly**

Run: `head -4 resources/css/about.css`
Expected output:
```
html {
  scroll-behavior: smooth;
}
```

- [ ] **Step 3: Commit**

```bash
git add resources/css/about.css
git commit -m "feat: add smooth scroll to about.css"
```

---

### Task 2: Rewrite about.js — remove jQuery

**Files:**
- Modify: `resources/js/about.js` (full rewrite)

- [ ] **Step 1: Overwrite about.js with jQuery-free version**

Write the following as the complete contents of `resources/js/about.js`:

```javascript
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    // Close responsive navbar when a scroll-trigger nav link is clicked
    var navCollapse = document.querySelector('#navbarSupportedContent');
    document.querySelectorAll('.js-scroll-trigger').forEach(function (link) {
      link.addEventListener('click', function () {
        if (navCollapse && navCollapse.classList.contains('show')) {
          var bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
          if (bsCollapse) bsCollapse.hide();
        }
      });
    });
  });
}());
```

Note: ScrollSpy and smooth scroll are handled by Bootstrap 5 data attributes and CSS respectively — no JS needed for those.

- [ ] **Step 2: Verify no jQuery references remain**

Run: `grep -n '\$\|jQuery\|easing' resources/js/about.js`
Expected: no output (zero matches).

- [ ] **Step 3: Commit**

```bash
git add resources/js/about.js
git commit -m "refactor: rewrite about.js without jQuery"
```

---

### Task 3: Rewrite index.html

**Files:**
- Modify: `index.html` (full rewrite)

- [ ] **Step 1: Write the new index.html**

Replace the entire contents of `index.html` with:

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="Rahul Vennapusa — Application Specialist with expertise in Java, Endeca Search, Python, and enterprise e-commerce platforms.">
  <meta name="author" content="Rahul Vennapusa">

  <!-- Open Graph -->
  <meta property="og:title" content="Rahul Vennapusa | Resume">
  <meta property="og:description" content="Application Specialist with expertise in Java, Endeca Search, Python, and enterprise e-commerce platforms.">
  <meta property="og:type" content="profile">
  <meta property="og:image" content="./resources/images/profile.jpg">

  <title>Rahul Vennapusa | Resume</title>

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Saira+Extra+Condensed:wght@400;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">

  <!-- Bootstrap 5 -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

  <!-- Font Awesome 6 -->
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet" integrity="sha384-/o6I2CkkWC//PSjvWC/eYN7l3xM3tJm8ZzVkCOfp//W05QcE3mlGskpoHB6XqI+B" crossorigin="anonymous">

  <!-- Custom styles -->
  <link href="./resources/css/about.css" rel="stylesheet">
</head>

<body id="page-top" data-bs-spy="scroll" data-bs-target="#sideNav" data-bs-offset="72">

<!-- Side Navigation -->
<nav class="navbar navbar-expand-lg navbar-dark bg-primary" id="sideNav">
  <a class="navbar-brand js-scroll-trigger" href="#page-top">
    <span class="d-none d-lg-block">
      <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="./resources/images/profile.jpg" alt="Rahul Vennapusa">
    </span>
  </a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav">
      <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">About</a></li>
      <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
      <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#education">Education</a></li>
      <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
      <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#interests">Interests</a></li>
      <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#awards">Awards</a></li>
      <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#projects">Projects</a></li>
    </ul>
  </div>
</nav>

<div class="container-fluid p-0">

  <!-- About -->
  <section class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
    <div class="my-auto">
      <h3 class="mb-0">Rahul Vennapusa</h3>
      <div class="h9 mb-3">Bangalore
        <a href="mailto:v.rahul1719@gmail.com">v.rahul1719@gmail.com</a>
      </div>
      <p class="mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
      <ul class="list-inline list-social-icons mb-0">
        <li class="list-inline-item">
          <a href="https://www.facebook.com/v.rahul.reddy" target="_blank" rel="noopener noreferrer">
            <span class="fa-stack fa-lg">
              <i class="fa-solid fa-circle fa-stack-2x"></i>
              <i class="fa-brands fa-facebook fa-stack-1x fa-inverse"></i>
            </span>
          </a>
        </li>
        <li class="list-inline-item">
          <a href="https://twitter.com/VRahul1719" target="_blank" rel="noopener noreferrer">
            <span class="fa-stack fa-lg">
              <i class="fa-solid fa-circle fa-stack-2x"></i>
              <i class="fa-brands fa-twitter fa-stack-1x fa-inverse"></i>
            </span>
          </a>
        </li>
        <li class="list-inline-item">
          <a href="https://www.linkedin.com/in/vrahul1719/" target="_blank" rel="noopener noreferrer">
            <span class="fa-stack fa-lg">
              <i class="fa-solid fa-circle fa-stack-2x"></i>
              <i class="fa-brands fa-linkedin fa-stack-1x fa-inverse"></i>
            </span>
          </a>
        </li>
        <li class="list-inline-item">
          <a href="https://github.com/rahulvennapusa" target="_blank" rel="noopener noreferrer">
            <span class="fa-stack fa-lg">
              <i class="fa-solid fa-circle fa-stack-2x"></i>
              <i class="fa-brands fa-github fa-stack-1x fa-inverse"></i>
            </span>
          </a>
        </li>
      </ul>
    </div>
  </section>

  <hr class="m-0">

  <!-- Experience -->
  <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
    <div class="my-auto">
      <h3 class="mb-5">Experience</h3>

      <div class="resume-item d-flex flex-column flex-md-row mb-5">
        <div class="resume-content me-auto">
          <h4 class="mb-0">Application Specialist</h4>
          <div class="subheading mb-5">Schneider Electric</div>
        </div>
        <div class="resume-date text-md-right">
          <span class="text-primary">Sep 2016 - Present</span>
        </div>
      </div>

      <div class="resume-item d-flex flex-column flex-md-row mb-5">
        <div class="resume-content me-auto">
          <h4 class="mb-0">Sr Software Engineer</h4>
          <div class="subheading mb-5">Amplifi Commerce</div>
        </div>
        <div class="resume-date text-md-right">
          <span class="text-primary">May 2013 - Sep 2016</span>
        </div>
      </div>

      <div class="resume-item d-flex flex-column flex-md-row mb-5">
        <div class="resume-content me-auto">
          <h4 class="mb-0">Consultant</h4>
          <div class="subheading mb-5">CapGemini</div>
        </div>
        <div class="resume-date text-md-right">
          <span class="text-primary">July 2012 - May 2013</span>
        </div>
      </div>

      <div class="resume-item d-flex flex-column flex-md-row">
        <div class="resume-content me-auto">
          <h4 class="mb-0">Programmer Analyst</h4>
          <div class="subheading mb-5">Cognizant</div>
        </div>
        <div class="resume-date text-md-right">
          <span class="text-primary">Jan 2010 - July 2012</span>
        </div>
      </div>
    </div>
  </section>

  <hr class="m-0">

  <!-- Education -->
  <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
    <div class="my-auto">
      <h3 class="mb-3">Education</h3>

      <div class="resume-item d-flex flex-column flex-md-row mb-3">
        <div class="resume-content me-auto">
          <h4 class="mb-0">Visvesvaraya Technological University</h4>
          <div class="subheading mb-3">Bachelor of Engineering</div>
          <div>Computer Science</div>
        </div>
        <div class="resume-date text-md-right">
          <span class="text-primary">June 2005 - June 2009</span>
        </div>
      </div>
    </div>
  </section>

  <hr class="m-0">

  <!-- Skills -->
  <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
    <div class="my-auto">
      <h3 class="mb-3">Skills</h3>

      <div class="subheading mb-3">Programming Languages &amp; Tools</div>
      <ul class="list-inline list-icons">
        <li class="list-inline-item"><i class="fa-brands fa-java" title="Java"></i></li>
        <li class="list-inline-item"><i class="fa-brands fa-python" title="Python"></i></li>
        <li class="list-inline-item"><i class="fa-brands fa-linux" title="Linux"></i></li>
        <li class="list-inline-item"><i class="fa-solid fa-code" title="Groovy"></i></li>
        <li class="list-inline-item"><i class="fa-solid fa-server" title="Redis"></i></li>
        <li class="list-inline-item"><i class="fa-brands fa-bitbucket" title="Bitbucket"></i></li>
        <li class="list-inline-item"><i class="fa-solid fa-database" title="SQL"></i></li>
        <li class="list-inline-item"><i class="fa-brands fa-google" title="Google Analytics"></i></li>
        <li class="list-inline-item"><i class="fa-solid fa-leaf" title="MongoDB"></i></li>
        <li class="list-inline-item"><i class="fa-brands fa-node-js" title="Node.js"></i></li>
        <li class="list-inline-item"><i class="fa-solid fa-table-columns" title="Database"></i></li>
      </ul>

      <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center border-0">Java</li>
        <li class="list-group-item d-flex justify-content-between align-items-center border-0">Endeca Search</li>
        <li class="list-group-item d-flex justify-content-between align-items-center border-0">Python</li>
        <li class="list-group-item d-flex justify-content-between align-items-center border-0">Groovy and Grails</li>
        <li class="list-group-item d-flex justify-content-between align-items-center border-0">Spring</li>
        <li class="list-group-item d-flex justify-content-between align-items-center border-0">Solr</li>
        <li class="list-group-item d-flex justify-content-between align-items-center border-0">Oracle Endeca Information Discovery</li>
        <li class="list-group-item d-flex justify-content-between align-items-center border-0">Oracle 10g</li>
        <li class="list-group-item d-flex justify-content-between align-items-center border-0">Mysql</li>
        <li class="list-group-item d-flex justify-content-between align-items-center border-0">DynaTrace</li>
      </ul>

      <div class="subheading mb-3">Workflow</div>
      <ul class="fa-ul mb-0">
        <li><span class="fa-li"><i class="fa-solid fa-check"></i></span>Web Application Development using java and related web frameworks</li>
        <li><span class="fa-li"><i class="fa-solid fa-check"></i></span>Endeca search Implementation for e-commerce sites</li>
        <li><span class="fa-li"><i class="fa-solid fa-check"></i></span>Data Structures and Algorithms</li>
        <li><span class="fa-li"><i class="fa-solid fa-check"></i></span>Application Performance optimization and availability using dynatrace</li>
        <li><span class="fa-li"><i class="fa-solid fa-check"></i></span>Anlytics using Oracle Endeca Inforamtion Discovery and Enstien Analytics</li>
        <li><span class="fa-li"><i class="fa-solid fa-check"></i></span>Agile Development &amp; Scrum</li>
      </ul>
    </div>
  </section>

  <hr class="m-0">

  <!-- Interests -->
  <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
    <div class="my-auto">
      <h3 class="mb-3">Interests</h3>
      <p>Apart from being a application developer, I enjoy most of my time being outdoors.I enjoy biking and driving.</p>
      <p class="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I spend a large amount of my free time exploring the latest technolgy advancements.</p>
    </div>
  </section>

  <hr class="m-0">

  <!-- Awards -->
  <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
    <h3 class="mb-3">Awards</h3>
    <ul class="fa-ul mb-0">
      <li>
        <span class="fa-li"><i class="fa-solid fa-trophy text-warning"></i></span>
        Czar of the Month: For the best performance in the team.
      </li>
      <li>
        <span class="fa-li"><i class="fa-solid fa-trophy text-warning"></i></span>
        Rainmaker: For the valuable contribution to the project and organization.
      </li>
    </ul>
  </section>

  <hr class="m-0">

  <!-- Projects -->
  <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="projects">
    <h3 class="mb-3">Projects</h3>
    <div class="row">

      <div class="card" style="width: 12rem;">
        <a href="https://www.apc.com/us/en/" target="_blank" rel="noopener noreferrer">
          <img class="card-img-top" src="./resources/images/APC_logo.png" alt="APC">
          <div class="card-body"><h6 class="card-title">APC</h6></div>
        </a>
      </div>

      <div class="card" style="width: 12rem;">
        <a href="https://www.stage.com" target="_blank" rel="noopener noreferrer">
          <img class="card-img-top" src="./resources/images/StageStores-logo.jpg" alt="Stage Stores">
          <div class="card-body"><h6 class="card-title">Stage Store</h6></div>
        </a>
      </div>

      <div class="card" style="width: 12rem;">
        <a href="https://www.4wd.com" target="_blank" rel="noopener noreferrer">
          <img class="card-img-top" src="./resources/images/tap.jpg" alt="Transamerican Auto Parts Company">
          <div class="card-body"><h6 class="card-title">Transamerican Auto Parts Company</h6></div>
        </a>
      </div>

      <div class="card" style="width: 12rem;">
        <a href="https://www.cellsignal.com" target="_blank" rel="noopener noreferrer">
          <img class="card-img-top" src="./resources/images/cst.jpg" alt="Cell Signaling Technology">
          <div class="card-body"><h6 class="card-title">Cell Signaling Technology</h6></div>
        </a>
      </div>

      <div class="card" style="width: 12rem;">
        <a href="https://www.la-z-boy.com" target="_blank" rel="noopener noreferrer">
          <img class="card-img-top" src="./resources/images/lazboy.png" alt="La-Z-Boy">
          <div class="card-body"><h6 class="card-title">La-Z-Boy</h6></div>
        </a>
      </div>

      <div class="card" style="width: 12rem;">
        <img class="card-img-top" src="./resources/images/beachbody.jpg" alt="BeachBody">
        <div class="card-body"><h6 class="card-title">BeachBody</h6></div>
      </div>

      <div class="card" style="width: 12rem;">
        <a href="https://www.barnesandnoble.com" target="_blank" rel="noopener noreferrer">
          <img class="card-img-top" src="./resources/images/bn.png" alt="Barnes &amp; Noble">
          <div class="card-body"><h6 class="card-title">Barnes &amp; Noble</h6></div>
        </a>
      </div>

      <div class="card" style="width: 12rem;">
        <a href="https://www.eddiebauer.com" target="_blank" rel="noopener noreferrer">
          <img class="card-img-top" src="./resources/images/eddie-bauer-logo.png" alt="Eddie Bauer">
          <div class="card-body"><h6 class="card-title">Eddie Bauer</h6></div>
        </a>
      </div>

      <div class="card" style="width: 12rem;">
        <img class="card-img-top" src="./resources/images/Disney.jpg" alt="Disney">
        <div class="card-body"><h6 class="card-title">Disney</h6></div>
      </div>

      <div class="card" style="width: 12rem;">
        <a href="https://www.walgreens.com" target="_blank" rel="noopener noreferrer">
          <img class="card-img-top" src="./resources/images/Walgreens.png" alt="Walgreens">
          <div class="card-body"><h6 class="card-title">Walgreens</h6></div>
        </a>
      </div>

      <div class="card" style="width: 12rem;">
        <img class="card-img-top" src="./resources/images/Lowe's_logo.png" alt="Lowe&#8217;s">
        <div class="card-body"><h6 class="card-title">Lowe&#8217;s</h6></div>
      </div>

      <div class="card" style="width: 12rem;">
        <img class="card-img-top" src="./resources/images/Firmenich.jpeg" alt="Firmenich">
        <div class="card-body"><h6 class="card-title">Firmenich</h6></div>
      </div>

    </div>
  </section>

</div>

<!-- Footer -->
<footer class="py-5" style="background-color: black;">
  <div class="container">
    <p class="m-0 text-center text-white">Copyright &copy; rahulvennapusa.com 2018</p>
  </div>
</footer>

<!-- Bootstrap 5 JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
<!-- Custom scripts -->
<script src="./resources/js/about.js"></script>

</body>
</html>
```

- [ ] **Step 2: Verify no nested html tags remain**

Run: `grep -c '<html' index.html`
Expected output: `1`

- [ ] **Step 3: Verify no jQuery or old Bootstrap local script refs remain**

Run: `grep -n 'jquery\|bootstrap.bundle\|font-awesome\|devicons\|simple-line' index.html`
Expected: zero matches.

- [ ] **Step 4: Verify no h8 elements remain**

Run: `grep -c '<h8' index.html`
Expected output: `0`

- [ ] **Step 5: Verify footer quote is closed**

Run: `grep 'footer' index.html`
Expected: `<footer class="py-5" style="background-color: black;">` — no unclosed quote.

- [ ] **Step 6: Commit**

```bash
git add index.html
git commit -m "feat: rebuild index.html with Bootstrap 5, fix all HTML bugs"
```

---

### Task 4: Rewrite blog.html

**Files:**
- Modify: `blog.html` (full rewrite)

- [ ] **Step 1: Write the new blog.html**

Replace the entire contents of `blog.html` with:

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="Rahul Vennapusa — Blog covering Enterprise Search, Java, Performance, Python, and software development.">
  <meta name="author" content="Rahul Vennapusa">

  <!-- Open Graph -->
  <meta property="og:title" content="Rahul Vennapusa | Blog">
  <meta property="og:description" content="Blog covering Enterprise Search, Java, Performance, Python, and software development.">
  <meta property="og:type" content="website">

  <title>Rahul Vennapusa | Blog</title>

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">

  <!-- Bootstrap 5 -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

  <!-- Font Awesome 6 -->
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet" integrity="sha384-/o6I2CkkWC//PSjvWC/eYN7l3xM3tJm8ZzVkCOfp//W05QcE3mlGskpoHB6XqI+B" crossorigin="anonymous">

  <!-- Custom styles -->
  <link href="./resources/blog-home.css" rel="stylesheet">
</head>

<body>

<!-- Navigation -->
<nav class="navbar navbar-expand-lg navbar-dark fixed-top" style="background-color: black;">
  <div class="container">
    <a class="navbar-brand" href="./index.html">Rahul Vennapusa</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link" href="./index.html">Home</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="./blog.html">Blog</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<!-- Page Content -->
<div class="container">
  <div class="row">

    <!-- Blog Entries Column -->
    <div class="col-md-8">

      <div class="row">
        <div class="card mb-4" style="width: 18rem;">
          <i class="fas fa-search fa-7x" style="height: 50%; align-self: center;"></i>
          <div class="card text-center">
            <div class="card-body">
              <h2 class="card-title">Search</h2>
              <a href="https://rahulvennapusa.wordpress.com/category/search/" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Read More →</a>
            </div>
          </div>
        </div>

        <div class="card mb-4" style="width: 18rem;">
          <i class="fa-brands fa-java fa-7x" style="height: 50%; align-self: center;"></i>
          <div class="card text-center">
            <div class="card-body">
              <h2 class="card-title">Performance</h2>
              <a href="https://rahulvennapusa.wordpress.com/category/performance/" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Read More →</a>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="card mb-4" style="width: 18rem;">
          <i class="fa-brands fa-python fa-7x" style="height: 50%; align-self: center;"></i>
          <div class="card text-center">
            <div class="card-body">
              <h2 class="card-title">Python</h2>
              <a href="https://rahulvennapusa.wordpress.com/category/python/" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Read More →</a>
            </div>
          </div>
        </div>

        <div class="card mb-4" style="width: 18rem;">
          <i class="fas fa-laptop fa-7x" style="height: 50%; align-self: center;"></i>
          <div class="card text-center">
            <div class="card-body">
              <h2 class="card-title">Miscellaneous</h2>
              <a href="https://rahulvennapusa.wordpress.com/" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Read More →</a>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- Sidebar -->
    <div class="col-md-4">

      <div class="card my-4">
        <h5 class="card-header">Categories</h5>
        <div class="card-body">
          <div class="row">
            <div class="col-lg-6">
              <ul class="list-unstyled mb-0">
                <li><a href="https://rahulvennapusa.wordpress.com/category/search/" target="_blank" rel="noopener noreferrer">Enterprise Search</a></li>
                <li><a href="https://rahulvennapusa.wordpress.com" target="_blank" rel="noopener noreferrer">Java</a></li>
                <li><a href="https://rahulvennapusa.wordpress.com/category/python/" target="_blank" rel="noopener noreferrer">Python</a></li>
              </ul>
            </div>
            <div class="col-lg-6">
              <ul class="list-unstyled mb-0">
                <li><a href="https://rahulvennapusa.wordpress.com" target="_blank" rel="noopener noreferrer">Tutorials</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="card my-4">
        <h5 class="card-header">Updates</h5>
        <div class="card-body">
          <a href="https://twitter.com/VRahul1719" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-x-twitter"></i> Follow @VRahul1719 on X
          </a>
        </div>
      </div>

    </div>

  </div>
</div>

<!-- Footer -->
<footer class="py-5" style="background-color: black;">
  <div class="container">
    <p class="m-0 text-center text-white">Copyright &copy; rahulvennapusa.com 2018</p>
  </div>
</footer>

<!-- Bootstrap 5 JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

</body>
</html>
```

- [ ] **Step 2: Verify no Twitter script tags remain**

Run: `grep -c 'twitter\|platform.twitter' blog.html`
Expected output: the only matches should be the follow link href (`twitter.com/VRahul1719`). Run:
```bash
grep 'twitter' blog.html
```
Expected: one line containing the `<a href="https://twitter.com/VRahul1719"` anchor. No `<script>` or `<iframe>` lines.

- [ ] **Step 3: Verify footer quote is closed**

Run: `grep 'footer' blog.html`
Expected: `<footer class="py-5" style="background-color: black;">` — clean, no unclosed quote.

- [ ] **Step 4: Verify single html tag**

Run: `grep -c '<html' blog.html`
Expected output: `1`

- [ ] **Step 5: Commit**

```bash
git add blog.html
git commit -m "feat: rebuild blog.html with Bootstrap 5, remove broken Twitter widget"
```

---

### Task 5: Visual verification

**Files:** none (read-only verification)

The local Python server started before implementation should still be running on port 8899. If it stopped, restart it: `python3 -m http.server 8899 &`

- [ ] **Step 1: Hard-reload index.html and take full-page screenshot**

Navigate Playwright to `http://localhost:8899/index.html` (hard reload), take a full-page screenshot.

Check the screenshot for:
- Side nav visible on left with dark background
- Profile image circular in sidebar
- All sections rendering (About, Experience, Education, Skills, Interests, Awards, Projects)
- Social icons visible in About section (FA6 circle-stacked icons)
- Skill icons visible (FA6 brands/solid icons)
- Footer visible at bottom with copyright text
- No broken layout or blank sections

- [ ] **Step 2: Check browser console for errors**

Expected: 0 errors. Any 404s for CDN resources indicate a CDN URL typo — fix the URL in index.html.

- [ ] **Step 3: Hard-reload blog.html and take full-page screenshot**

Navigate Playwright to `http://localhost:8899/blog.html`, take full-page screenshot.

Check:
- Black top navbar
- 4 blog category cards with FA6 icons
- Sidebar with Categories + Updates cards
- Updates card shows plain "Follow @VRahul1719 on X" link (no iframe, no broken widget)
- Footer visible with copyright text

- [ ] **Step 4: Check browser console for blog.html**

Expected: 0 errors. The old site had 3 console errors (all Twitter-related) — these should be gone.

- [ ] **Step 5: Final commit with plan file**

```bash
git add docs/superpowers/plans/2026-06-12-portfolio-rebuild.md
git commit -m "docs: add portfolio rebuild implementation plan"
```
