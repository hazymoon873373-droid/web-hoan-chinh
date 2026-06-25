
// Khoi chay cac hieu ung trang chu
    // PAGE INTRO
    var intro = document.getElementById('pageIntro');
    if (intro) {
      setTimeout(function () { intro.classList.add('intro-hide'); }, 2200);
      setTimeout(function () { intro.style.display = 'none'; }, 2900);
    }

    // PARALLAX HERO
    var heroBg = document.getElementById('heroBg');
    if (heroBg) {
      var hImg = heroBg.querySelector('img');
      if (hImg) {
        var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        hImg.style.transform = 'translateY(0) scale(1.08)';
        if (!prefersReduced) {
          window.addEventListener('scroll', function () {
            var sy = window.scrollY;
            if (sy < window.innerHeight) hImg.style.transform = 'translateY(' + (sy * 0.28) + 'px) scale(1.08)';
          }, { passive: true });
        }
      }
    }

    // MARQUEE PAUSE ON HOVER
    var marquee = document.getElementById('catMarquee');
    if (marquee) {
      marquee.addEventListener('mouseenter', function () { marquee.style.animationPlayState = 'paused'; });
      marquee.addEventListener('mouseleave', function () { marquee.style.animationPlayState = 'running'; });
    }

    // CART
    window.addToCart = function(product) {
      if (!window.AquaCare || !window.AquaCare.account || !window.AquaCare.account.isSignedIn()) {
        if (window.AquaCare && typeof window.AquaCare.openAccount === 'function') {
          window.AquaCare.openAccount('login');
        }
        showToast('Vui lòng đăng nhập trước khi mua hàng!');
        return false;
      }
      if (window.AquaCare && window.AquaCare.cart) {
        return window.AquaCare.cart.add(product, 1);
      }
      showToast('Không thể mở giỏ hàng. Vui lòng tải lại trang.');
      return false;
    };

    function showToast(msg) {
      var t = document.getElementById('toastNotif');
      t.textContent = msg;
      t.classList.add('show');
      setTimeout(function() { t.classList.remove('show'); }, 2800);
    }

    // PRODUCT DATA
    var products = [
      // Hệ thống lọc
      { id: 1, name: 'Lọc thùng AquaPro X1200', cat: 'he-thong-loc', catLabel: 'Hệ thống lọc', desc: 'Lưu lượng 12.000L/h • 5 ngăn lọc', price: '2.890.000đ', rating: 4.5, reviews: 128, image: 'assets/images/products/thiet-bi/loc-thung-sunsun-xiaoli-xwa-600.webp', badge: 'ban-chay', badgeText: 'Bán chạy', meta: '65×42×55cm' },
      { id: 2, name: 'Thức Ăn Koi Growth 1.5kg', cat: 'thuc-an', catLabel: 'Thức ăn', desc: 'Cám Koi Growth tăng trưởng, lên màu đẹp', price: '320.000đ', rating: 4.5, reviews: 215, image: 'assets/images/products/thuc-an/cam-ca-koi-kibakoi.jpeg', badge: 'ban-chay', badgeText: 'Bán chạy', meta: '1.5kg' },
      { id: 3, name: 'Vi Sinh Aqua Bacteria 1000ml', cat: 'thuoc-vi-sinh', catLabel: 'Vi sinh', desc: 'Vi sinh xử lý nước, cân bằng hệ sinh thái hồ', price: '280.000đ', rating: 4.5, reviews: 87, image: 'assets/images/products/thuoc-vi-sinh/vi-sinh-koika-em-perfect.jpeg', badge: 'moi', badgeText: 'Mới', meta: '1000ml' },
      { id: 4, name: 'Vật Liệu Lọc Ceramic Ring 1L', cat: 'vat-lieu-loc', catLabel: 'Vật liệu lọc', desc: 'Bi gốm ceramic, hỗ trợ vi sinh phát triển', price: '89.000đ', priceOld: '105.000đ', discount: '-15%', rating: 4.5, reviews: 73, image: 'assets/images/products/vat-lieu-loc/bi-den-dai-loan.jpg', badge: 'sale', badgeText: '-15%', meta: 'Túi 1L' },
      { id: 5, name: 'Cám cá Koi Sakura 1kg', cat: 'thuc-an', catLabel: 'Thức ăn', desc: 'Tăng màu rực rỡ, hỗ trợ tiêu hóa tốt', price: '195.000đ', rating: 4.9, reviews: 164, image: 'assets/images/products/thuc-an/cam-ca-koi-sakura.jpg', badge: 'ban-chay', badgeText: 'Bán chạy', meta: '1kg' },
      { id: 6, name: 'Máy bơm Hsbao FP', cat: 'thiet-bi', catLabel: 'Thiết bị', desc: 'Máy bơm đẩy mạnh mẽ, tiết kiệm điện', price: '450.000đ', rating: 4.6, reviews: 52, image: 'assets/images/products/thiet-bi/may-bom-day-hsbao-fp.webp', badge: '', badgeText: '', meta: 'Công suất 35W' },
      { id: 7, name: 'Đèn LED Aqua Plus Apollo 11', cat: 'thiet-bi', catLabel: 'Thiết bị', desc: '11 chế độ màu, điều khiển từ xa, IP68', price: '680.000đ', rating: 4.7, reviews: 39, image: 'assets/images/products/thiet-bi/den-led-aqua-plus-apollo-11-mau.webp', badge: 'moi', badgeText: 'Mới', meta: 'Chống nước IP68' },
      { id: 8, name: 'Hạt lọc Kaldnes 500g', cat: 'vat-lieu-loc', catLabel: 'Vật liệu lọc', desc: 'Moving bed filter media, hiệu quả cao', price: '55.000đ', rating: 4.9, reviews: 98, image: 'assets/images/products/vat-lieu-loc/hat-loc-kaldnes.webp', badge: 'ban-chay', badgeText: 'Bán chạy', meta: 'Túi 500g' },
      { id: 9, name: 'Cây Dương Xỉ Java', cat: 'cay-thuy-sinh', catLabel: 'Cây thủy sinh', desc: 'Cây thủy sinh dễ trồng, lọc nước tự nhiên', price: '35.000đ', rating: 4.8, reviews: 143, image: 'assets/images/products/cay-thuy-sinh/duong-xi-java.webp', badge: '', badgeText: '', meta: 'Bụi nhỏ' },
      { id: 10, name: 'Thuốc trị nấm Anti Shep', cat: 'thuoc-vi-sinh', catLabel: 'Thuốc vi sinh', desc: 'Trị nấm, ký sinh trùng hiệu quả nhanh', price: '85.000đ', rating: 4.7, reviews: 67, image: 'assets/images/products/thuoc-vi-sinh/thuoc-tri-nam-anti-shep.jpg', badge: '', badgeText: '', meta: '100ml' },
      { id: 11, name: 'Cám cá Koi bản cao cấp', cat: 'thuc-an', catLabel: 'Thức ăn', desc: 'Dòng cao cấp, tăng màu và giữ dáng cá', price: '220.000đ', rating: 4.9, reviews: 88, image: 'assets/images/products/thuc-an/cam-ca-koi-ban-cao-cap.jpg', badge: 'moi', badgeText: 'Mới', meta: '1kg' },
      { id: 12, name: 'Máy lọc chìm Jingye 15W', cat: 'thiet-bi', catLabel: 'Thiết bị', desc: 'Lọc chìm bể cá mini, hoạt động êm ái', price: '185.000đ', rating: 4.6, reviews: 44, image: 'assets/images/products/thiet-bi/may-loc-chim-jingye-15w.webp', badge: '', badgeText: '', meta: '15W' },
    ];

    // Render stars
    function renderStars(rating) {
      var full = Math.floor(rating);
      var half = (rating - full) >= 0.5 ? 1 : 0;
      var empty = 5 - full - half;
      var html = '';
      for (var i = 0; i < full; i++) html += '★';
      if (half) html += '⯨';
      for (var j = 0; j < empty; j++) html += '☆';
      return html;
    }

    // Render product card
    function renderCard(p) {
      return '<div class="col-6 col-md-4 col-lg-3 product-item" data-cat="' + p.cat + '">' +
        '<div class="product-card-new">' +
          (p.badge ? '<span class="product-badge ' + p.badge + '">' + p.badgeText + '</span>' : '') +
          '<div class="product-img-wrap">' +
            '<img src="' + p.image + '" alt="' + p.name + '" loading="lazy" onerror="this.src=\'assets/images/categories/phu-kien.png\'">' +
          '</div>' +
          '<div class="product-card-body">' +
            '<span class="product-cat-label">' + p.catLabel + '</span>' +
            '<h5 class="product-name">' + p.name + '</h5>' +
            '<p class="product-meta-info">' + p.desc + '</p>' +
            '<div class="product-stars">' +
              '<span class="stars">' + renderStars(p.rating) + '</span>' +
              '<span class="review-count">(' + p.reviews + ')</span>' +
            '</div>' +
            '<div class="product-price-row">' +
              '<span class="product-price">' + p.price + '</span>' +
              (p.priceOld ? '<span class="product-price-old">' + p.priceOld + '</span>' : '') +
              (p.discount ? '<span class="product-discount">' + p.discount + '</span>' : '') +
            '</div>' +
            '<div class="product-actions">' +
              '<button class="btn-mua-ngay" onclick="openBuyModal(' + p.id + ')"><i class="bi bi-cart3 me-1"></i>Mua ngay</button>' +
              '<button class="btn-xem-chi-tiet" onclick="openProductModal(' + p.id + ')">Chi tiết</button>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';
    }

    function renderProducts(cat) {
      var grid = document.getElementById('productGrid');
      var filtered = cat === 'all' ? products : products.filter(function(p) { return p.cat === cat; });
      grid.innerHTML = filtered.map(renderCard).join('');
    }

    // Filter tabs
    document.querySelectorAll('.filter-tab').forEach(function(btn) {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-tab').forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        renderProducts(btn.getAttribute('data-cat'));
      });
    });

    // Modal
    window.openProductModal = function(id) {
      var p = products.find(function(x) { return x.id === id; });
      if (!p) return;
      document.getElementById('modalProductName').textContent = p.name;
      document.getElementById('modalProductImg').src = p.image;
      document.getElementById('modalProductImg').alt = p.name;
      document.getElementById('modalProductImg').onerror = function() { this.src = 'assets/images/categories/phu-kien.png'; };
      document.getElementById('modalPrice').textContent = p.price;
      document.getElementById('modalDesc').textContent = p.desc + ' — Quy cách: ' + p.meta;
      document.getElementById('modalMeta').textContent = p.meta;
      document.getElementById('modalStars').textContent = renderStars(p.rating);
      document.getElementById('modalReviews').textContent = '(' + p.reviews + ' đánh giá)';
      var badge = document.getElementById('modalBadge');
      if (p.badge) {
        badge.className = 'product-badge ' + p.badge;
        badge.textContent = p.badgeText;
        badge.style.display = 'inline-block';
      } else {
        badge.style.display = 'none';
      }
      document.getElementById('modalBuyBtn').onclick = function() {
        bootstrap.Modal.getInstance(document.getElementById('productModal')).hide();
        openBuyModal(p.id);
      };
      new bootstrap.Modal(document.getElementById('productModal')).show();
    };

    // Initial render
    renderProducts('all');

    // Scroll reveal
    var revealEls = document.querySelectorAll('[data-reveal]');
    if (revealEls.length) {
      var io = new IntersectionObserver(function(entries) {
        entries.forEach(function(e) {
          if (e.isIntersecting) {
            var delay = e.target.getAttribute('data-reveal-delay') || 0;
            setTimeout(function() { e.target.classList.add('rv-visible'); }, parseInt(delay));
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.12 });
      revealEls.forEach(function(el) { io.observe(el); });
    }

    // ==========================================
    // VALIDATION & QUICK PURCHASE LOGIC (HOMEPAGE)
    // ==========================================
    var customerRules = {
      name: /^[\p{L}\p{M}\s'.-]{2,60}$/u,
      phone: /^(0|\+84)[0-9\s.-]{9,14}$/,
      email: /^[A-Za-z0-9._%+-]+@gmail\.com$/,
      address: /^[^<>]{8,160}$/
    };

    var currentBuyProduct = null;
    var tempPayCode = '';

    function generatePayCode() {
      if (!tempPayCode) {
        tempPayCode = 'AQ-' + Math.floor(10000 + Math.random() * 90000);
      }
      return tempPayCode;
    }

    function prefillCustomerForm(prefix) {
      if (window.AquaCare && typeof window.AquaCare.account.getSignedInProfile === 'function') {
        var profile = window.AquaCare.account.getSignedInProfile();
        if (profile) {
          var nameInput = document.getElementById(prefix + 'CustomerName');
          var phoneInput = document.getElementById(prefix + 'CustomerPhone');
          var emailInput = document.getElementById(prefix + 'CustomerEmail');
          var addressInput = document.getElementById(prefix + 'CustomerAddress');
          if (nameInput && !nameInput.value) nameInput.value = profile.name || '';
          if (emailInput && !emailInput.value) emailInput.value = profile.email || '';
        }
      }
    }

    function setFieldState(input, ok) {
      input.style.borderColor = ok ? '#d0e8f5' : '#d32f2f';
      input.style.background = ok ? 'white' : '#fff7f7';
    }

    window.togglePayDetails = function(prefix, method) {
      var container = document.getElementById(prefix + 'PayDetails');
      if (!container) return;
      if (method === 'cod') {
        container.style.display = 'none';
        container.innerHTML = '';
        return;
      }
      var payCode = generatePayCode();
      container.style.display = 'block';
      if (method === 'vietqr') {
        container.innerHTML = 
          '<div style="background:#f4fbff;border:1.5px dashed #1a9dd0;border-radius:12px;padding:12px;display:flex;gap:12px;align-items:center;">' +
            '<div style="width:76px;height:76px;background:white;border-radius:8px;border:1px solid #d0e8f5;display:flex;align-items:center;justify-content:center;flex-shrink:0;">' +
              '<i class="bi bi-qr-code" style="font-size:3.2rem;color:#0a2540;"></i>' +
            '</div>' +
            '<div style="font-size:0.73rem;color:var(--color-text-dark);line-height:1.45;">' +
              '<strong style="color:#1a9dd0;display:block;margin-bottom:2px;font-size:0.78rem;">QUÉT MÃ VIETQR ĐỂ THANH TOÁN</strong>' +
              '<strong>Ngân hàng:</strong> MB Bank<br>' +
              '<strong>Chủ TK:</strong> CÔNG TY AQUA CARE VIỆT NAM<br>' +
              '<strong>STK:</strong> 1902 0625 8888<br>' +
              '<strong>Nội dung:</strong> <span style="font-family:monospace;background:#e1f5fe;padding:2px 6px;border-radius:4px;color:#0b76a6;font-weight:700;">' + payCode + '</span>' +
            '</div>' +
          '</div>';
      } else if (method === 'momo') {
        container.innerHTML = 
          '<div style="background:#fcf2f7;border:1.5px dashed #a30062;border-radius:12px;padding:12px;display:flex;gap:12px;align-items:center;">' +
            '<div style="width:76px;height:76px;background:white;border-radius:8px;border:1px solid #f7d4e5;display:flex;align-items:center;justify-content:center;flex-shrink:0;">' +
              '<i class="bi bi-qr-code" style="font-size:3.2rem;color:#a30062;"></i>' +
            '</div>' +
            '<div style="font-size:0.73rem;color:var(--color-text-dark);line-height:1.45;">' +
              '<strong style="color:#a30062;display:block;margin-bottom:2px;font-size:0.78rem;">QUÉT MÃ VÍ MOMO ĐỂ THANH TOÁN</strong>' +
              '<strong>Tên ví:</strong> Aqua Care Việt Nam<br>' +
              '<strong>Số điện thoại:</strong> 0946 887 332<br>' +
              '<strong>Nội dung:</strong> <span style="font-family:monospace;background:#fce4ec;padding:2px 6px;border-radius:4px;color:#c2185b;font-weight:700;">' + payCode + '</span>' +
            '</div>' +
          '</div>';
      } else if (method === 'visa') {
        container.innerHTML = 
          '<div style="background:#fffaf4;border:1.5px solid #f57c00;border-radius:12px;padding:12px;">' +
            '<div style="font-weight:700;font-size:0.76rem;color:#e65100;margin-bottom:6px;"><i class="bi bi-shield-lock-fill"></i> CỔNG THANH TOÁN VISA/MASTER</div>' +
            '<div style="display:grid;grid-template-columns:1fr;gap:6px;">' +
              '<input type="text" placeholder="Số thẻ (16 chữ số)" style="width:100%;border:1px solid #ffd180;border-radius:6px;padding:5px 8px;font-size:0.75rem;outline:none;" oninput="this.value = this.value.replace(/\\D/g, \'\').replace(/(.{4})/g, \'$1 \').trim()">' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">' +
                '<input type="text" placeholder="MM/YY" style="width:100%;border:1px solid #ffd180;border-radius:6px;padding:5px 8px;font-size:0.75rem;outline:none;" oninput="this.value = this.value.replace(/\\D/g, \'\').replace(/(\\d{2})(\\d{2})/, \'$1/$2\')">' +
                '<input type="password" placeholder="CVV" style="width:100%;border:1px solid #ffd180;border-radius:6px;padding:5px 8px;font-size:0.75rem;outline:none;" oninput="this.value = this.value.replace(/\\D/g, \'\')">' +
              '</div>' +
            '</div>' +
          '</div>';
      }
    };

    window.openBuyModal = function(id) {
      if (!window.AquaCare || !window.AquaCare.account || !window.AquaCare.account.isSignedIn()) {
        if (window.AquaCare && typeof window.AquaCare.openAccount === 'function') {
          window.AquaCare.openAccount('login');
        }
        showToast('Vui lòng đăng nhập trước khi mua hàng!');
        return;
      }
      var p = products.find(function(x) { return x.id === id; });
      if (!p) return;
      currentBuyProduct = p;

      document.getElementById('buyModalName').textContent = p.name;
      document.getElementById('buyModalImg').src = p.image;
      document.getElementById('buyModalPrice').textContent = p.price;
      document.getElementById('buyModalDesc').textContent = p.desc;
      
      var badge = document.getElementById('buyModalBadge');
      if (p.badge) {
        badge.className = 'product-badge ' + p.badge;
        badge.textContent = p.badgeText || 'Mới';
        badge.style.display = 'inline-block';
      } else {
        badge.style.display = 'none';
      }

      tempPayCode = '';
      var det = document.getElementById('buyPayDetails');
      if (det) { det.style.display = 'none'; det.innerHTML = ''; }
      var codRadio = document.querySelector('input[name="buyPayMethod"][value="cod"]');
      if (codRadio) codRadio.checked = true;

      document.getElementById('buyQtyInput').value = 1;
      ['Name','Phone','Email','Address'].forEach(function(field) {
        var input = document.getElementById('buyCustomer' + field);
        if (input) { input.value = ''; setFieldState(input, true); }
      });
      prefillCustomerForm('buy');
      document.getElementById('buyFormError').style.display = 'none';
      updateBuyTotal();

      new bootstrap.Modal(document.getElementById('buyModal')).show();
    };

    function updateBuyTotal() {
      var p = currentBuyProduct;
      if (!p) return;
      var qty = parseInt(document.getElementById('buyQtyInput').value) || 1;
      var priceVal = parseInt(p.price.replace(/[^0-9]/g, '')) || 0;
      var total = priceVal * qty;
      document.getElementById('buyModalTotal').textContent = 'Tổng: ' + total.toLocaleString('vi-VN') + 'đ';
    }

    window.changeBuyQty = function(d) {
      var inp = document.getElementById('buyQtyInput');
      var v = parseInt(inp.value) || 1;
      inp.value = Math.max(1, Math.min(99, v + d));
      updateBuyTotal();
    };

    function validateCustomerForm(prefix) {
      var fields = {
        name: document.getElementById(prefix + 'CustomerName'),
        phone: document.getElementById(prefix + 'CustomerPhone'),
        email: document.getElementById(prefix + 'CustomerEmail'),
        address: document.getElementById(prefix + 'CustomerAddress')
      };
      var errorEl = document.getElementById(prefix + 'FormError');
      var messages = [];
      Object.keys(fields).forEach(function(key) {
        var input = fields[key];
        var value = (input.value || '').trim();
        var ok = customerRules[key].test(value);
        setFieldState(input, ok);
        if (!ok) {
          if (key === 'name') messages.push('Họ tên phải từ 2-60 ký tự.');
          if (key === 'phone') messages.push('Số điện thoại phải có 10-11 chữ số.');
          if (key === 'email') messages.push('Email phải kết thúc bằng @gmail.com.');
          if (key === 'address') messages.push('Địa chỉ phải từ 8-160 ký tự.');
        }
      });
      if (messages.length) {
        errorEl.textContent = messages[0];
        errorEl.style.display = 'block';
        return null;
      }
      errorEl.style.display = 'none';
      return {
        name: fields.name.value.trim(),
        address: fields.address.value.trim()
      };
    }

    window.confirmBuyNow = function() {
      if (!currentBuyProduct) return;
      var customer = validateCustomerForm('buy');
      if (!customer) return;
      
      var buyModal = bootstrap.Modal.getInstance(document.getElementById('buyModal'));
      if (buyModal) buyModal.hide();

      var payMethod = 'cod';
      var checkedRadio = document.querySelector('input[name="buyPayMethod"]:checked');
      if (checkedRadio) payMethod = checkedRadio.value;

      showOrderStatusModal(customer.name, payMethod, generatePayCode());
    };

    // ==========================================
    // ORDER SIMULATION FOR HOMEPAGE
    // ==========================================
    var currentSimulationInterval = null;
    var currentSimulationTimeout = null;

    function getPayMethodLabel(method) {
      if (method === 'cod') return 'COD (Tiền mặt)';
      if (method === 'vietqr') return 'Chuyển khoản VietQR';
      if (method === 'momo') return 'Ví MoMo QR';
      if (method === 'visa') return 'Thẻ Visa/Master';
      return 'COD (Tiền mặt)';
    }

    function getAnimHTML(step) {
      if (step === 1) {
        return '<div class="receipt-container">' +
                 '<div class="receipt-line" style="width: 80%;"></div>' +
                 '<div class="receipt-line" style="width: 60%;"></div>' +
                 '<div class="receipt-line" style="width: 90%;"></div>' +
                 '<div class="receipt-line" style="width: 50%;"></div>' +
                 '<div class="receipt-scan-bar"></div>' +
               '</div>' +
               '<div style="margin-left: 20px; font-weight: 700; color: #0a2540; font-size: 0.88rem;">Hệ thống đang kiểm tra đơn hàng...</div>';
      }
      if (step === 2) {
        return '<div class="box-anim-wrap">' +
                 '<div class="box-container">' +
                   '<div class="box-lid-left"></div>' +
                   '<div class="box-lid-right"></div>' +
                 '</div>' +
                 '<div class="box-floor-shadow"></div>' +
               '</div>' +
               '<div style="margin-left: 20px; font-weight: 700; color: #8d6e63; font-size: 0.88rem;">Đang đóng gói sản phẩm...</div>';
      }
      if (step === 3) {
        return '<div class="shipper-container">' +
                 '<div class="road-scenery">' +
                   '<div class="road-element" style="animation-delay: 0s;"></div>' +
                   '<div class="road-element" style="animation-delay: 0.25s; left: 40%;"></div>' +
                   '<div class="road-element" style="animation-delay: 0.5s; left: 80%;"></div>' +
                 '</div>' +
                 '<div class="road-cloud" style="animation-delay: 0s; top: 10px; font-size: 1.2rem;"><i class="bi bi-cloud-fill"></i></div>' +
                 '<div class="road-cloud" style="animation-delay: 1.8s; top: 30px; font-size: 1rem;"><i class="bi bi-cloud-fill"></i></div>' +
                 '<div class="exhaust-smoke" style="animation-delay: 0s;"></div>' +
                 '<div class="exhaust-smoke" style="animation-delay: 0.5s;"></div>' +
                 '<div class="exhaust-smoke" style="animation-delay: 1.0s;"></div>' +
                 '<div class="scooter-body">' +
                   '<svg class="scooter-svg" viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg" style="width:75px;height:55px;">' +
                     '<g class="spinning-wheel-front">' +
                       '<circle cx="28" cy="58" r="9" fill="#37474f" stroke="#eceff1" stroke-width="2"/>' +
                       '<line x1="28" y1="49" x2="28" y2="67" stroke="#eceff1" stroke-width="1.5"/>' +
                       '<line x1="19" y1="58" x2="37" y2="58" stroke="#eceff1" stroke-width="1.5"/>' +
                       '<circle cx="28" cy="58" r="3" fill="#cfd8dc"/>' +
                     '</g>' +
                     '<g class="spinning-wheel-rear">' +
                       '<circle cx="72" cy="58" r="9" fill="#37474f" stroke="#eceff1" stroke-width="2"/>' +
                       '<line x1="72" y1="49" x2="72" y2="67" stroke="#eceff1" stroke-width="1.5"/>' +
                       '<line x1="63" y1="58" x2="81" y2="58" stroke="#eceff1" stroke-width="1.5"/>' +
                       '<circle cx="72" cy="58" r="3" fill="#cfd8dc"/>' +
                     '</g>' +
                     '<path d="M28 58 L48 58 L58 38 L72 58" stroke="#1a9dd0" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>' +
                     '<rect x="16" y="22" width="22" height="22" rx="2" fill="#ff9100"/>' +
                     '<text x="27" y="36" font-family="sans-serif" font-size="10" font-weight="bold" fill="white" text-anchor="middle">AQ</text>' +
                     '<path d="M58 38 L66 16 L62 13" stroke="#37474f" stroke-width="3" stroke-linecap="round" fill="none"/>' +
                     '<path d="M58 38 L68 38 L64 20" stroke="#1a9dd0" stroke-width="3" stroke-linecap="round" fill="none"/>' +
                     '<circle cx="48" cy="18" r="7" fill="#37474f"/>' +
                     '<path d="M48 25 L48 38 L38 41" stroke="#37474f" stroke-width="4" stroke-linecap="round" fill="none"/>' +
                   '</svg>' +
                 '</div>' +
                 '<div style="margin-left: 20px; font-weight: 700; color: #1a9dd0; font-size: 0.88rem; z-index: 10;">Shipper đang giao hàng...</div>' +
               '</div>';
      }
      if (step === 4) {
        return '<div class="delivered-success-icon"><i class="bi bi-check-circle-fill"></i></div>' +
               '<div style="margin-left: 15px; font-weight: 700; color: #2e7d32; font-size: 0.88rem; z-index: 10;">Giao hàng thành công!</div>' +
               '<div class="confetti-particle" style="background:#ffeb3b;left:10%;animation-delay:0s;animation-duration:2.5s;--drift:40px;"></div>' +
               '<div class="confetti-particle" style="background:#e91e63;left:25%;animation-delay:0.3s;animation-duration:1.8s;--drift:-35px;"></div>' +
               '<div class="confetti-particle" style="background:#2196f3;left:45%;animation-delay:0.1s;animation-duration:2.2s;--drift:25px;"></div>' +
               '<div class="confetti-particle" style="background:#4caf50;left:65%;animation-delay:0.5s;animation-duration:2.4s;--drift:-45px;"></div>' +
               '<div class="confetti-particle" style="background:#ff9800;left:85%;animation-delay:0.2s;animation-duration:1.5s;--drift:35px;"></div>';
      }
      return '';
    }

    function updateStepUI(activeStep) {
      var line = document.getElementById('osProgressLine');
      if (line) {
        var pct = ((activeStep - 1) / 3) * 100;
        line.style.width = pct + '%';
      }

      for (var i = 1; i <= 4; i++) {
        var node = document.getElementById('stepNode' + i);
        if (!node) continue;
        node.classList.remove('active', 'completed');
        if (i < activeStep) {
          node.classList.add('completed');
        } else if (i === activeStep) {
          node.classList.add('active');
        }
      }

      var animContainer = document.getElementById('osAnimContainer');
      if (animContainer) {
        animContainer.innerHTML = getAnimHTML(activeStep);
      }

      var badge = document.getElementById('osCurrentStatusBadge');
      if (badge) {
        if (activeStep === 1) {
          badge.textContent = 'Đã tiếp nhận';
          badge.style.background = '#1a9dd0';
        } else if (activeStep === 2) {
          badge.textContent = 'Đóng gói';
          badge.style.background = '#8d6e63';
        } else if (activeStep === 3) {
          badge.textContent = 'Đang giao';
          badge.style.background = '#ff9100';
        } else if (activeStep === 4) {
          badge.textContent = 'Đã giao';
          badge.style.background = '#2e7d32';
        }
      }
    }

    function addLogToUI(status, time, desc, isFirst) {
      var logList = document.getElementById('osHistoryLog');
      if (!logList) return;
      
      var row = document.createElement('div');
      row.style.display = 'flex';
      row.style.gap = '10px';
      row.style.fontSize = '0.78rem';
      row.style.lineHeight = '1.45';
      if (isFirst) {
        row.style.fontWeight = '700';
        row.style.color = '#1a2a3a';
      } else {
        row.style.color = '#78909c';
      }
      row.innerHTML = 
        '<span style="color:#1a9dd0;font-weight:700;white-space:nowrap;width:60px;">' + time + '</span>' +
        '<div style="flex:1;">' +
          '<strong>[' + status + ']</strong> ' + desc +
        '</div>';
      
      logList.insertBefore(row, logList.firstChild);
    }

    window.showOrderStatusModal = function(customerName, payMethod, orderId) {
      if (currentSimulationInterval) clearInterval(currentSimulationInterval);
      if (currentSimulationTimeout) clearTimeout(currentSimulationTimeout);

      var simBtn = document.getElementById('osSimulateBtn');
      if (simBtn) {
        simBtn.disabled = false;
        simBtn.innerHTML = '<i class="bi bi-play-circle-fill me-1"></i>Mô phỏng hành trình';
      }
      
      var closeBtn = document.getElementById('osCloseBtn');
      if (closeBtn) closeBtn.disabled = false;
      var finishBtn = document.getElementById('osFinishBtn');
      if (finishBtn) finishBtn.disabled = false;

      document.getElementById('osOrderId').textContent = orderId;
      document.getElementById('osPayMethodText').textContent = getPayMethodLabel(payMethod);

      var logList = document.getElementById('osHistoryLog');
      if (logList) logList.innerHTML = '';

      updateStepUI(1);

      var now = new Date();
      var timeStr = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
      
      var payDesc = 'Hệ thống đã tiếp nhận đơn đặt hàng của bạn và đang tiến hành xử lý.';
      if (payMethod === 'vietqr' || payMethod === 'momo') {
        payDesc = 'Giao dịch chuyển khoản đang được đối soát tự động trên hệ thống.';
      } else if (payMethod === 'visa') {
        payDesc = 'Giao dịch qua thẻ quốc tế đã được phê duyệt thành công.';
      }
      
      addLogToUI('Tiếp nhận', timeStr, payDesc, true);

      new bootstrap.Modal(document.getElementById('orderStatusModal')).show();
    };

    window.startOrderSimulation = function() {
      var simBtn = document.getElementById('osSimulateBtn');
      if (simBtn) {
        simBtn.disabled = true;
        simBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-1"></span>Đang mô phỏng...';
      }
      
      var closeBtn = document.getElementById('osCloseBtn');
      if (closeBtn) closeBtn.disabled = true;
      var finishBtn = document.getElementById('osFinishBtn');
      if (finishBtn) finishBtn.disabled = true;

      var currentStep = 1;
      
      currentSimulationInterval = setInterval(function() {
        currentStep++;
        if (currentStep > 4) {
          clearInterval(currentSimulationInterval);
          if (simBtn) simBtn.innerHTML = '<i class="bi bi-check-circle-fill me-1"></i>Mô phỏng hoàn tất';
          if (closeBtn) closeBtn.disabled = false;
          if (finishBtn) finishBtn.disabled = false;
          return;
        }

        updateStepUI(currentStep);
        
        var now = new Date();
        var timeStr = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
        
        if (currentStep === 2) {
          addLogToUI('Đóng gói', timeStr, 'Đơn hàng đang được bộ phận kho đóng hộp bảo vệ chuyên dụng.', true);
        } else if (currentStep === 3) {
          addLogToUI('Vận chuyển', timeStr, 'Đơn hàng đã bàn giao cho shipper của Aqua Express đang đi giao.', true);
        } else if (currentStep === 4) {
          addLogToUI('Đã giao', timeStr, 'Shipper báo đã giao sản phẩm thành công và khách hàng ký nhận.', true);
        }
      }, 4000);
    };

    // Tự động tạo bong bóng nước cho bể cá ảo chân trang
    (function () {
      var container = document.getElementById('aquariumAmbient');
      if (!container) return;
      
      function createBubble() {
        var bubble = document.createElement('div');
        bubble.className = 'aquarium-bubble';
        
        // Kích thước ngẫu nhiên từ 4px đến 14px
        var size = Math.floor(Math.random() * 10) + 4;
        bubble.style.width = size + 'px';
        bubble.style.height = size + 'px';
        
        // Vị trí ngẫu nhiên từ 2% đến 98% chiều ngang
        var left = Math.random() * 96 + 2;
        bubble.style.left = left + '%';
        
        // Thời gian bay ngẫu nhiên từ 4s đến 7s
        var duration = Math.random() * 3 + 4;
        bubble.style.animationDuration = duration + 's';
        
        container.appendChild(bubble);
        
        // Xóa bong bóng khỏi DOM sau khi hoàn thành animation bay lên
        setTimeout(function () {
          if (bubble.parentNode) {
            bubble.parentNode.removeChild(bubble);
          }
        }, duration * 1000);
      }
      
      // Tạo một số bong bóng ngẫu nhiên ban đầu để giao diện không bị trống
      for (var i = 0; i < 6; i++) {
        setTimeout(createBubble, Math.random() * 3000);
      }
      
      // Tạo bong bóng mới định kỳ mỗi 700ms
      setInterval(createBubble, 700);
    })();




