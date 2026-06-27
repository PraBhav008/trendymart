/* ==========================================
   TrendyMart – Shared JavaScript
   ========================================== */

/* --- Product Data --- */
const PRODUCTS = [
  { id:1,  name:'Classic White Sneakers', category:'Footwear',    price:1299, oldPrice:1799, rating:4.8, reviews:342, badge:'sale',  img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80', description:'Timeless white sneakers with premium leather upper and cushioned sole. Perfect for everyday wear.' },
  { id:2,  name:'Urban Denim Jacket',     category:'Outerwear',   price:2499, oldPrice:null, rating:4.6, reviews:187, badge:'new',   img:'https://images.unsplash.com/photo-1601333144130-8cbb312386b6?w=600&q=80', description:'A modern take on the classic denim jacket with slim fit and distressed detailing.' },
  { id:3,  name:'Floral Midi Dress',      category:'Dresses',     price:1899, oldPrice:2499, rating:4.9, reviews:521, badge:'hot',   img:'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80', description:'Light and breezy floral midi dress made from 100% sustainable cotton.' },
  { id:4,  name:'Leather Crossbody Bag',  category:'Accessories', price:3299, oldPrice:null, rating:4.7, reviews:264, badge:'new',   img:'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80', description:'Premium genuine leather crossbody bag with gold-tone hardware and adjustable strap.' },
  { id:5,  name:'Slim Chino Trousers',    category:'Bottoms',     price:1599, oldPrice:2099, rating:4.5, reviews:198, badge:'sale',  img:'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80', description:'Versatile slim-fit chinos in a variety of classic and seasonal colors.' },
  { id:6,  name:'Oversized Knit Sweater', category:'Tops',        price:1799, oldPrice:null, rating:4.8, reviews:305, badge:null,    img:'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80', description:'Ultra-soft oversized knit sweater in a relaxed silhouette. Perfect for cooler days.' },
  { id:7,  name:'Canvas Tote Bag',        category:'Accessories', price:699,  oldPrice:999,  rating:4.4, reviews:89,  badge:'sale',  img:'https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&q=80', description:'Eco-friendly canvas tote with reinforced handles and interior pocket.' },
  { id:8,  name:'Silk Blouse',            category:'Tops',        price:2299, oldPrice:null, rating:4.9, reviews:412, badge:'new',   img:'https://images.unsplash.com/photo-1581497396202-5645e76a3a8e?w=600&q=80', description:'Luxurious silk blouse with a relaxed drape and elegant button-through design.' },
  { id:9,  name:'Running Shoes',          category:'Footwear',    price:2799, oldPrice:3499, rating:4.7, reviews:631, badge:'sale',  img:'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80', description:'Lightweight performance running shoes with responsive foam cushioning.' },
  { id:10, name:'Wide-Leg Trousers',      category:'Bottoms',     price:1999, oldPrice:null, rating:4.6, reviews:156, badge:'new',   img:'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80', description:'Sophisticated wide-leg trousers with a high-rise waist and flowing silhouette.' },
  { id:11, name:'Striped Linen Shirt',    category:'Tops',        price:1399, oldPrice:1799, rating:4.5, reviews:223, badge:'sale',  img:'https://images.unsplash.com/photo-1594938298603-c8148c4b4357?w=600&q=80', description:'Breathable linen shirt with classic stripe pattern, ideal for warm weather.' },
  { id:12, name:'Block-Heel Sandals',     category:'Footwear',    price:1999, oldPrice:null, rating:4.8, reviews:178, badge:'hot',   img:'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80', description:'Elegant block-heel sandals with adjustable ankle strap, comfortable for all-day wear.' },
  { id:13, name:'Graphic Print Tee',      category:'Tops',        price:799,  oldPrice:1099, rating:4.3, reviews:94,  badge:'sale',  img:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80', description:'Bold graphic tee made from 100% organic cotton with premium screen print.' },
  { id:14, name:'Mini Backpack',          category:'Accessories', price:2199, oldPrice:null, rating:4.6, reviews:267, badge:'new',   img:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80', description:'Stylish mini backpack with multiple compartments and adjustable padded straps.' },
  { id:15, name:'Wrap Maxi Dress',        category:'Dresses',     price:2599, oldPrice:3199, rating:4.7, reviews:389, badge:'sale',  img:'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80', description:'Effortlessly chic wrap maxi dress in a vibrant floral print.' },
  { id:16, name:'Statement Sunglasses',   category:'Accessories', price:1499, oldPrice:null, rating:4.9, reviews:445, badge:'hot',   img:'https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600&q=80', description:'Bold oversized frames with UV400 protection and premium acetate construction.' },
];

const CATEGORIES = [
  { name:'Dresses',     icon:'👗', count:24, color:'#FFE8E8' },
  { name:'Tops',        icon:'👕', count:38, color:'#E8F4FF' },
  { name:'Bottoms',     icon:'👖', count:19, color:'#E8FFEE' },
  { name:'Outerwear',   icon:'🧥', count:15, color:'#FFF4E8' },
  { name:'Footwear',    icon:'👟', count:32, color:'#F0E8FF' },
  { name:'Accessories', icon:'👜', count:41, color:'#FFFFE8' },
];

/* --- Cart Store --- */
const Cart = {
  get items() {
    try { return JSON.parse(localStorage.getItem('tm_cart') || '[]'); }
    catch { return []; }
  },
  save(items) { localStorage.setItem('tm_cart', JSON.stringify(items)); },
  add(productId, qty = 1) {
    const items = this.items;
    const existing = items.find(i => i.id === productId);
    if (existing) { existing.qty += qty; }
    else { items.push({ id: productId, qty }); }
    this.save(items);
    this._updateBadge();
    showToast('✅', 'Added to cart!');
  },
  remove(productId) {
    this.save(this.items.filter(i => i.id !== productId));
    this._updateBadge();
  },
  updateQty(productId, qty) {
    const items = this.items;
    const item = items.find(i => i.id === productId);
    if (item) { item.qty = Math.max(1, qty); this.save(items); }
    this._updateBadge();
  },
  clear() { this.save([]); this._updateBadge(); },
  get count() { return this.items.reduce((s, i) => s + i.qty, 0); },
  get total() {
    return this.items.reduce((s, i) => {
      const p = PRODUCTS.find(p => p.id === i.id);
      return s + (p ? p.price * i.qty : 0);
    }, 0);
  },
  _updateBadge() {
    document.querySelectorAll('.cart-badge').forEach(el => {
      el.textContent = this.count;
      el.style.display = this.count ? 'flex' : 'none';
      el.classList.add('bump');
      setTimeout(() => el.classList.remove('bump'), 400);
    });
  }
};

/* --- Toast --- */
function showToast(icon, message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span class="toast-icon">${icon}</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('hide');
    setTimeout(() => toast.remove(), 350);
  }, 2500);
}

/* --- Wishlist --- */
const Wishlist = {
  get items() {
    try { return JSON.parse(localStorage.getItem('tm_wish') || '[]'); }
    catch { return []; }
  },
  toggle(id) {
    const items = this.items;
    const idx = items.indexOf(id);
    if (idx > -1) { items.splice(idx, 1); showToast('💔','Removed from wishlist'); }
    else { items.push(id); showToast('❤️','Added to wishlist!'); }
    localStorage.setItem('tm_wish', JSON.stringify(items));
  },
  has(id) { return this.items.includes(id); }
};

/* --- Shared Render Helpers --- */
function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(5 - full - half);
}

function formatPrice(p) { return '₹' + p.toLocaleString('en-IN'); }

function renderProductCard(product) {
  const discount = product.oldPrice
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : null;
  const wishIcon = Wishlist.has(product.id) ? '❤️' : '🤍';
  return `
    <div class="product-card reveal" data-id="${product.id}">
      <div class="product-card-img">
        <img src="${product.img}" alt="${product.name}" loading="lazy">
        <div class="product-card-badges">
          ${product.badge ? `<span class="badge badge-${product.badge}">${product.badge}</span>` : ''}
        </div>
        <div class="product-card-actions">
          <button class="card-action-btn wish-btn" data-id="${product.id}" title="Wishlist">${wishIcon}</button>
          <button class="card-action-btn" onclick="window.location='pages/product.html?id=${product.id}'" title="Quick view">👁</button>
        </div>
        <button class="quick-add" onclick="Cart.add(${product.id})">+ Add to Cart</button>
      </div>
      <div class="product-card-info">
        <div class="product-card-cat">${product.category}</div>
        <div class="product-card-name">${product.name}</div>
        <div class="product-card-rating">
          <span class="stars">${renderStars(product.rating)}</span>
          <span class="rating-count">(${product.reviews})</span>
        </div>
        <div class="product-card-price">
          <span class="price-current">${formatPrice(product.price)}</span>
          ${product.oldPrice ? `<span class="price-old">${formatPrice(product.oldPrice)}</span>` : ''}
          ${discount ? `<span class="price-off">-${discount}%</span>` : ''}
        </div>
      </div>
    </div>
  `;
}

/* --- Navbar Init --- */
function initNav() {
  // Scroll effect
  window.addEventListener('scroll', () => {
    document.querySelector('.navbar')?.classList.toggle('scrolled', window.scrollY > 20);
  });

  // Cart badge
  Cart._updateBadge();

  // Mobile menu
  document.querySelector('.nav-hamburger')?.addEventListener('click', () => {
    document.querySelector('.mobile-menu')?.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
  document.querySelector('.mobile-menu-close')?.addEventListener('click', () => {
    document.querySelector('.mobile-menu')?.classList.remove('open');
    document.body.style.overflow = '';
  });

  // Wishlist buttons delegation
  document.addEventListener('click', e => {
    const wb = e.target.closest('.wish-btn');
    if (wb) {
      const id = parseInt(wb.dataset.id);
      Wishlist.toggle(id);
      wb.textContent = Wishlist.has(id) ? '❤️' : '🤍';
    }
  });
}

/* --- Scroll Reveal --- */
function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

/* --- Search redirect --- */
function handleSearch(e) {
  if (e.type === 'keydown' && e.key !== 'Enter') return;
  const q = (e.target.value || document.querySelector('.nav-search input')?.value || '').trim();
  if (q) {
    const base = window.location.pathname.includes('/pages/') ? 'shop.html' : 'pages/shop.html';
    window.location = `${base}?search=${encodeURIComponent(q)}`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initReveal();
  document.querySelector('.nav-search input')?.addEventListener('keydown', handleSearch);
});
