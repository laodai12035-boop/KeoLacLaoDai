/* =====================================================
   PRODUCTS DATA & RENDERING — products.js
   ===================================================== */

const PRODUCT_IMAGES = {
  // We'll use the flatlay image for all products with CSS object-position tricks
  main: 'assets/products_flatlay.png',
  hero: 'assets/hero_banner.png',
};

window.PRODUCTS = [
  {
    id: 'mat-mia-250',
    name: 'Kẹo Lạc Mật Mía',
    variant: '250g',
    price: 30000,
    originalPrice: 55000,
    badge: 'Bán chạy',
    badgeType: 'hot',
    desc: 'Vị ngọt thanh của mật mía hòa quyện cùng lạc rang thơm bùi.',
    category: 'mat-mia',
    featured: true,
    img: 'assets/unnamed.jpg',
    imgPos: 'center top',
    details: {
      ingredients: 'Lạc đỏ, mật mía, muối tinh',
      storage: 'Bảo quản nơi khô ráo, tránh ánh nắng',
      shelf: '60 ngày kể từ ngày sản xuất',
      weight: '250g netto',
    }
  },
  {
    id: 'mat-mia-500',
    name: 'Kẹo Lạc Mật Mía',
    variant: '500g',
    price: 85000,
    originalPrice: null,
    badge: 'Phổ biến',
    badgeType: '',
    desc: 'Túi gia đình – bổ dưỡng, vừa miệng, hợp quà biếu.',
    category: 'mat-mia',
    featured: false,
    img: 'assets/products_flatlay.png',
    imgPos: 'center 30%',
    details: {
      ingredients: 'Lạc đỏ, mật mía, muối tinh',
      storage: 'Bảo quản nơi khô ráo, tránh ánh nắng',
      shelf: '60 ngày kể từ ngày sản xuất',
      weight: '500g netto',
    }
  },
  {
    id: 'mat-mia-1kg',
    name: 'Kẹo Lạc Mật Mía',
    variant: '1 kg',
    price: 160000,
    originalPrice: 180000,
    badge: 'Tiết kiệm',
    badgeType: 'new',
    desc: 'Hộp đại gia đình – hương vị đậm đà, giá trị cao.',
    category: 'mat-mia',
    featured: false,
    img: 'assets/products_flatlay.png',
    imgPos: 'center 60%',
    details: {
      ingredients: 'Lạc đỏ, mật mía, muối tinh',
      storage: 'Bảo quản nơi khô ráo, tránh ánh nắng',
      shelf: '60 ngày kể từ ngày sản xuất',
      weight: '1kg netto',
    }
  },
  {
    id: 'vung-den-250',
    name: 'Kẹo Lạc Vừng Đen',
    variant: '250g',
    price: 50000,
    originalPrice: null,
    badge: 'Mới',
    badgeType: 'new',
    desc: 'Kẹo lạc phủ vừng đen rang – thơm bùi, giàu dinh dưỡng.',
    category: 'vung-den',
    featured: true,
    img: 'assets/hero_banner.png',
    imgPos: 'center 40%',
    details: {
      ingredients: 'Lạc đỏ, vừng đen, mật mía, muối tinh',
      storage: 'Bảo quản nơi khô ráo, tránh ánh nắng',
      shelf: '45 ngày kể từ ngày sản xuất',
      weight: '250g netto',
    }
  },
  {
    id: 'vung-den-500',
    name: 'Kẹo Lạc Vừng Đen',
    variant: '500g',
    price: 92000,
    originalPrice: 105000,
    badge: 'Hot',
    badgeType: 'hot',
    desc: 'Kết hợp hoàn hảo giữa lạc rang và vừng đen mịn màng.',
    category: 'vung-den',
    featured: false,
    img: 'assets/hero_banner.png',
    imgPos: 'center 50%',
    details: {
      ingredients: 'Lạc đỏ, vừng đen, mật mía, muối tinh',
      storage: 'Bảo quản nơi khô ráo, tránh ánh nắng',
      shelf: '45 ngày kể từ ngày sản xuất',
      weight: '500g netto',
    }
  },
  {
    id: 'gung-250',
    name: 'Kẹo Lạc Gừng',
    variant: '250g',
    price: 48000,
    originalPrice: null,
    badge: 'Đặc biệt',
    badgeType: '',
    desc: 'Hương gừng ấm nồng kết hợp lạc rang – thức uống kèm trà tuyệt vời.',
    category: 'gung',
    featured: true,
    img: 'assets/products_flatlay.png',
    imgPos: 'center bottom',
    details: {
      ingredients: 'Lạc đỏ, gừng tươi, mật mía, muối tinh',
      storage: 'Bảo quản nơi khô ráo, tránh ánh nắng',
      shelf: '45 ngày kể từ ngày sản xuất',
      weight: '250g netto',
    }
  },
  {
    id: 'hop-qua-500',
    name: 'Hộp Quà Tết Lão Đại',
    variant: 'Hộp 500g',
    price: 145000,
    originalPrice: 165000,
    badge: 'Quà tặng',
    badgeType: '',
    desc: 'Hộp thiếc thủ công đựng kẹo lạc hảo hạng – món quà ý nghĩa cho mọi dịp.',
    category: 'hop-qua',
    featured: false,
    img: 'assets/hero_banner.png',
    imgPos: 'right top',
    details: {
      ingredients: 'Nhiều vị: Mật mía, Vừng đen, Gừng',
      storage: 'Bảo quản nơi khô ráo, tránh ánh nắng',
      shelf: '60 ngày kể từ ngày sản xuất',
      weight: '500g (hộp thiếc)',
    }
  },
  {
    id: 'hop-qua-1kg',
    name: 'Hộp Quà Đặc Biệt',
    variant: 'Hộp 1kg',
    price: 265000,
    originalPrice: 295000,
    badge: 'Cao cấp',
    badgeType: 'new',
    desc: 'Bộ quà tặng cao cấp gồm 3 hương vị trong hộp gỗ khắc tên theo yêu cầu.',
    category: 'hop-qua',
    featured: false,
    img: 'assets/products_flatlay.png',
    imgPos: 'left center',
    details: {
      ingredients: 'Nhiều vị: Mật mía, Vừng đen, Gừng',
      storage: 'Bảo quản nơi khô ráo, tránh ánh nắng',
      shelf: '60 ngày kể từ ngày sản xuất',
      weight: '1kg (hộp gỗ)',
    }
  },
];

/**
 * Format VND price
 */
function formatPrice(price) {
  return price.toLocaleString('vi-VN') + 'đ';
}

/**
 * Render a single product card
 */
function renderProductCard(p) {
  const badgeHtml = p.badge
    ? `<span class="product-badge ${p.badgeType}">${p.badge}</span>`
    : '';
  const strikeHtml = p.originalPrice
    ? `<s style="font-size:0.75rem;color:var(--text-muted);font-family:'Be Vietnam Pro',sans-serif;">${formatPrice(p.originalPrice)}</s> `
    : '';
  return `
    <div class="product-card reveal" data-id="${p.id}" onclick="selectProduct('${p.id}')">
      <div class="product-img-wrap">
        ${badgeHtml}
        <img src="${p.img}" alt="${p.name} ${p.variant}" style="object-position:${p.imgPos}" loading="lazy" />
      </div>
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <p class="product-desc">${p.variant} · ${p.desc}</p>
        <div class="product-footer">
          <div class="product-price">
            <small>${strikeHtml}${p.variant}</small>
            ${formatPrice(p.price)}
          </div>
          <button class="btn-buy" title="Đặt ngay" onclick="event.stopPropagation(); quickBuy('${p.id}')">🛒</button>
        </div>
      </div>
    </div>
  `;
}

/**
 * Add events after rendering
 */
function addProductCardEvents() {
  // Reveal animations
  observeReveal();
}

/**
 * Quick buy button → redirect to order page with pre-selected product
 */
function quickBuy(productId) {
  sessionStorage.setItem('quickBuyProduct', productId);
  window.location.href = 'order.html';
}

/**
 * Select product card (navigation or highlight)
 */
function selectProduct(productId) {
  sessionStorage.setItem('quickBuyProduct', productId);
  window.location.href = 'order.html';
}

/**
 * Intersection Observer for .reveal elements
 */
function observeReveal() {
  const items = document.querySelectorAll('.reveal:not(.visible)');
  if (!items.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  items.forEach(el => observer.observe(el));
}
