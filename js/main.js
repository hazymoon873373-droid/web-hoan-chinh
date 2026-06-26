// Check login status and redirect to homepage if not logged in
(function() {
  const sessionKey = 'aquaCareSessionV1';
  const profileKey = 'aquaCareProfileV1';
  const session = localStorage.getItem(sessionKey);
  const profile = localStorage.getItem(profileKey);
  const signedIn = !!(session && profile);
  
  const currentPage = window.location.pathname.split('/').pop();
  const isHomepage = !currentPage || currentPage === 'index.html' || currentPage === 'trang%20ch%E1%BB%A7.html' || currentPage === 'trang chủ.html';
  
  if (!signedIn && !isHomepage) {
    window.location.href = 'index.html';
  }
})();

document.addEventListener('DOMContentLoaded', () => {

    const navbar = document.getElementById('mainNav');
  const backToTop = document.getElementById('backToTop');

  const onScroll = () => {
    const scrolled = window.scrollY > 40;
    if (navbar) navbar.classList.toggle('scrolled', scrolled);
    if (backToTop) backToTop.classList.toggle('visible', window.scrollY > 480);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

    if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

    const navMenu = document.getElementById('navMenu');
  const productToggleLinks = document.querySelectorAll('.navbar .nav-item.dropdown > .dropdown-toggle[href*="san-pham.html"], .navbar .nav-item.dropdown > .dropdown-toggle[href="#"]');
  productToggleLinks.forEach((link) => {
    link.setAttribute('href', 'san-pham.html');
    link.removeAttribute('data-bs-toggle');
    link.setAttribute('aria-expanded', 'false');
  });

  if (navMenu) {
    const navLinks = navMenu.querySelectorAll('.nav-link:not(.dropdown-toggle), .dropdown-item');

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('show')) {
          const collapse = bootstrap.Collapse.getOrCreateInstance(navMenu);
          collapse.hide();
        }
      });
    });

    if (navbar) {
      navMenu.addEventListener('show.bs.collapse', () => navbar.classList.add('menu-open'));
      navMenu.addEventListener('hidden.bs.collapse', () => navbar.classList.remove('menu-open'));
    }
  }

    const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.navbar-nav .nav-link');

  if (sections.length && navItems.length) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navItems.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    sections.forEach((section) => sectionObserver.observe(section));
  }

    const revealSelectors = [
    '.category-card', '.why-card', '.inspiration-card',
    '.article-card', '.contact-card', '.trust-item',
    '.about-video', '.about-block', '.core-value', '.article-cta'
  ];

  const revealEls = document.querySelectorAll(revealSelectors.join(','));
  revealEls.forEach((el) => el.setAttribute('data-reveal', ''));

  if (revealEls.length) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealEls.forEach((el) => revealObserver.observe(el));
  }

    const playBtn = document.querySelector('.video-play-btn');
  if (playBtn) {
    playBtn.addEventListener('click', () => {
      playBtn.classList.toggle('is-playing');
      // Hook up a real <video> source here when media assets are ready.
    });
  }

    if (!document.getElementById('aquaChatWidget')) {
    const widget = document.createElement('div');
    widget.id = 'aquaChatWidget';
    widget.className = 'chat-widget';
    widget.innerHTML = `
      <div class="chat-panel" id="aquaChatPanel" aria-live="polite">
        <div class="chat-header">
          <div>
            <strong>Aqua Care tư vấn</strong>
            <small>Hỏi về sản phẩm, hồ cá, kỹ thuật, đơn hàng</small>
          </div>
          <button class="chat-close" type="button" aria-label="Đóng chat" id="aquaChatClose"><i class="bi bi-x-lg"></i></button>
        </div>
        <div class="chat-body" id="aquaChatBody"></div>
        <div class="chat-chips px-3 pb-2" id="aquaChatChips"></div>
        <div class="chat-input-row">
          <input type="text" id="aquaChatInput" placeholder="Nhập câu hỏi..." aria-label="Nhập câu hỏi">
          <button class="chat-send" type="button" id="aquaChatSend"><i class="bi bi-send"></i></button>
        </div>
      </div>
      <button class="chat-launcher" type="button" id="aquaChatToggle" aria-label="Mở chat">
        <i class="bi bi-chat-dots-fill"></i>
      </button>
    `;
    document.body.appendChild(widget);
  }

  const chatPanel = document.getElementById('aquaChatPanel');
  const chatBody = document.getElementById('aquaChatBody');
  const chatInput = document.getElementById('aquaChatInput');
  const chatSend = document.getElementById('aquaChatSend');
  const chatToggle = document.getElementById('aquaChatToggle');
  const chatClose = document.getElementById('aquaChatClose');
  const chatChips = document.getElementById('aquaChatChips');

  const chatState = {
    history: JSON.parse(localStorage.getItem('aquaChatHistory') || '[]')
  };

  const starterChips = [
    { label: 'Tư vấn hồ Koi', text: 'Tôi muốn tư vấn hồ Koi' },
    { label: 'Chọn sản phẩm', text: 'Gợi ý sản phẩm phù hợp' },
    { label: 'Bị đục nước', text: 'Hồ cá bị đục nước sau mưa' },
    { label: 'Liên hệ', text: 'Tôi muốn liên hệ Aqua Care' }
  ];

  function saveChat() {
    localStorage.setItem('aquaChatHistory', JSON.stringify(chatState.history.slice(-12)));
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');
  }

  function addMessage(text, role = 'bot') {
    const msg = { text, role };
    chatState.history.push(msg);
    saveChat();
    renderChat();
  }

  function renderChat() {
    if (!chatBody) return;
    chatBody.innerHTML = chatState.history.map((msg) => {
      if (msg.role === 'bot') {
        return `<div class="chat-msg bot">` +
          `<div class="chat-bot-avatar"><i class="bi bi-fish"></i></div>` +
          `<div class="chat-bubble">${msg.text}</div>` +
          `</div>`;
      } else {
        return `<div class="chat-msg user">` +
          `<div class="chat-bubble">${escapeHtml(msg.text)}</div>` +
          `</div>`;
      }
    }).join('');
    if (chatChips) {
      chatChips.innerHTML = starterChips.map((chip) => `<button class="chat-chip" type="button" data-chat-chip="${chip.text}">${chip.label}</button>`).join('');
      chatChips.querySelectorAll('[data-chat-chip]').forEach((btn) => {
        btn.addEventListener('click', () => {
          handleUserMessage(btn.getAttribute('data-chat-chip'));
        });
      });
    }
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function replyFor(text) {
    const q = text.toLowerCase();
    const prefix = '🤖 <strong>[AI Nemo]</strong>: ';
    
    // 1. Trích xuất & ghi nhớ tên người dùng
    const nameMatch = text.match(/(?:tên tôi là|tên mình là|mình tên là|mình là)\s+([\p{L}\s]{2,30})/ui);
    if (nameMatch) {
      const username = nameMatch[1].trim();
      sessionStorage.setItem('nemo_username', username);
      return prefix + `Chào <strong>${username}</strong> nhé! Nemo đã ghi nhớ tên của bạn rồi. Rất vui được trò chuyện cùng bạn! Bạn cần Nemo giúp gì hôm nay? 🐠`;
    }
    
    const username = sessionStorage.getItem('nemo_username') || '';
    const personalGreeting = username ? `<strong>${username}</strong> ơi, ` : '';

    // 2. Xử lý Trạng thái đang đợi thông số kích thước hồ (awaiting dimensions)
    if (sessionStorage.getItem('nemo_awaiting_dim') === 'true') {
      const dimMatch = text.match(/(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)/);
      if (dimMatch) {
        sessionStorage.removeItem('nemo_awaiting_dim');
        const l = parseFloat(dimMatch[1]);
        const w = parseFloat(dimMatch[2]);
        const h = parseFloat(dimMatch[3]);
        const volume = (l * w * h) / 1000;
        const pumpMin = Math.round(volume * 3);
        const pumpMax = Math.round(volume * 5);
        
        return prefix + `${personalGreeting}Nemo đã tính toán thông số hồ của bạn:<br>` +
          `\\(Kích\\ thước: L \\times W \\times H = ${l} \\times ${w} \\times ${h}\\) cm.<br>` +
          `\\(Thể\\ tích\\ nước: V = \\frac{${l} \\times ${w} \\times ${h}}{1.000} = ${volume.toFixed(1)}\\) Lít.<br>` +
          `\\(Lưu\\ lượng\\ bơm\\ khuyến\\ nghị: từ\\ ${pumpMin}\\ đến\\ ${pumpMax}\\) L/h.<br>` +
          `Nemo đề xuất sản phẩm máy bơm Hsbao FP-1500 phù hợp nhất với hồ này:` +
          `<div class="mt-2 p-2 border rounded bg-white text-center" style="max-width:220px; margin:8px auto 0;">` +
            `<img src="assets/images/products/thiet-bi/may-bom-day-hsbao-fp.webp" style="height:60px; object-fit:contain;" class="mb-1" onerror="this.src='assets/images/categories/phu-kien.png'">` +
            `<h6 class="m-0 text-dark text-truncate" style="font-size:0.75rem; font-weight:600;">Máy bơm Hsbao FP-1500</h6>` +
            `<span class="text-danger fw-bold d-block" style="font-size:0.72rem; margin-bottom:4px;">450.000đ</span>` +
            `<button class="btn btn-sm btn-primary w-100 py-1" style="font-size:0.68rem; font-weight:bold; border-radius:8px;" onclick="window.AquaCare.cart.add({id:6, name:'Máy bơm Hsbao FP-1500', priceRaw:450000}, 1); alert('✓ Đã thêm Máy bơm Hsbao FP-1500 vào giỏ hàng!');">Thêm vào giỏ</button>` +
          `</div>`;
      }
    }

    // 3. Xử lý Trạng thái đang đợi thông số pH (awaiting pH)
    if (sessionStorage.getItem('nemo_awaiting_ph') === 'true') {
      const phMatch = text.match(/(\d+(?:\.\d+)?)/);
      if (phMatch) {
        sessionStorage.removeItem('nemo_awaiting_ph');
        const ph = parseFloat(phMatch[1]);
        if (ph < 6.5) {
          return prefix + `${personalGreeting}Độ pH nước hồ của bạn thấp (pH = ${ph}) - nước đang bị axit hóa! Điều này rất có hại cho lớp chất nhớt bảo vệ da cá. Nemo đề xuất dùng San hô lọc để kiềm hóa, tăng pH tự nhiên:` +
            `<div class="mt-2 p-2 border rounded bg-white text-center" style="max-width:220px; margin:8px auto 0;">` +
              `<img src="assets/images/products/vat-lieu-loc/san-ho.webp" style="height:60px; object-fit:contain;" class="mb-1" onerror="this.src='assets/images/categories/phu-kien.png'">` +
              `<h6 class="m-0 text-dark text-truncate" style="font-size:0.75rem; font-weight:600;">San hô lọc</h6>` +
              `<span class="text-danger fw-bold d-block" style="font-size:0.72rem; margin-bottom:4px;">88.000đ</span>` +
              `<button class="btn btn-sm btn-primary w-100 py-1" style="font-size:0.68rem; font-weight:bold; border-radius:8px;" onclick="window.AquaCare.cart.add({id:39, name:'San hô lọc', priceRaw:88000}, 1); alert('✓ Đã thêm San hô lọc vào giỏ hàng!');">Thêm vào giỏ</button>` +
            `</div>`;
        } else if (ph > 8.0) {
          return prefix + `${personalGreeting}Độ pH nước hồ của bạn cao (pH = ${ph}) - nước có tính kiềm mạnh! Khí độc NH3 sẽ độc hơn gấp nhiều lần ở pH cao. Nemo khuyên bạn thay 20% nước và châm vi sinh Aqua Bacteria định kỳ để ổn định:` +
            `<div class="mt-2 p-2 border rounded bg-white text-center" style="max-width:220px; margin:8px auto 0;">` +
              `<img src="assets/images/products/thuoc-vi-sinh/vi-sinh-koika-em-perfect.jpeg" style="height:60px; object-fit:contain;" class="mb-1" onerror="this.src='assets/images/categories/phu-kien.png'">` +
              `<h6 class="m-0 text-dark text-truncate" style="font-size:0.75rem; font-weight:600;">Vi Sinh Aqua Bacteria 1000ml</h6>` +
              `<span class="text-danger fw-bold d-block" style="font-size:0.72rem; margin-bottom:4px;">280.000đ</span>` +
              `<button class="btn btn-sm btn-primary w-100 py-1" style="font-size:0.68rem; font-weight:bold; border-radius:8px;" onclick="window.AquaCare.cart.add({id:3, name:'Vi Sinh Aqua Bacteria 1000ml', priceRaw:280000}, 1); alert('✓ Đã thêm Vi sinh Aqua Bacteria vào giỏ hàng!');">Thêm vào giỏ</button>` +
            `</div>`;
        } else {
          return prefix + `${personalGreeting}Độ pH nước hồ cá của bạn rất đẹp (pH = ${ph})! Hãy duy trì bằng cách bổ sung sứ thanh Hoa Mai trong ngăn lọc để làm nhà trú ẩn lý tưởng cho vi sinh vật có lợi:` +
            `<div class="mt-2 p-2 border rounded bg-white text-center" style="max-width:220px; margin:8px auto 0;">` +
              `<img src="assets/images/products/vat-lieu-loc/su-thanh-hoa-mai.jpg" style="height:60px; object-fit:contain;" class="mb-1" onerror="this.src='assets/images/categories/phu-kien.png'">` +
              `<h6 class="m-0 text-dark text-truncate" style="font-size:0.75rem; font-weight:600;">Sứ thanh Hoa Mai 500g</h6>` +
              `<span class="text-danger fw-bold d-block" style="font-size:0.72rem; margin-bottom:4px;">65.000đ</span>` +
              `<button class="btn btn-sm btn-primary w-100 py-1" style="font-size:0.68rem; font-weight:bold; border-radius:8px;" onclick="window.AquaCare.cart.add({id:20, name:'Sứ thanh Hoa Mai 500g', priceRaw:65000}, 1); alert('✓ Đã thêm Sứ thanh Hoa Mai vào giỏ hàng!');">Thêm vào giỏ</button>` +
            `</div>`;
        }
      }
    }

    // 4. Kích hoạt tính thể tích hồ
    if (q.includes('tính thể tích') || q.includes('tính thể tích hồ') || q.includes('thể tích bể') || q.includes('tính bơm')) {
      sessionStorage.setItem('nemo_awaiting_dim', 'true');
      return prefix + `${personalGreeting}Hãy gõ 3 kích thước <strong>Dài Rộng Cao</strong> của hồ cá (ví dụ: <code>100 50 60</code>, cách nhau bằng khoảng trắng) để Nemo tính toán giúp nhé! 📐`;
    }

    // 5. Kích hoạt đo pH nước
    if (q.includes('ph nước') || q.includes('độ ph') || q.includes('chẩn đoán nước') || q.includes('nước hồ')) {
      sessionStorage.setItem('nemo_awaiting_ph', 'true');
      return prefix + `${personalGreeting}Hãy nhập chỉ số độ pH hiện tại của hồ cá (ví dụ: <code>6.5</code>) để Nemo đưa ra phân tích và giải pháp phù hợp nhé! 🧪`;
    }

    // Giao tiếp xã giao
    if (q.includes('chào') || q.includes('hello') || q.includes('hi') || q.includes('tên là gì') || q.includes('nemo') || q.includes('ai')) {
      return prefix + `Xin chào ${username || 'bạn'}! Nemo là Trợ lý AI chăm sóc khách hàng của Aqua Care. Nemo hỗ trợ tính thể tích hồ, kiểm tra pH nước và giới thiệu sản phẩm lọc, cám cá cảnh. Bạn cần Nemo giúp gì? 😊`;
    }
    
    if (q.includes('cảm ơn') || q.includes('cám ơn') || q.includes('thank')) {
      return prefix + `Nemo rất vui được hỗ trợ ${username || 'bạn'}! Chúc bạn có một hồ cá luôn sạch trong và đàn cá khỏe mạnh. Nếu cần thêm gì cứ gọi Nemo nhé! 🐟✨`;
    }

    // Các câu hỏi về hồ Koi & lọc nước
    if (q.includes('koi') || q.includes('hồ') || q.includes('bể cá') || q.includes('thiết kế')) {
      return prefix + `${personalGreeting}Hồ Koi cần bộ lọc hiệu quả. Nemo khuyên bạn dùng lọc thùng lớn hoặc lọc đa ngăn có Sứ lọc thanh Hoa Mai, hạt Kaldnes, chổi lọc và máy bơm tuần hoàn Hsbao. Xem ngay tại mục <a href="san-pham.html?category=he-thong-loc" style="color:#1a9dd0;font-weight:700;">Hệ thống lọc nước</a> hoặc xem bài viết cẩm nang ở <a href="kien-thuc.html" style="color:#1a9dd0;font-weight:700;">Trang kiến thức</a> nha!`;
    }
    
    // Nước đục, rêu hại, pH
    if (q.includes('đục') || q.includes('vàng') || q.includes('mùi') || q.includes('rêu') || q.includes('nước bẩn') || q.includes('tảo')) {
      return prefix + `${personalGreeting}Hồ cá bị đục hoặc xanh tảo thường do thiếu vi sinh hoặc lọc chưa ổn. Bạn nên thay 20% nước, vệ sinh bông lọc và châm Vi Sinh Aqua Bacteria cấp tốc. Xem sản phẩm vi sinh tại mục <a href="san-pham.html?category=thuoc-vi-sinh" style="color:#1a9dd0;font-weight:700;">Thuốc & Vi sinh</a> nha!`;
    }
    
    // Thức ăn & cám cá
    if (q.includes('thức ăn') || q.includes('cám') || q.includes('cho ăn') || q.includes('dinh dưỡng')) {
      return prefix + `${personalGreeting}Nemo khuyên cho cá ăn 1-2 lần/ngày, ăn hết trong 5 phút. Cám dinh dưỡng Koi Growth đạm cao 38% và sắc tố Astaxanthin hỗ trợ tăng màu đỏ rất tốt. Đặt mua nhanh tại đây:` +
        `<div class="mt-2 p-2 border rounded bg-white text-center" style="max-width:220px; margin:8px auto 0;">` +
          `<img src="assets/images/products/thuc-an/cam-ca-koi-kibakoi.jpeg" style="height:60px; object-fit:contain;" class="mb-1" onerror="this.src='assets/images/categories/phu-kien.png'">` +
          `<h6 class="m-0 text-dark text-truncate" style="font-size:0.75rem; font-weight:600;">Thức Ăn Koi Growth 1.5kg</h6>` +
          `<span class="text-danger fw-bold d-block" style="font-size:0.72rem; margin-bottom:4px;">320.000đ</span>` +
          `<button class="btn btn-sm btn-primary w-100 py-1" style="font-size:0.68rem; font-weight:bold; border-radius:8px;" onclick="window.AquaCare.cart.add({id:2, name:'Thức Ăn Koi Growth 1.5kg', priceRaw:320000}, 1); alert('✓ Đã thêm Thức Ăn Koi Growth vào giỏ hàng!');">Thêm vào giỏ</button>` +
        `</div>`;
    }
    
    // Bệnh cá
    if (q.includes('bệnh') || q.includes('nấm') || q.includes('đốm trắng') || q.includes('đỏ mình') || q.includes('cá cọ mình') || q.includes('cọ bể')) {
      return prefix + `${personalGreeting}Cá cọ bể hoặc nổi nốt trắng là biểu hiện của nấm trắng. Hãy cách ly cá, tăng nhiệt độ sưởi lên 30°C và đánh Thuốc trị nấm Anti Shep chuyên dụng để chữa trị hiệu quả:` +
        `<div class="mt-2 p-2 border rounded bg-white text-center" style="max-width:220px; margin:8px auto 0;">` +
          `<img src="assets/images/products/thuoc-vi-sinh/thuoc-tri-nam-anti-shep.jpg" style="height:60px; object-fit:contain;" class="mb-1" onerror="this.src='assets/images/categories/phu-kien.png'">` +
          `<h6 class="m-0 text-dark text-truncate" style="font-size:0.75rem; font-weight:600;">Thuốc trị nấm Anti Shep</h6>` +
          `<span class="text-danger fw-bold d-block" style="font-size:0.72rem; margin-bottom:4px;">85.000đ</span>` +
          `<button class="btn btn-sm btn-primary w-100 py-1" style="font-size:0.68rem; font-weight:bold; border-radius:8px;" onclick="window.AquaCare.cart.add({id:10, name:'Thuốc trị nấm Anti Shep', priceRaw:85000}, 1); alert('✓ Đã thêm Thuốc trị nấm Anti Shep vào giỏ hàng!');">Thêm vào giỏ</button>` +
        `</div>`;
    }
    
    // Giá cả, mua sỉ
    if (q.includes('giá') || q.includes('bao nhiêu') || q.includes('báo giá') || q.includes('chi phí') || q.includes('đại lý')) {
      return prefix + `${personalGreeting}Để nhận báo giá chi tiết sỉ hoặc chi phí lắp đặt thiết kế hồ Koi thi công, bạn vui lòng để lại Số điện thoại/Zalo ở đây hoặc qua <a href="lien-he.html" style="color:#1a9dd0;font-weight:700;">Trang liên hệ</a> nhé!`;
    }
    
    // Hướng dẫn đặt hàng & thanh toán
    if (q.includes('đặt hàng') || q.includes('mua hàng') || q.includes('thanh toán') || q.includes('vận chuyển') || q.includes('giao hàng')) {
      return prefix + `Mua sắm tại Aqua Care cực kì tiện lợi! Bạn chỉ cần thêm sản phẩm vào giỏ, điền thông tin giao hàng và chọn VietQR, Ví MoMo, Thẻ Visa hoặc COD. Hỗ trợ giao hỏa tốc tận nhà! 🚚💳`;
    }
    
    // Liên hệ kỹ thuật
    if (q.includes('liên hệ') || q.includes('hotline') || q.includes('sđt') || q.includes('zalo') || q.includes('cửa hàng') || q.includes('địa chỉ')) {
      return prefix + `Bạn có thể xem Hotline 24/7, email hỗ trợ và bản đồ địa điểm chỉ đường cụ thể của Aqua Care tại <a href="lien-he.html" style="color:#1a9dd0;font-weight:700;">Trang liên hệ</a> nhé!`;
    }

    return prefix + `Cảm ơn câu hỏi của bạn. Nemo khuyên bạn ghé xem <a href="kien-thuc.html" style="color:#1a9dd0;font-weight:700;">Cẩm nang chăm cá</a> hoặc nhập số điện thoại để tư vấn viên gọi lại tư vấn trực tiếp nha! 🐠`;
  }

  function handleUserMessage(text) {
    const clean = (text || '').trim();
    if (!clean) return;
    addMessage(clean, 'user');

    // Create temporary typing indicator element inside chatBody
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chat-msg bot';
    typingDiv.innerHTML = '<div class="chat-bot-avatar"><i class="bi bi-fish"></i></div><div class="chat-bubble"><div class="typing-indicator"><span></span><span></span><span></span></div></div>';
    chatBody.appendChild(typingDiv);
    chatBody.scrollTop = chatBody.scrollHeight;

    setTimeout(() => {
      typingDiv.remove();
      addMessage(replyFor(clean), 'bot');
    }, 800 + Math.random() * 400);
  }

  if (chatPanel && chatBody && chatInput && chatSend && chatToggle && chatClose) {
    if (!chatState.history.length) {
      chatState.history = [
        { role: 'bot', text: 'Xin chào, mình là Aqua Care. Bạn muốn tư vấn về sản phẩm, hồ cá hay cách xử lý nước?' }
      ];
      saveChat();
    }
    renderChat();

    const openChat = () => {
      chatPanel.classList.add('is-open');
      chatInput.focus();
    };

    const closeChat = () => {
      chatPanel.classList.remove('is-open');
    };

    chatToggle.addEventListener('click', () => {
      if (chatPanel.classList.contains('is-open')) closeChat();
      else openChat();
    });
    chatClose.addEventListener('click', closeChat);
    chatSend.addEventListener('click', () => {
      handleUserMessage(chatInput.value);
      chatInput.value = '';
    });
    chatInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        handleUserMessage(chatInput.value);
        chatInput.value = '';
      }
    });
  }

    const storageKeys = {
    cart: 'aquaCareCartV1',
    accounts: 'aquaCareAccountsV2',
    profile: 'aquaCareProfileV1',
    session: 'aquaCareSessionV1'
  };

  function readJson(key, fallback) {
    try {
      const value = JSON.parse(localStorage.getItem(key));
      return value ?? fallback;
    } catch (error) {
      return fallback;
    }
  }

  function writeJson(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function safeText(value) {
    return String(value ?? '')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');
  }

  function normalizeText(value) {
    return String(value ?? '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd')
      .replace(/Đ/g, 'D')
      .toLowerCase()
      .trim();
  }

  function parsePrice(value) {
    if (typeof value === 'number' && Number.isFinite(value)) return value;
    const digits = String(value ?? '').replace(/[^0-9]/g, '');
    return Number(digits) || 0;
  }

  function money(value) {
    return Number(value || 0).toLocaleString('vi-VN') + 'đ';
  }

  function notify(message) {
    let toast = document.getElementById('toastNotif');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'aquaGlobalToast';
      toast.className = 'aqua-global-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    window.clearTimeout(toast._hideTimer);
    toast._hideTimer = window.setTimeout(() => toast.classList.remove('show'), 2800);
  }

  const cartApi = {
    get() {
      const items = readJson(storageKeys.cart, []);
      return Array.isArray(items) ? items : [];
    },
    save(items) {
      writeJson(storageKeys.cart, items);
      syncCartBadges();
      renderSharedCart();
      window.dispatchEvent(new CustomEvent('aqua:cart-updated', { detail: { items } }));
    },
    count() {
      return this.get().reduce((sum, item) => sum + Number(item.qty || 0), 0);
    },
    add(product, qty = 1, options = {}) {
      if (!product || !product.name) return;
      if (!isSignedIn()) return promptSignInForCart('Vui lòng đăng nhập trước khi thêm sản phẩm vào giỏ hàng.');
      const quantity = Math.max(1, Math.min(99, Number.parseInt(qty, 10) || 1));
      const id = product.id == null ? '' : String(product.id);
      const key = id || normalizeText(product.name).replace(/\s+/g, '-');
      const priceRaw = parsePrice(product.priceRaw || product.price);
      const items = this.get();
      const existing = items.find((item) => item.key === key);
      if (existing) {
        existing.qty = Math.min(99, Number(existing.qty || 0) + quantity);
      } else {
        items.push({
          key,
          id,
          name: String(product.name),
          price: product.price ? String(product.price) : money(priceRaw),
          priceRaw,
          image: String(product.image || 'assets/images/categories/phu-kien.png'),
          qty: quantity
        });
      }
      this.save(items);
      if (!options.silent) notify('✓ Đã thêm vào giỏ: ' + product.name);
      return true;
    },
    change(key, delta) {
      const items = this.get();
      const item = items.find((entry) => entry.key === key);
      if (!item) return;
      item.qty = Math.max(1, Math.min(99, Number(item.qty || 1) + delta));
      this.save(items);
    },
    remove(key) {
      this.save(this.get().filter((item) => item.key !== key));
    },
    clear() {
      this.save([]);
    }
  };

  const searchIndex = [
    { title: 'Trang chủ', description: 'Khám phá Aqua Care', href: 'index.html', icon: 'bi-house-door', keywords: 'trang chu aqua care' },
    { title: 'Tất cả sản phẩm', description: 'Xem toàn bộ danh mục', href: 'san-pham.html', icon: 'bi-grid', keywords: 'san pham mua hang' },
    { title: 'Hệ thống lọc', description: 'Lọc nước và thiết bị lọc', href: 'san-pham.html?category=he-thong-loc', icon: 'bi-funnel', keywords: 'loc nuoc he thong loc' },
    { title: 'Thức ăn & dinh dưỡng', description: 'Cám cá Koi và cá cảnh', href: 'san-pham.html?category=thuc-an', icon: 'bi-bag-heart', keywords: 'thuc an cam ca koi dinh duong' },
    { title: 'Thuốc & vi sinh', description: 'Chăm sóc và xử lý nước', href: 'san-pham.html?category=thuoc-vi-sinh', icon: 'bi-droplet', keywords: 'thuoc vi sinh benh nam xu ly nuoc' },
    { title: 'Vật liệu lọc', description: 'Sứ lọc, bông lọc và media', href: 'san-pham.html?category=vat-lieu-loc', icon: 'bi-layers', keywords: 'vat lieu loc su bong media' },
    { title: 'Cây thủy sinh', description: 'Cây xanh cho hồ cá', href: 'san-pham.html?category=cay-thuy-sinh', icon: 'bi-tree', keywords: 'cay thuy sinh rong' },
    { title: 'Thiết bị & phụ kiện', description: 'Máy bơm, đèn và phụ kiện', href: 'san-pham.html?category=thiet-bi', icon: 'bi-tools', keywords: 'thiet bi phu kien may bom den' },
    { title: 'Kiến thức cá cảnh', description: 'Cẩm nang chăm sóc hồ cá', href: 'kien-thuc.html', icon: 'bi-journal-text', keywords: 'kien thuc cham soc ca canh koi ho nuoc' },
    { title: 'Dự án hồ cá', description: 'Các dự án Aqua Care đã thực hiện', href: 'du-an.html', icon: 'bi-water', keywords: 'du an ho ca koi thuy sinh' },
    { title: 'Liên hệ tư vấn', description: 'Kết nối với Aqua Care', href: 'lien-he.html', icon: 'bi-headset', keywords: 'lien he tu van hotline zalo' }
  ];

  const validationRules = {
    search: /^[\p{L}\p{M}\p{N}\s&+/#.,-]{0,80}$/u,
    name: /^[\p{L}\p{M}\s'.-]{2,60}$/u,
    username: /^[a-z0-9][a-z0-9._-]{2,22}[a-z0-9]$/,
    email: /^[A-Za-z0-9._%+-]+@gmail\.com$/i,
    password: /^\S{6,64}$/
  };

  if (!document.getElementById('aquaHeaderModules')) {
    const modules = document.createElement('div');
    modules.id = 'aquaHeaderModules';
    modules.innerHTML = `
      <div class="modal fade aqua-action-modal" id="aquaSearchModal" tabindex="-1" aria-labelledby="aquaSearchTitle" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <div><span class="aqua-modal-kicker">TÌM NHANH</span><h5 class="modal-title" id="aquaSearchTitle">Bạn đang tìm gì?</h5></div>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Đóng"></button>
            </div>
            <div class="modal-body">
              <form class="aqua-search-form" id="aquaSearchForm">
                <i class="bi bi-search" aria-hidden="true"></i>
                <input type="search" id="aquaSearchInput" autocomplete="off" maxlength="80" pattern="^[A-Za-zÀ-ỹ0-9\\s&+/#.,-]{0,80}$" placeholder="Sản phẩm, kiến thức, dự án..." aria-label="Nhập từ khóa tìm kiếm">
                <button type="submit">Tìm kiếm</button>
              </form>
              <div class="aqua-search-results" id="aquaSearchResults" aria-live="polite"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade aqua-action-modal" id="aquaAccountModal" tabindex="-1" aria-labelledby="aquaAccountTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <div><span class="aqua-modal-kicker">AQUA CARE MEMBER</span><h5 class="modal-title" id="aquaAccountTitle">Tài khoản</h5></div>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Đóng"></button>
            </div>
            <div class="modal-body" id="aquaAccountBody">
              <div id="aquaAccountGuest">
                <div class="aqua-account-tabs" role="tablist">
                  <button type="button" class="active" data-account-mode="login">Đăng nhập</button>
                  <button type="button" data-account-mode="register">Đăng ký</button>
                </div>
                <form id="aquaAccountForm" novalidate>
                  <div class="aqua-field" id="aquaNameField" hidden><label for="aquaAccountName">Họ và tên</label><input id="aquaAccountName" type="text" autocomplete="name" minlength="2" maxlength="60"></div>
                  <div class="aqua-field" id="aquaUsernameField" hidden><label for="aquaAccountUsername">Tên đăng nhập</label><input id="aquaAccountUsername" type="text" autocomplete="username" minlength="4" maxlength="24" placeholder="vi-du: nguyen.van.a"><small class="aqua-field-hint" id="aquaUsernameHint">Nếu trùng, hệ thống sẽ tự thêm số ở cuối.</small></div>
                  <div class="aqua-field"><label for="aquaAccountEmail" id="aquaAccountEmailLabel">Email hoặc tên đăng nhập</label><input id="aquaAccountEmail" type="text" autocomplete="username" maxlength="100" required placeholder="ten_dang_nhap hoặc ten@gmail.com"></div>
                  <div class="aqua-field"><label for="aquaAccountPassword">Mật khẩu</label><input id="aquaAccountPassword" type="password" autocomplete="current-password" minlength="6" maxlength="64" required></div>
                  <p class="aqua-form-error" id="aquaAccountError" role="alert"></p>
                  <button class="aqua-primary-action" type="submit" id="aquaAccountSubmit">Đăng nhập</button>
                </form>
                <p class="aqua-security-note"><i class="bi bi-shield-lock"></i> Bản demo cục bộ: tài khoản được lưu trên trình duyệt này. Khi triển khai thật cần kết nối máy chủ xác thực an toàn.</p>
              </div>
              <div class="aqua-account-profile" id="aquaAccountProfile" hidden></div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade aqua-action-modal" id="aquaSharedCartModal" tabindex="-1" aria-labelledby="aquaCartTitle" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <div><span class="aqua-modal-kicker">GIỎ HÀNG</span><h5 class="modal-title" id="aquaCartTitle">Sản phẩm đã chọn</h5></div>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Đóng"></button>
            </div>
            <div class="modal-body">
              <div class="aqua-cart-items" id="aquaCartItems"></div>
              <div class="aqua-cart-footer" id="aquaCartFooter"></div>
            </div>
          </div>
        </div>
      </div>`;
    document.body.appendChild(modules);
  }

  const searchInput = document.getElementById('aquaSearchInput');
  const searchResults = document.getElementById('aquaSearchResults');
  const searchForm = document.getElementById('aquaSearchForm');
  const accountForm = document.getElementById('aquaAccountForm');
  const accountName = document.getElementById('aquaAccountName');
  const accountUsername = document.getElementById('aquaAccountUsername');
  const accountEmail = document.getElementById('aquaAccountEmail');
  const accountEmailLabel = document.getElementById('aquaAccountEmailLabel');
  const accountPassword = document.getElementById('aquaAccountPassword');
  const accountError = document.getElementById('aquaAccountError');
  const accountUsernameHint = document.getElementById('aquaUsernameHint');
  let accountMode = 'login';
  let lastSuggestedUsername = '';

  function normalizeEmail(value) {
    return String(value ?? '').trim().toLowerCase();
  }

  function normalizeUsername(value) {
    return normalizeText(value)
      .replace(/[^a-z0-9]+/g, '.')
      .replace(/^\.+|\.+$/g, '')
      .replace(/\.{2,}/g, '.')
      .slice(0, 24);
  }

  function buildUsernameSeed(value) {
    const base = normalizeUsername(value);
    if (base.length >= 4) return base;
    const fallback = base ? `${base}.aqua` : 'aquacare.user';
    return fallback.slice(0, 24).replace(/[._-]+$/g, 'x');
  }

  function generateUniqueUsername(source, existingAccounts = []) {
    const base = buildUsernameSeed(source);
    const taken = new Set(
      existingAccounts
        .map((account) => normalizeUsername(account?.username))
        .filter(Boolean)
    );
    if (!taken.has(base)) return base;
    for (let index = 2; index < 1000; index += 1) {
      const suffix = `.${index}`;
      const core = base.slice(0, Math.max(4, 24 - suffix.length)).replace(/[._-]+$/g, '') || 'aquacare';
      const candidate = `${core}${suffix}`.slice(0, 24);
      if (!taken.has(candidate)) return candidate;
    }
    return `aqua.${Date.now().toString().slice(-6)}`.slice(0, 24);
  }

  function sanitizeAccount(account, knownAccounts = []) {
    if (!account || !account.email) return null;
    const name = String(account.name || 'Khách hàng').trim() || 'Khách hàng';
    const email = normalizeEmail(account.email);
    if (!email) return null;
    return {
      name,
      username: generateUniqueUsername(account.username || name || email.split('@')[0], knownAccounts),
      email,
      password: String(account.password || ''),
      createdAt: account.createdAt || new Date().toISOString()
    };
  }

  function getAccounts() {
    const storedAccounts = readJson(storageKeys.accounts, null);
    const normalizedAccounts = [];
    if (Array.isArray(storedAccounts) && storedAccounts.length) {
      storedAccounts.forEach((account) => {
        const normalized = sanitizeAccount(account, normalizedAccounts);
        if (normalized) normalizedAccounts.push(normalized);
      });
      if (JSON.stringify(storedAccounts) !== JSON.stringify(normalizedAccounts)) {
        writeJson(storageKeys.accounts, normalizedAccounts);
      }
      return normalizedAccounts;
    }

    const legacyProfile = readJson(storageKeys.profile, null);
    if (legacyProfile && legacyProfile.email) {
      const migrated = [];
      const normalizedLegacy = sanitizeAccount(legacyProfile, migrated);
      if (normalizedLegacy) {
        migrated.push(normalizedLegacy);
        writeJson(storageKeys.accounts, migrated);
        writeJson(storageKeys.profile, {
          name: normalizedLegacy.name,
          username: normalizedLegacy.username,
          email: normalizedLegacy.email,
          createdAt: normalizedLegacy.createdAt
        });
      }
      return migrated;
    }

    return [];
  }

  function saveAccounts(accounts) {
    writeJson(storageKeys.accounts, accounts);
  }

  function writeSession(profile) {
    writeJson(storageKeys.profile, {
      name: profile.name,
      username: profile.username,
      email: profile.email,
      createdAt: profile.createdAt
    });
    writeJson(storageKeys.session, {
      username: profile.username,
      signedInAt: new Date().toISOString()
    });
  }

  function findAccountByIdentifier(identifier) {
    const value = String(identifier ?? '').trim();
    if (!value) return null;
    const accounts = getAccounts();
    if (value.includes('@')) {
      const email = normalizeEmail(value);
      return accounts.find((account) => account.email === email) || null;
    }
    const username = normalizeUsername(value);
    return accounts.find((account) => account.username === username) || null;
  }

  function getSignedInProfile() {
    const session = readJson(storageKeys.session, null);
    if (!session) return null;
    const accounts = getAccounts();
    if (session.username) {
      const currentUsername = normalizeUsername(session.username);
      return accounts.find((account) => account.username === currentUsername) || null;
    }
    if (session.email) {
      const currentEmail = normalizeEmail(session.email);
      return accounts.find((account) => account.email === currentEmail) || null;
    }
    return null;
  }

  function isSignedIn() {
    return Boolean(getSignedInProfile());
  }

  function getDisplayName(profile) {
    const fullName = String(profile?.name || '').trim();
    return fullName || 'Khách hàng';
  }

  function promptSignInForCart(message = 'Vui lòng đăng nhập để sử dụng giỏ hàng.') {
    openAccountModal('login');
    notify(message);
    return false;
  }

  function setAquaInputState(input, ok) {
    if (!input) return;
    input.classList.toggle('is-invalid', ok === false);
    input.classList.toggle('is-valid', ok === true && Boolean(input.value.trim()));
  }

  function updateUsernameHint(message = 'Nếu trùng, hệ thống sẽ tự thêm số ở cuối.') {
    if (accountUsernameHint) accountUsernameHint.textContent = message;
  }

  function syncUsernameSuggestion(force = false) {
    if (accountMode !== 'register' || !accountUsername) return;
    const suggested = generateUniqueUsername(accountName.value.trim() || accountUsername.value.trim(), getAccounts());
    const currentValue = normalizeUsername(accountUsername.value);
    const previousSuggestion = normalizeUsername(lastSuggestedUsername);
    if (force || !currentValue || currentValue === previousSuggestion) {
      accountUsername.value = suggested;
    }
    lastSuggestedUsername = suggested;
    updateUsernameHint(`Gợi ý hiện tại: @${suggested}`);
  }

  function openModal(id, focusTarget) {
    const element = document.getElementById(id);
    if (!element || !window.bootstrap) return;
    const modal = bootstrap.Modal.getOrCreateInstance(element);
    modal.show();
    if (focusTarget) element.addEventListener('shown.bs.modal', () => focusTarget.focus(), { once: true });
  }

  function hideModal(id) {
    const element = document.getElementById(id);
    if (!element || !window.bootstrap) return;
    const modal = bootstrap.Modal.getInstance(element);
    if (modal) modal.hide();
  }

  function renderSearch(query = '') {
    const rawQuery = query.trim();
    if (rawQuery && !validationRules.search.test(rawQuery)) {
      searchForm.classList.add('is-invalid');
      searchResults.innerHTML = '<div class="aqua-search-empty"><i class="bi bi-exclamation-triangle"></i><p>Từ khóa chỉ nên gồm chữ, số, khoảng trắng và ký tự & / # . , -.</p></div>';
      return;
    }
    searchForm.classList.remove('is-invalid');
    const normalized = normalizeText(query);
    const matches = searchIndex.filter((item) => {
      if (!normalized) return true;
      return normalizeText(item.title + ' ' + item.description + ' ' + item.keywords).includes(normalized);
    }).slice(0, 8);
    if (!matches.length) {
      searchResults.innerHTML = `<div class="aqua-search-empty"><i class="bi bi-search"></i><p>Chưa có kết quả trực tiếp cho “${safeText(query)}”.</p><a href="san-pham.html?search=${encodeURIComponent(query)}">Tìm trong toàn bộ sản phẩm</a></div>`;
      return;
    }
    searchResults.innerHTML = matches.map((item) => `
      <a class="aqua-search-result" href="${item.href}">
        <span><i class="bi ${item.icon}"></i></span>
        <div><strong>${safeText(item.title)}</strong><small>${safeText(item.description)}</small></div>
        <i class="bi bi-arrow-right"></i>
      </a>`).join('');
  }

  searchInput.addEventListener('input', () => renderSearch(searchInput.value));
  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (searchInput.value.trim() && !validationRules.search.test(searchInput.value.trim())) {
      searchForm.classList.add('is-invalid');
      notify('Từ khóa tìm kiếm chứa ký tự không hợp lệ.');
      searchInput.focus();
      return;
    }
    const firstResult = searchResults.querySelector('.aqua-search-result');
    if (firstResult) window.location.href = firstResult.href;
    else if (searchInput.value.trim()) window.location.href = 'san-pham.html?search=' + encodeURIComponent(searchInput.value.trim());
  });

  function setAccountMode(mode) {
    accountMode = mode;
    document.querySelectorAll('[data-account-mode]').forEach((button) => button.classList.toggle('active', button.dataset.accountMode === mode));
    document.getElementById('aquaNameField').hidden = mode !== 'register';
    document.getElementById('aquaUsernameField').hidden = mode !== 'register';
    document.getElementById('aquaAccountSubmit').textContent = mode === 'register' ? 'Tạo tài khoản' : 'Đăng nhập';
    accountEmailLabel.textContent = mode === 'register' ? 'Email (@gmail.com)' : 'Email hoặc tên đăng nhập';
    accountEmail.type = mode === 'register' ? 'email' : 'text';
    accountEmail.autocomplete = mode === 'register' ? 'email' : 'username';
    accountEmail.placeholder = mode === 'register' ? 'ten@gmail.com' : 'ten_dang_nhap hoặc ten@gmail.com';
    accountPassword.autocomplete = mode === 'register' ? 'new-password' : 'current-password';
    accountError.textContent = '';
    [accountName, accountUsername, accountEmail, accountPassword].forEach((input) => setAquaInputState(input, null));
    updateUsernameHint();
    if (mode === 'register') syncUsernameSuggestion(true);
  }

  function renderHeaderIdentity() {
    const profile = getSignedInProfile();
    document.querySelectorAll('.navbar-icons').forEach((group) => {
      const existingChip = group.querySelector('.aqua-user-chip');
      if (existingChip) existingChip.remove();
      if (!profile) return;
      const searchButton = group.querySelector('[data-aqua-action="search"]');
      if (!searchButton) return;
      const chip = document.createElement('span');
      chip.className = 'aqua-user-chip';
      chip.title = `${getDisplayName(profile)} (@${profile.username})`;
      chip.textContent = getDisplayName(profile);
      searchButton.insertAdjacentElement('afterend', chip);
    });
  }

  function renderAccount() {
    const profile = getSignedInProfile();
    const signedIn = Boolean(profile);

    // Glassmorphic lock screen handling
    if (signedIn) {
      document.body.classList.remove('aqua-locked-blur');
      const accountModalEl = document.getElementById('aquaAccountModal');
      if (accountModalEl) {
        const closeBtn = accountModalEl.querySelector('.btn-close');
        if (closeBtn) closeBtn.style.display = '';
      }
    } else {
      document.body.classList.add('aqua-locked-blur');
      const accountModalEl = document.getElementById('aquaAccountModal');
      if (accountModalEl) {
        const closeBtn = accountModalEl.querySelector('.btn-close');
        if (closeBtn) closeBtn.style.display = 'none';

        // Auto open modal with static backdrop
        setTimeout(() => {
          if (window.bootstrap) {
            const modal = bootstrap.Modal.getOrCreateInstance(accountModalEl, {
              backdrop: 'static',
              keyboard: false
            });
            modal.show();
          }
        }, 150);
      }
    }

    document.getElementById('aquaAccountGuest').hidden = signedIn;
    const profileView = document.getElementById('aquaAccountProfile');
    profileView.hidden = !signedIn;
    document.querySelectorAll('[data-aqua-action="account"]').forEach((button) => {
      button.classList.toggle('is-authenticated', signedIn);
      button.title = signedIn ? 'Tài khoản: ' + profile.name : 'Tài khoản';
    });
    renderHeaderIdentity();
    if (signedIn) {
      profileView.innerHTML = `
        <div class="aqua-profile-avatar">${safeText(profile.name.charAt(0).toUpperCase())}</div>
        <h6>Xin chào, ${safeText(profile.name)}</h6>
        <p>${safeText(profile.email)}</p>
        <small class="aqua-profile-meta">Tên đăng nhập: @${safeText(profile.username)}</small>
        <div class="aqua-profile-links"><a href="san-pham.html"><i class="bi bi-bag"></i> Tiếp tục mua sắm</a><a href="lien-he.html"><i class="bi bi-headset"></i> Nhận tư vấn</a></div>
        <button type="button" class="aqua-secondary-action" id="aquaLogoutBtn">Đăng xuất</button>`;
      document.getElementById('aquaLogoutBtn').addEventListener('click', () => {
        cartApi.clear();
        localStorage.removeItem(storageKeys.session);
        renderAccount();
        notify('Đã đăng xuất. Giỏ hàng được xóa để bảo vệ phiên mua sắm.');
      });
    }
  }

  document.querySelectorAll('[data-account-mode]').forEach((button) => button.addEventListener('click', () => setAccountMode(button.dataset.accountMode)));
  [accountName, accountUsername, accountEmail, accountPassword].forEach((input) => {
    if (!input) return;
    input.addEventListener('input', () => {
      accountError.textContent = '';
      setAquaInputState(input, null);
      if (input === accountName) syncUsernameSuggestion();
      if (input === accountUsername) {
        const currentValue = normalizeUsername(accountUsername.value);
        if (currentValue) updateUsernameHint(`Hệ thống sẽ lưu là @${generateUniqueUsername(currentValue, getAccounts())}`);
        else updateUsernameHint();
      }
    });
  });
  accountForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const accounts = getAccounts();
    const name = accountName.value.trim();
    const identifier = accountEmail.value.trim();
    const email = normalizeEmail(identifier);
    const password = accountPassword.value;
    const requestedUsername = normalizeUsername(accountUsername?.value.trim() || name);
    accountError.textContent = '';
    if (accountMode === 'register' && !validationRules.name.test(name)) {
      setAquaInputState(accountName, false);
      accountError.textContent = 'Họ tên chỉ gồm chữ cái, khoảng trắng, dấu nháy hoặc dấu gạch; độ dài 2-60 ký tự.';
      return;
    }
    setAquaInputState(accountName, accountMode === 'register' ? true : null);
    if (accountMode === 'register') {
      if (!validationRules.username.test(buildUsernameSeed(requestedUsername || name))) {
        setAquaInputState(accountUsername, false);
        accountError.textContent = 'Tên đăng nhập cần 4-24 ký tự, chỉ gồm chữ thường không dấu, số, dấu chấm, gạch ngang hoặc gạch dưới.';
        return;
      }
      setAquaInputState(accountUsername, true);
    }
    if (!validationRules.password.test(password)) {
      setAquaInputState(accountPassword, false);
      accountError.textContent = 'Mật khẩu cần 6-64 ký tự và không chứa khoảng trắng.';
      return;
    }
    setAquaInputState(accountPassword, true);
    if (accountMode === 'register') {
      if (!validationRules.email.test(email)) {
        setAquaInputState(accountEmail, false);
        accountError.textContent = 'Email phải đúng định dạng @gmail.com theo cấu hình hiện tại.';
        return;
      }
      setAquaInputState(accountEmail, true);
      if (accounts.some((account) => account.email === email)) {
        setAquaInputState(accountEmail, false);
        accountError.textContent = 'Email này đã được dùng. Hãy đăng nhập hoặc chọn email @gmail.com khác.';
        return;
      }
      const username = generateUniqueUsername(requestedUsername || name, accounts);
      const profile = {
        name,
        username,
        email,
        password,
        createdAt: new Date().toISOString()
      };
      saveAccounts([...accounts, profile]);
      writeSession(profile);
      accountForm.reset();
      lastSuggestedUsername = '';
      updateUsernameHint();
      renderAccount();
      hideModal('aquaAccountModal');
      notify(`✓ Tài khoản đã được tạo. Tên đăng nhập của bạn là @${username}.`);
      return;
    }
    const looksLikeEmail = identifier.includes('@');
    const loginValue = looksLikeEmail ? normalizeEmail(identifier) : normalizeUsername(identifier);
    if (!loginValue || !(looksLikeEmail ? validationRules.email.test(loginValue) : validationRules.username.test(loginValue))) {
      setAquaInputState(accountEmail, false);
      accountError.textContent = looksLikeEmail
        ? 'Email đăng nhập phải đúng định dạng @gmail.com.'
        : 'Tên đăng nhập chỉ gồm chữ thường không dấu, số, dấu chấm, gạch ngang hoặc gạch dưới.';
      return;
    }
    const profile = findAccountByIdentifier(identifier);
    if (!profile) {
      accountError.textContent = 'Chưa tìm thấy tài khoản này. Hãy chọn Đăng ký.';
      return;
    }
    if (profile.password && profile.password !== password) {
      setAquaInputState(accountPassword, false);
      accountError.textContent = 'Mật khẩu chưa đúng.';
      return;
    }
    writeSession(profile);
    accountForm.reset();
    lastSuggestedUsername = '';
    updateUsernameHint();
    renderAccount();
    hideModal('aquaAccountModal');
    notify('✓ Đăng nhập thành công.');
  });

  function syncCartBadges() {
    const count = cartApi.count();
    document.querySelectorAll('.cart-badge').forEach((badge) => badge.textContent = count);
  }

  function renderSharedCart() {
    const itemsElement = document.getElementById('aquaCartItems');
    const footerElement = document.getElementById('aquaCartFooter');
    if (!itemsElement || !footerElement) return;
    const items = cartApi.get();
    const profile = getSignedInProfile();
    if (!items.length) {
      itemsElement.innerHTML = '<div class="aqua-cart-empty"><i class="bi bi-cart3"></i><h6>Giỏ hàng đang trống</h6><p>Hãy thêm một sản phẩm phù hợp với hồ cá của bạn.</p><a href="san-pham.html">Khám phá sản phẩm</a></div>';
      footerElement.innerHTML = '';
      return;
    }
    let total = 0;
    itemsElement.innerHTML = items.map((item) => {
      total += Number(item.priceRaw || 0) * Number(item.qty || 0);
      return `<div class="aqua-cart-row" data-cart-key="${safeText(item.key)}">
        <img src="${safeText(item.image)}" alt="${safeText(item.name)}" onerror="this.src='assets/images/categories/phu-kien.png'">
        <div class="aqua-cart-info"><strong>${safeText(item.name)}</strong><small>${safeText(item.price || money(item.priceRaw))}</small><div class="aqua-qty"><button type="button" data-cart-action="decrease" aria-label="Giảm số lượng">−</button><span>${item.qty}</span><button type="button" data-cart-action="increase" aria-label="Tăng số lượng">+</button></div></div>
        <div class="aqua-cart-line-total"><strong>${money(Number(item.priceRaw || 0) * Number(item.qty || 0))}</strong><button type="button" data-cart-action="remove">Xóa</button></div>
      </div>`;
    }).join('');
    footerElement.innerHTML = profile
      ? `<div><span>Tổng tạm tính</span><strong>${money(total)}</strong></div><p>Đăng nhập với tên <strong>${safeText(getDisplayName(profile))}</strong>. Nhấn tiếp để sang bước thanh toán trên trang sản phẩm.</p><div class="aqua-cart-actions"><button type="button" class="aqua-secondary-action" data-cart-clear>Xóa giỏ</button><a class="aqua-primary-action" href="san-pham.html">Đi tới thanh toán</a></div>`
      : `<div><span>Tổng tạm tính</span><strong>${money(total)}</strong></div><p>Vui lòng đăng nhập trước khi thanh toán để đồng bộ tên khách hàng và thông tin nhận hàng.</p><div class="aqua-cart-actions"><button type="button" class="aqua-secondary-action" data-cart-clear>Xóa giỏ</button><button type="button" class="aqua-primary-action" data-cart-login>Đăng nhập để thanh toán</button></div>`;
  }

  document.getElementById('aquaCartItems').addEventListener('click', (event) => {
    const actionButton = event.target.closest('[data-cart-action]');
    const row = event.target.closest('[data-cart-key]');
    if (!actionButton || !row) return;
    const key = row.dataset.cartKey;
    if (actionButton.dataset.cartAction === 'increase') cartApi.change(key, 1);
    if (actionButton.dataset.cartAction === 'decrease') cartApi.change(key, -1);
    if (actionButton.dataset.cartAction === 'remove') cartApi.remove(key);
  });
  document.getElementById('aquaCartFooter').addEventListener('click', (event) => {
    if (event.target.closest('[data-cart-clear]')) cartApi.clear();
    if (event.target.closest('[data-cart-login]')) {
      hideModal('aquaSharedCartModal');
      setAccountMode('login');
      openModal('aquaAccountModal', accountEmail);
    }
  });

  function markHeaderButtons() {
    document.querySelectorAll('.navbar-icons').forEach((group) => {
      const buttons = group.querySelectorAll('.icon-btn');
      const actions = ['search', 'account', 'cart'];
      const labels = ['Tìm kiếm', 'Tài khoản', 'Giỏ hàng'];
      buttons.forEach((button, index) => {
        if (!actions[index]) return;
        button.dataset.aquaAction = actions[index];
        button.setAttribute('aria-label', labels[index]);
        button.setAttribute('type', 'button');
      });
    });
  }

  function openAccountModal(mode = 'login') {
    setAccountMode(mode);
    renderAccount();
    openModal('aquaAccountModal', accountEmail);
  }

  markHeaderButtons();
  renderSearch();
  renderAccount();
  renderSharedCart();
  syncCartBadges();

  document.addEventListener('click', (event) => {
    const button = event.target.closest('.navbar-icons [data-aqua-action]');
    if (!button) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    if (button.dataset.aquaAction === 'search') openModal('aquaSearchModal', searchInput);
    if (button.dataset.aquaAction === 'account') openAccountModal('login');
    if (button.dataset.aquaAction === 'cart') {
      if (!isSignedIn()) {
        promptSignInForCart('Vui lòng đăng nhập để mở giỏ hàng.');
        return;
      }
      renderSharedCart();
      openModal('aquaSharedCartModal');
    }
  }, true);

  window.addEventListener('storage', (event) => {
    if (event.key === storageKeys.cart) {
      syncCartBadges();
      renderSharedCart();
    }
    if (event.key === storageKeys.accounts || event.key === storageKeys.profile || event.key === storageKeys.session) renderAccount();
  });

  window.AquaCare = {
    version: '1.0.0',
    cart: cartApi,
    openSearch: () => openModal('aquaSearchModal', searchInput),
    openAccount: (mode = 'login') => openAccountModal(mode),
    openCart: () => {
      if (!isSignedIn()) return promptSignInForCart('Vui lòng đăng nhập để mở giỏ hàng.');
      renderSharedCart();
      openModal('aquaSharedCartModal');
      return true;
    },
    account: {
      isSignedIn,
      getSignedInProfile
    }
  };

  // ==========================================
  // NEMO HELPER WIDGET LOGIC (GLOBAL)
  // ==========================================
  const nemo = document.createElement('div');
  nemo.id = 'nemoHelper';
  nemo.className = 'nemo-helper nemo-swimming';
  nemo.innerHTML = `
    <div class="nemo-bubble" id="nemoBubble">Chào bạn! Mình là Nemo. Hãy click vào mình nếu cần hỗ trợ nhé! 🐟</div>
    <div class="nemo-float-wrap">
      <div class="nemo-flip-wrap">
        <svg viewBox="0 0 60 30" width="100%" height="100%" style="overflow: visible;">
          <!-- Thân cá Nemo (Màu cam) -->
          <path d="M 10 15 C 20 4, 45 4, 52 15 C 45 26, 20 26, 10 15 Z" fill="#ff7f50" />
          <!-- Sọc trắng thứ nhất (gần đầu) -->
          <path d="M 40 7 C 38 10, 38 20, 40 23 C 43 20, 43 10, 40 7 Z" fill="#ffffff" />
          <path d="M 40 7 C 39 10, 39 20, 40 23 L 39 23 C 38 20, 38 10, 39 7 Z" fill="#000000" />
          <!-- Sọc trắng thứ hai (giữa thân) -->
          <path d="M 28 5 C 26 8, 26 22, 28 25 C 31 22, 31 8, 28 5 Z" fill="#ffffff" />
          <path d="M 28 5 C 27 8, 27 22, 28 25 L 27 25 C 26 22, 26 8, 27 5 Z" fill="#000000" />
          <path d="M 31 5 C 30 8, 30 22, 31 25 L 30 25 C 29 22, 29 8, 30 5 Z" fill="#000000" />
          <!-- Đuôi cá vẫy -->
          <g class="fish-tail-anim">
            <path d="M 10 15 L 0 5 C 3 10, 3 20, 0 25 Z" fill="#ff7f50" />
            <path d="M 6 11 L 1 7 C 2 10, 2 20, 1 23 L 6 19 Z" fill="#ffffff" />
            <path d="M 1 7 C 2 10, 2 20, 1 23 Z" fill="#000000" />
          </g>
          <!-- Vây cá -->
          <path d="M 32 6 Q 28 -1 24 4 Z" fill="#ff7f50" />
          <path d="M 32 24 Q 28 31 24 26 Z" fill="#ff7f50" />
          <!-- Má hồng & Mắt cá to tròn dễ thương -->
          <ellipse cx="44" cy="15.5" rx="3.5" ry="1.8" fill="#ff94b8" opacity="0.8" />
          <circle cx="45" cy="11" r="3.8" fill="#ffffff" />
          <circle cx="46.2" cy="11" r="1.8" fill="#000000" />
          <circle cx="47.2" cy="9.8" r="0.7" fill="#ffffff" />
        </svg>
      </div>
    </div>
  `;
  document.body.appendChild(nemo);

  let nemoX = Math.random() * (window.innerWidth - 120) + 20;
  let nemoDirection = Math.random() > 0.5 ? 1 : -1;
  const nemoFlipWrap = nemo.querySelector('.nemo-flip-wrap');
  nemoFlipWrap.classList.toggle('flipped', nemoDirection === -1);
  let nemoState = 'swimming'; // 'swimming' or 'guiding'
  const nemoSpeed = 1.2;
  let nemoBubbleTimer = null;

  function showNemoBubble(text, duration) {
    const bubble = document.getElementById('nemoBubble');
    if (!bubble) return;
    bubble.textContent = text;
    nemo.classList.add('show-bubble');
    if (nemoBubbleTimer) clearTimeout(nemoBubbleTimer);
    if (duration) {
      nemoBubbleTimer = setTimeout(() => {
        nemo.classList.remove('show-bubble');
      }, duration);
    }
  }

  function updateNemo() {
    if (nemoState === 'swimming') {
      if (window.innerWidth < 768) {
        // On mobile, keep Nemo at a fixed bottom-right position so it doesn't block interactions
        nemo.style.left = 'auto';
        nemo.style.right = '16px';
        nemo.style.bottom = '76px';
        nemo.style.top = 'auto';
        nemo.style.transform = 'scale(0.85)';
        nemoFlipWrap.classList.remove('flipped');
      } else {
        nemoX += nemoSpeed * nemoDirection;
        if (nemoX > window.innerWidth - 90) {
          nemoDirection = -1;
          nemoFlipWrap.classList.add('flipped');
        } else if (nemoX < 10) {
          nemoDirection = 1;
          nemoFlipWrap.classList.remove('flipped');
        }
        nemo.style.left = nemoX + 'px';
        nemo.style.bottom = '30px';
        nemo.style.top = 'auto';
        nemo.style.right = 'auto';
        nemo.style.transform = 'none';
      }
    }
    requestAnimationFrame(updateNemo);
  }

  // Khởi động hoạt ảnh bơi
  requestAnimationFrame(updateNemo);
  
  // Hiển thị bóng chat chào mừng ban đầu
  showNemoBubble('Chào bạn! Mình là Nemo. Hãy click vào mình nếu cần hỗ trợ nhé! 🐟', 6000);

  // Click vào Nemo sẽ đóng/mở khung Chatbox tư vấn
  nemo.addEventListener('click', (e) => {
    if (e.target.closest('.nemo-bubble')) return;
    toggleWebsiteChat();
  });

  function toggleWebsiteChat() {
    const aquaChatPanel = document.getElementById('aquaChatPanel');
    if (aquaChatPanel) {
      const isOpen = aquaChatPanel.classList.contains('is-open');
      aquaChatPanel.classList.toggle('is-open');
      if (!isOpen) {
        const input = document.getElementById('aquaChatInput');
        if (input) input.focus();
      }
      return;
    }
    const chatBoxKt = document.getElementById('chatBoxKt');
    if (chatBoxKt) {
      const isOpen = chatBoxKt.classList.contains('open');
      chatBoxKt.classList.toggle('open');
      if (!isOpen) {
        const input = document.getElementById('chatInpKt');
        if (input) input.focus();
      }
      return;
    }
    const chatBox = document.getElementById('chatBox');
    if (chatBox) {
      const isOpen = chatBox.classList.contains('open');
      chatBox.classList.toggle('open');
      if (!isOpen) {
        const input = document.getElementById('chatInput');
        if (input) input.focus();
      }
      return;
    }
  }

  // Lắng nghe sự kiện mở/đóng Modal để đưa Nemo vào trạng thái Hướng dẫn
  document.addEventListener('shown.bs.modal', (e) => {
    const modalId = e.target.id;
    // Bỏ qua nếu là các modal thông tin phụ không cần Nemo
    if (modalId === 'aquaSearchModal') return;

    nemoState = 'guiding';
    nemo.className = 'nemo-helper nemo-guiding';
    
    let guideText = 'Hãy điền đầy đủ thông tin để hoàn tất nhé! 🐟';
    if (modalId === 'orderStatusModal') {
      guideText = 'Đang mô phỏng hành trình đơn hàng của bạn đó! Xem hoạt ảnh chạy rất vui mắt nha! 🚚';
    } else if (modalId === 'aquaSharedCartModal' || modalId === 'cartModal') {
      guideText = 'Xem lại giỏ hàng và click "Đi tới thanh toán" hoặc điền thông tin để tiếp tục nhé! 🛒';
    } else if (modalId === 'productModal') {
      guideText = 'Bạn có thể xem chi tiết thông số hoặc click "Mua ngay" để đặt mua sản phẩm này! 📦';
    } else if (modalId === 'buyModal') {
      guideText = 'Hãy chọn phương thức thanh toán và điền thông tin nhận hàng để đặt mua nhanh nhé! 💳';
    } else if (modalId === 'aquaAccountModal') {
      guideText = 'Đăng ký tài khoản để đồng bộ giỏ hàng và mua sắm dễ dàng hơn nhé! 🔑';
    }
    
    showNemoBubble(guideText);
    
    // Cố định Nemo bên cạnh hộp thoại Modal (ở góc phải giữa màn hình)
    nemo.style.left = 'auto';
    nemo.style.right = '120px';
    nemo.style.bottom = '120px';
    nemo.style.transform = 'scale(1.2)';
    nemoFlipWrap.classList.add('flipped'); // Quay mặt về bên trái
  });

  document.addEventListener('hidden.bs.modal', () => {
    const openModals = document.querySelectorAll('.modal.show');
    if (openModals.length === 0) {
      nemoState = 'swimming';
      nemo.className = 'nemo-helper nemo-swimming';
      nemo.style.right = 'auto';
      nemo.style.transform = 'none';
      nemoFlipWrap.classList.toggle('flipped', nemoDirection === -1);
      showNemoBubble('Nemo đang tiếp tục bơi đây! Hãy gọi mình bất cứ lúc nào bạn cần tư vấn. 🌊', 5000);
    }
  });

});

