const NAV_HTML = `
<nav class="navbar">
  <a href="index.html" class="nav-logo">Monia<span>.</span>dev</a>
  <button class="hamburger" id="hamburger" aria-label="Toggle navigation" aria-expanded="false">
    <span></span>
    <span></span>
    <span></span>
  </button>
  <ul class="nav-links" id="nav-links" role="list">
    <li><a href="index.html">Home</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="projects.html">Projects</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
</nav>`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="footer-links">
    <a href="mailto:thiagobillieri@outlook.com" aria-label="Email">
      <i class="fas fa-envelope"></i>
    </a>
    <a href="https://linkedin.com/in/YOUR-LINKEDIN" target="_blank" rel="noopener" aria-label="LinkedIn">
      <i class="fab fa-linkedin"></i>
    </a>
    <a href="https://github.com/YOUR-GITHUB" target="_blank" rel="noopener" aria-label="GitHub">
      <i class="fab fa-github"></i>
    </a>
  </div>
  <p class="footer-copy">&copy; 2026 Monia Favaro</p>
</footer>`;

function setActiveNav() {
  const filename = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === filename) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const navEl = document.getElementById('nav-placeholder');
  const footerEl = document.getElementById('footer-placeholder');
  if (navEl) navEl.innerHTML = NAV_HTML;
  if (footerEl) footerEl.innerHTML = FOOTER_HTML;
  setActiveNav();
});
