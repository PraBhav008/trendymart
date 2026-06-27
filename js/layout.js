/* ==========================================
   TrendyMart – Shared Layout Components
   ========================================== */

function renderNavbar(activePage = '') {
  const pages = ['Home','Shop','About','Contact'];
  const hrefs = {
    Home: '../index.html',
    Shop: 'shop.html',
    About: 'about.html',
    Contact: 'contact.html',
  };
  // Adjust hrefs for root-level pages
  const isRoot = !window.location.pathname.includes('/pages/');
  if (isRoot) {
    hrefs.Home = 'index.html';
    hrefs.Shop = 'pages/shop.html';
    hrefs.About = 'pages/about.html';
    hrefs.Contact = 'pages/contact.html';
  }

  const links = pages.map(p =>
    `<a href="${hrefs[p]}" class="${activePage === p ? 'active' : ''}">${p}</a>`
  ).join('');

  return `
<nav class="navbar">
  <div class="container nav-inner">
    <a href="${isRoot ? 'index.html' : '../index.html'}" class="nav-logo">Trendy<span>Mart</span></a>
    <div class="nav-links">${links}</div>
    <div class="nav-search">
      <svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
      <input type="search" placeholder="Search products…">
    </div>
    <div class="nav-actions">
      <button class="nav-action-btn" onclick="window.location='${isRoot?'pages/':''}cart.html'" title="Cart">
        🛒<span class="cart-badge" style="display:none">0</span>
      </button>
      <button class="nav-action-btn" title="Account">👤</button>
    </div>
    <button class="nav-hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<div class="mobile-menu">
  <button class="mobile-menu-close">✕</button>
  ${pages.map(p => `<a href="${hrefs[p]}">${p}</a>`).join('')}
  <a href="${isRoot?'pages/':''}cart.html">🛒 Cart</a>
</div>`;
}

function renderFooter() {
  return `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="nav-logo">Trendy<span style="color:var(--coral)">Mart</span></div>
        <p>Your go-to destination for the latest fashion trends. Quality clothing and accessories for every occasion.</p>
        <div class="footer-socials">
          <a href="#" class="social-btn" title="Instagram">📸</a>
          <a href="#" class="social-btn" title="Facebook">📘</a>
          <a href="#" class="social-btn" title="Twitter">🐦</a>
          <a href="#" class="social-btn" title="Pinterest">📌</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Shop</h4>
        <ul>
          <li><a href="#">New Arrivals</a></li>
          <li><a href="#">Best Sellers</a></li>
          <li><a href="#">Sale</a></li>
          <li><a href="#">Collections</a></li>
          <li><a href="#">Gift Cards</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Help</h4>
        <ul>
          <li><a href="#">Size Guide</a></li>
          <li><a href="#">Track Order</a></li>
          <li><a href="#">Returns</a></li>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Press</a></li>
          <li><a href="#">Sustainability</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2025 TrendyMart. All rights reserved. Demo website.</span>
      <div class="footer-payments">
        <span class="payment-badge">VISA</span>
        <span class="payment-badge">MC</span>
        <span class="payment-badge">UPI</span>
        <span class="payment-badge">PayTM</span>
        <span class="payment-badge">COD</span>
      </div>
    </div>
  </div>
</footer>`;
}

function renderNewsletter() {
  return `
<section class="newsletter-section">
  <div class="container">
    <div class="section-label">Exclusive Offers</div>
    <h2>Get 15% Off Your First Order</h2>
    <p>Subscribe to our newsletter for style tips, exclusive deals, and new arrivals.</p>
    <div class="newsletter-form">
      <input type="email" placeholder="Enter your email address…" id="nl-email">
      <button onclick="handleNewsletterSubmit()">Subscribe</button>
    </div>
  </div>
</section>`;
}

function handleNewsletterSubmit() {
  const email = document.getElementById('nl-email')?.value;
  if (email && email.includes('@')) {
    showToast('🎉', 'Subscribed! Check your email for your 15% off code.');
    if (document.getElementById('nl-email')) document.getElementById('nl-email').value = '';
  } else {
    showToast('⚠️', 'Please enter a valid email address.');
  }
}
