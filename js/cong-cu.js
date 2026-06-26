// Aqua Lab Utility Page JavaScript

// Products DB matching actual products from san-pham.js
const productsDb = {
  multiClear: { id: 19, name: 'MULTI CLEAR WATER làm trong nước', price: '95.000đ', priceRaw: 95000, image: 'assets/images/products/thuoc-vi-sinh/multi-clear-water-ver-03.jpeg' },
  multiDetox: { id: 18, name: 'MULTI DETOX xử lý nước', price: '120.000đ', priceRaw: 120000, image: 'assets/images/products/thuoc-vi-sinh/multi-detox.png' },
  antiShep: { id: 10, name: 'Thuốc trị nấm Anti Shep', price: '85.000đ', priceRaw: 85000, image: 'assets/images/products/thuoc-vi-sinh/thuoc-tri-nam-anti-shep.jpg' },
  suThanh: { id: 20, name: 'Sứ lọc thanh Hoa Mai 500g', price: '65.000đ', priceRaw: 65000, image: 'assets/images/products/vat-lieu-loc/su-thanh-hoa-mai.jpg' },
  kaldnes: { id: 8, name: 'Hạt lọc Kaldnes K3 500g', price: '55.000đ', priceRaw: 55000, image: 'assets/images/products/vat-lieu-loc/hat-loc-kaldnes.webp' },
  mayBom: { id: 6, name: 'Máy bơm Hsbao FP-1500', price: '450.000đ', priceRaw: 450000, image: 'assets/images/products/thiet-bi/may-bom-day-hsbao-fp.webp' },
  camSakura: { id: 5, name: 'Cám cá Koi Sakura 1kg', price: '195.000đ', priceRaw: 195000, image: 'assets/images/products/thuc-an/cam-ca-koi-sakura.jpg' },
  camCaoCap: { id: 11, name: 'Cám cá Koi bản cao cấp 1kg', price: '220.000đ', priceRaw: 220000, image: 'assets/images/products/thuc-an/cam-ca-koi-ban-cao-cap.jpg' }
};

document.addEventListener('DOMContentLoaded', () => {
  // Tabs selector
  const tabs = document.querySelectorAll('.lab-tab');
  const panels = document.querySelectorAll('.lab-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const targetPanel = document.getElementById(`panel-${tab.dataset.tab}`);
      if (targetPanel) targetPanel.classList.add('active');
    });
  });

  // Range slider live value updates
  const rangePh = document.getElementById('range-ph');
  const valPh = document.getElementById('val-ph');
  if (rangePh && valPh) {
    rangePh.addEventListener('input', () => {
      valPh.textContent = parseFloat(rangePh.value).toFixed(1);
    });
  }

  const rangeTemp = document.getElementById('range-temp');
  const valTemp = document.getElementById('val-temp');
  if (rangeTemp && valTemp) {
    rangeTemp.addEventListener('input', () => {
      valTemp.textContent = `${rangeTemp.value}°C`;
    });
  }
});

// Shape change in calculator
function onShapeChange() {
  const shape = document.getElementById('calc-shape').value;
  const inputsCuboid = document.getElementById('inputs-cuboid');
  const inputsCylinder = document.getElementById('inputs-cylinder');

  if (shape === 'cuboid') {
    inputsCuboid.classList.remove('d-none');
    inputsCylinder.classList.add('d-none');
  } else {
    inputsCuboid.classList.add('d-none');
    inputsCylinder.classList.remove('d-none');
  }
}

// Global addToCart helper
window.addToCartFromLab = function(productKey) {
  const prod = productsDb[productKey];
  if (!prod) return;
  if (window.aquaCareApp && window.aquaCareApp.cart) {
    window.aquaCareApp.cart.add(prod, 1);
  } else {
    alert("Vui lòng đăng nhập trước khi mua sắm.");
  }
};

// AI Diagnostic Logic
window.runDiagnostic = function(event) {
  if (event) event.preventDefault();

  const ph = parseFloat(document.getElementById('range-ph').value);
  const nh3 = parseFloat(document.getElementById('select-nh3').value);
  const no2 = parseFloat(document.getElementById('select-no2').value);
  const temp = parseInt(document.getElementById('range-temp').value, 10);
  const color = document.querySelector('input[name="waterColor"]:checked').value;
  
  const sluggish = document.getElementById('symp-sluggish').checked;
  const scratch = document.getElementById('symp-scratch').checked;
  const gasping = document.getElementById('symp-gasping').checked;
  const spots = document.getElementById('symp-spots').checked;

  const diagEmpty = document.getElementById('diag-empty');
  const diagLoading = document.getElementById('diag-loading');
  const diagResults = document.getElementById('diag-results');

  // Show loading spinner
  diagEmpty.classList.add('d-none');
  diagResults.classList.add('d-none');
  diagLoading.classList.remove('d-none');

  setTimeout(() => {
    diagLoading.classList.add('d-none');
    diagResults.classList.remove('d-none');

    // Calculate score
    let score = 100;
    let issues = [];
    let steps = [];
    let recProducts = [];

    // Check pH
    if (ph < 6.5) {
      score -= 20;
      issues.push(`Độ pH thấp (${ph}) - Nước bị axit hóa, có hại cho da cá và vảy sinh học.`);
      steps.push("Thêm san hô lọc vào bể hoặc châm dung dịch tăng pH chuyên dụng.");
    } else if (ph > 8.5) {
      score -= 20;
      issues.push(`Độ pH cao (${ph}) - Nước bị kiềm hóa, cản trở hô hấp của cá.`);
      steps.push("Bổ sung gỗ lũa tự nhiên hoặc châm chế phẩm giảm pH.");
    }

    // Check NH3/NH4
    if (nh3 > 0) {
      score -= (nh3 === 0.25 ? 25 : nh3 === 1.0 ? 50 : 75);
      issues.push(`Nồng độ khí độc NH3/NH4 cao (${nh3} mg/L) - Gây ngộ độc mang, bỏ ăn.`);
      steps.push("Thay ngay 30% nước sạch đã khử clo, bổ sung gấp men vi sinh đậm đặc.");
      recProducts.push('multiDetox');
    }

    // Check NO2
    if (no2 > 0) {
      score -= (no2 === 0.5 ? 30 : 60);
      issues.push(`Khí độc NO2 vượt ngưỡng an toàn - Cản trở vận chuyển oxy trong máu cá.`);
      steps.push("Tăng cường sục khí oxy mạnh mẽ, ngừng cho cá ăn trong 2 ngày.");
      if (!recProducts.includes('multiDetox')) recProducts.push('multiDetox');
    }

    // Check Temperature
    if (temp < 20) {
      score -= 15;
      issues.push(`Nhiệt độ nước lạnh (${temp}°C) - Làm giảm hệ miễn dịch và tốc độ tiêu hóa của cá.`);
      steps.push("Cắm sưởi ổn định nhiệt độ ở mức 26-28°C.");
    } else if (temp > 32) {
      score -= 15;
      issues.push(`Nhiệt độ nước quá cao (${temp}°C) - Giảm nồng độ oxy hòa tan trong nước hồ.`);
      steps.push("Tăng sục oxy, làm mát hồ hoặc lắp quạt tản nhiệt.");
    }

    // Check Water Color
    if (color === 'yellow') {
      score -= 10;
      issues.push("Nước có màu vàng và tanh - Dấu hiệu thừa đạm sinh học hoặc hệ lọc quá tải.");
      steps.push("Vệ sinh cơ học ngăn lắng/chổi lọc, bổ sung than hoạt tính chất lượng.");
    } else if (color === 'green') {
      score -= 20;
      issues.push("Nước bùng phát tảo xanh - Dấu hiệu dư dưỡng chất và chiếu sáng quá nhiều.");
      steps.push("Tắt bớt đèn, che chắn nắng trực tiếp, bật đèn UV diệt tảo.");
      recProducts.push('multiClear');
    } else if (color === 'white') {
      score -= 15;
      issues.push("Nước bị đục trắng dạng bụi mịn - Hệ vi sinh chưa ổn định hoặc bụi nền khuấy động.");
      steps.push("Châm men vi sinh xử lý đục nước nhanh, bổ sung thêm bông lọc mịn.");
      recProducts.push('multiClear');
    }

    // Check Symptoms
    if (sluggish) { score -= 15; steps.push("Theo dõi sát hành vi cá bơi, cho ăn cám dễ tiêu hóa."); }
    if (scratch) {
      score -= 15;
      issues.push("Cá cọ mình liên tục - Dấu hiệu cá ngứa da do ký sinh trùng hoặc clo dư.");
      steps.push("Sử dụng thuốc dưỡng vảy hoặc muối hột liều 3/1000.");
    }
    if (gasping) { score -= 20; steps.push("Tăng tốc lưu lượng máy sục khí oxy gấp đôi."); }
    if (spots) {
      score -= 20;
      issues.push("Vảy cá xuất hiện đốm trắng - Cá đã bị nhiễm bệnh nấm Ich.");
      steps.push("Cách ly cá bệnh ngay lập tức, châm thuốc điều trị nấm Anti Shep.");
      recProducts.push('antiShep');
    }

    // Minimum score limit
    score = Math.max(12, score);

    // Update Score UI
    const scoreValEl = document.getElementById('res-score');
    const scoreRingEl = document.getElementById('res-score-ring');
    const badgeEl = document.getElementById('res-badge');
    const titleEl = document.getElementById('res-title');
    const subtitleEl = document.getElementById('res-subtitle');
    const descEl = document.getElementById('res-desc');
    const stepsEl = document.getElementById('res-steps');

    scoreValEl.textContent = score;
    scoreRingEl.className = 'health-score-ring'; // Reset class
    
    if (score >= 85) {
      badgeEl.textContent = "An Toàn";
      badgeEl.className = "badge bg-success";
      titleEl.textContent = "Môi trường ổn định";
      subtitleEl.textContent = "Hệ sinh học hoạt động tốt";
    } else if (score >= 60) {
      badgeEl.textContent = "Cảnh Báo";
      badgeEl.className = "badge bg-warning text-dark";
      scoreRingEl.classList.add('warning');
      titleEl.textContent = "Hệ sinh thái mất cân bằng";
      subtitleEl.textContent = "Có dấu hiệu khí độc hoặc rêu hại";
    } else {
      badgeEl.textContent = "Nguy Hiểm";
      badgeEl.className = "badge bg-danger";
      scoreRingEl.classList.add('danger');
      titleEl.textContent = "Nguồn nước nhiễm độc nặng";
      subtitleEl.textContent = "Yêu cầu hành động khẩn cấp!";
    }

    // Set descriptions
    if (issues.length) {
      descEl.innerHTML = issues.map(iss => `<div class="mb-2"><i class="bi bi-exclamation-triangle-fill text-warning me-2"></i>${iss}</div>`).join('');
    } else {
      descEl.textContent = "Nguồn nước trong sạch, đạt tiêu chuẩn sinh học tối ưu. Hệ vi sinh đang chuyển hóa rất tốt.";
    }

    // Set Steps
    if (!steps.length) steps.push("Duy trì thay nước 15-20% định kỳ hàng tuần để giữ sự ổn định.");
    stepsEl.innerHTML = steps.map(st => `<li>${st}</li>`).join('');

    // Set Products
    if (!recProducts.length) {
      // Default recommendation for healthy water
      recProducts = ['camSakura', 'camCaoCap'];
    }
    
    const prodGrid = document.getElementById('res-products-grid');
    prodGrid.innerHTML = recProducts.map(key => {
      const p = productsDb[key];
      return `
        <div class="col-sm-6">
          <div class="lab-prod-card">
            <img src="${p.image}" class="lab-prod-img" alt="${p.name}">
            <div class="lab-prod-info">
              <div class="lab-prod-title">${p.name}</div>
              <div class="lab-prod-price">${p.price}</div>
            </div>
            <button class="lab-prod-btn" onclick="addToCartFromLab('${key}')" type="button"><i class="bi bi-plus-lg"></i></button>
          </div>
        </div>
      `;
    }).join('');

  }, 1000);
};

// Aquarium & Filter Calculator Logic
window.runCalculator = function(event) {
  if (event) event.preventDefault();

  const shape = document.getElementById('calc-shape').value;
  const type = document.getElementById('calc-type').value;
  
  let volume = 0; // In Liters
  
  if (shape === 'cuboid') {
    const l = parseFloat(document.getElementById('inp-length').value) || 0;
    const w = parseFloat(document.getElementById('inp-width').value) || 0;
    const h = parseFloat(document.getElementById('inp-height').value) || 0;
    // Volume (cm3) = l * w * h, Liters = cm3 / 1000
    volume = (l * w * h) / 1000;
  } else {
    const r = parseFloat(document.getElementById('inp-radius').value) || 0;
    const h = parseFloat(document.getElementById('inp-cyl-height').value) || 0;
    // Volume = pi * r^2 * h / 1000
    volume = (Math.PI * Math.pow(r, 2) * h) / 1000;
  }

  volume = Math.round(volume);
  if (volume < 0) volume = 0;

  // Compute weight
  const weight = Math.round(volume * 1.02); // salt & decoration weight approximation

  // Compute turnover flow
  let turnoverMultiplier = 5;
  let filterMediaLiters = Math.round(volume * 0.05); // 5% of volume for media

  if (type === 'koi') {
    turnoverMultiplier = 8;
    filterMediaLiters = Math.round(volume * 0.10); // 10% of volume for Koi pond
  } else if (type === 'planted') {
    turnoverMultiplier = 4;
    filterMediaLiters = Math.round(volume * 0.04); // 4% of volume for planted tank
  }

  const flowRequired = Math.round(volume * turnoverMultiplier);

  // Update Stats UI
  document.getElementById('stat-volume').textContent = `${volume.toLocaleString('vi-VN')} Lít`;
  document.getElementById('stat-weight').textContent = `~${weight.toLocaleString('vi-VN')} kg`;
  document.getElementById('stat-flow').textContent = `${flowRequired.toLocaleString('vi-VN')} L/h`;
  document.getElementById('stat-media').textContent = `~${filterMediaLiters.toLocaleString('vi-VN')} Lít`;

  // Update advice text
  const adviceEl = document.getElementById('calc-advice');
  let adviceText = '';
  let recProducts = [];

  if (type === 'koi') {
    adviceText = `Hồ cá Koi sân vườn có tải trọng chất thải hữu cơ cực cao. Yêu cầu tuần hoàn tối thiểu ${turnoverMultiplier} lần thể tích hồ/giờ (${flowRequired.toLocaleString('vi-VN')} L/h). Cần bố trí hệ thống lọc lắng đa ngăn với lượng sứ thanh lớn và máy bơm công suất lớn để tạo luồng nước khỏe.`;
    recProducts = ['mayBom', 'suThanh'];
  } else if (type === 'planted') {
    adviceText = `Hồ thủy sinh trồng cây cảnh cần dòng chảy nhẹ nhàng để không làm trốc rễ cây, tuần hoàn ${turnoverMultiplier} lần/giờ (${flowRequired.toLocaleString('vi-VN')} L/h). Ưu tiên các loại lọc thùng ngoài êm ái, kết hợp vật liệu sinh học bền vững.`;
    recProducts = ['kaldnes', 'suThanh'];
  } else {
    adviceText = `Hồ nuôi cá cảnh thông thường yêu cầu tuần hoàn trung bình ${turnoverMultiplier} lần/giờ (${flowRequired.toLocaleString('vi-VN')} L/h). Bạn có thể kết hợp lọc vách, lọc chìm hoặc lọc thùng ngoài để đảm bảo tính thẩm mỹ cao.`;
    recProducts = ['mayBom', 'kaldnes'];
  }

  adviceEl.textContent = adviceText;

  // Recommended products
  const calcGrid = document.getElementById('calc-products-grid');
  calcGrid.innerHTML = recProducts.map(key => {
    const p = productsDb[key];
    return `
      <div class="col-sm-6">
        <div class="lab-prod-card">
          <img src="${p.image}" class="lab-prod-img" alt="${p.name}">
          <div class="lab-prod-info">
            <div class="lab-prod-title">${p.name}</div>
            <div class="lab-prod-price">${p.price}</div>
          </div>
          <button class="lab-prod-btn" onclick="addToCartFromLab('${key}')" type="button"><i class="bi bi-plus-lg"></i></button>
        </div>
      </div>
    `;
  }).join('');
};

// ==========================================
// 2D POND DESIGNER INTERACTIVE LOGIC
// ==========================================
let placedItems = [];
let itemCounter = 0;
let selectedItemId = null;

const itemMetadata = {
  'koi-std': { name: 'Koi Tiêu Chuẩn', icon: 'bi-fish', bioLoad: 250, cost: 150000 },
  'koi-bf': { name: 'Koi Bướm', icon: 'bi-fish-fill', bioLoad: 180, cost: 250000 },
  'koi-mini': { name: 'Koi Mini', icon: 'bi-water', bioLoad: 60, cost: 45000 },
  'filter': { name: 'Bộ Lọc Thùng', icon: 'bi-funnel', bioLoad: -800, cost: 1200000, productKey: 'suThanh' },
  'pump': { name: 'Máy Bơm Luồng', icon: 'bi-lightning-charge', bioLoad: 0, cost: 450000, productKey: 'mayBom' },
  'uv': { name: 'Đèn UV Diệt Tảo', icon: 'bi-brightness-high', bioLoad: 0, cost: 280000, productKey: 'multiClear' },
  'aerator': { name: 'Máy Sủi Khí Oxy', icon: 'bi-wind', bioLoad: -300, cost: 180000, productKey: 'multiDetox' },
  'rock': { name: 'Đá Xếp Cảnh Quan', icon: 'bi-gem', bioLoad: 0, cost: 85000 },
  'lily': { name: 'Hoa Súng Thủy Sinh', icon: 'bi-flower1', bioLoad: -50, cost: 50000 },
  'waterfall': { name: 'Hệ Thác Tràn', icon: 'bi-water', bioLoad: -200, cost: 650000 }
};

window.addDesignItem = function(type) {
  const meta = itemMetadata[type];
  if (!meta) return;

  const canvas = document.getElementById('designerCanvas');
  if (!canvas) return;

  itemCounter++;
  const itemId = `design-item-${itemCounter}`;
  
  // Create item element
  const itemEl = document.createElement('div');
  itemEl.id = itemId;
  itemEl.className = `placed-item ${type}`;
  itemEl.style.left = '150px';
  itemEl.style.top = '150px';
  itemEl.style.transform = 'rotate(0deg)';
  
  // Custom inner html with icon and floating controls
  itemEl.innerHTML = `
    <div class="placed-item-content">
      <div class="item-icon-wrap" title="${meta.name}">
        <i class="bi ${meta.icon}"></i>
      </div>
    </div>
    <div class="placed-item-controls">
      <button type="button" class="item-control-btn btn-rot" onclick="rotateDesignItem('${itemId}', event)" title="Xoay 90 độ"><i class="bi bi-arrow-clockwise"></i></button>
      <button type="button" class="item-control-btn btn-del" onclick="deleteDesignItem('${itemId}', event)" title="Xóa vật thể"><i class="bi bi-x-lg"></i></button>
    </div>
  `;

  canvas.appendChild(itemEl);

  const itemObj = {
    id: itemId,
    type: type,
    x: 150,
    y: 150,
    angle: 0
  };
  placedItems.push(itemObj);

  // Initialize event listeners
  initDesignItemEvents(itemEl, itemId);
  selectDesignItem(itemId);
  updateDesignMetrics();
};

function selectDesignItem(itemId) {
  selectedItemId = itemId;
  document.querySelectorAll('.placed-item').forEach(el => {
    el.classList.toggle('selected', el.id === itemId);
  });
}

// Clear selection when clicking on canvas background
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('designerCanvas');
  if (canvas) {
    canvas.addEventListener('click', (e) => {
      if (e.target === canvas || e.target.classList.contains('water-ripple-layer')) {
        selectedItemId = null;
        document.querySelectorAll('.placed-item').forEach(el => el.classList.remove('selected'));
      }
    });
  }
});

window.rotateDesignItem = function(itemId, event) {
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }
  const item = placedItems.find(it => it.id === itemId);
  const itemEl = document.getElementById(itemId);
  if (item && itemEl) {
    item.angle = (item.angle + 90) % 360;
    itemEl.style.transform = `rotate(${item.angle}deg)`;
  }
};

window.deleteDesignItem = function(itemId, event) {
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }
  const itemEl = document.getElementById(itemId);
  if (itemEl) itemEl.remove();

  placedItems = placedItems.filter(it => it.id !== itemId);
  if (selectedItemId === itemId) selectedItemId = null;
  updateDesignMetrics();
};

window.clearDesignCanvas = function() {
  placedItems.forEach(item => {
    const el = document.getElementById(item.id);
    if (el) el.remove();
  });
  placedItems = [];
  selectedItemId = null;
  updateDesignMetrics();
};

function initDesignItemEvents(itemEl, itemId) {
  const canvas = document.getElementById('designerCanvas');
  if (!canvas) return;

  // Mouse Dragging
  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  itemEl.addEventListener('mousedown', (e) => {
    if (e.target.closest('.placed-item-controls')) return; // ignore controls clicks
    isDragging = true;
    offsetX = e.clientX - itemEl.offsetLeft;
    offsetY = e.clientY - itemEl.offsetTop;
    selectDesignItem(itemId);
    e.preventDefault();
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    let newX = e.clientX - offsetX;
    let newY = e.clientY - offsetY;

    const canvasWidth = canvas.clientWidth;
    const canvasHeight = canvas.clientHeight;
    newX = Math.max(0, Math.min(canvasWidth - 48, newX));
    newY = Math.max(0, Math.min(canvasHeight - 48, newY));

    itemEl.style.left = newX + 'px';
    itemEl.style.top = newY + 'px';

    const item = placedItems.find(it => it.id === itemId);
    if (item) {
      item.x = newX;
      item.y = newY;
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Touch Dragging (Mobile-first synchronization)
  let startTouchX = 0;
  let startTouchY = 0;
  let startItemLeft = 0;
  let startItemTop = 0;

  itemEl.addEventListener('touchstart', (e) => {
    if (e.target.closest('.placed-item-controls')) return;
    const touch = e.touches[0];
    startTouchX = touch.clientX;
    startTouchY = touch.clientY;
    startItemLeft = parseInt(itemEl.style.left) || 0;
    startItemTop = parseInt(itemEl.style.top) || 0;
    selectDesignItem(itemId);
    e.preventDefault();
  }, { passive: false });

  itemEl.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    const dx = touch.clientX - startTouchX;
    const dy = touch.clientY - startTouchY;

    let newX = startItemLeft + dx;
    let newY = startItemTop + dy;

    const canvasWidth = canvas.clientWidth;
    const canvasHeight = canvas.clientHeight;
    newX = Math.max(0, Math.min(canvasWidth - 48, newX));
    newY = Math.max(0, Math.min(canvasHeight - 48, newY));

    itemEl.style.left = newX + 'px';
    itemEl.style.top = newY + 'px';

    const item = placedItems.find(it => it.id === itemId);
    if (item) {
      item.x = newX;
      item.y = newY;
    }
    e.preventDefault();
  }, { passive: false });
}

window.updateDesignMetrics = function() {
  const depth = parseFloat(document.getElementById('design-depth').value) || 0;
  const length = parseFloat(document.getElementById('design-length').value) || 0;
  const width = parseFloat(document.getElementById('design-width').value) || 0;

  // Real-time volume calculation
  const volume = Math.round((length * width * depth) / 1000); // L
  document.getElementById('design-vol').textContent = `${volume.toLocaleString('vi-VN')} Lít (${(volume/1000).toFixed(1)} m³)`;

  // Item counts
  let fishCount = 0;
  let decoCount = 0;
  let totalBioLoad = 0;
  let totalCost = 0;

  let hasPump = false;
  let hasFilter = false;
  let hasUV = false;
  let hasAerator = false;

  placedItems.forEach(item => {
    const meta = itemMetadata[item.type];
    if (!meta) return;

    totalCost += meta.cost;

    if (item.type.startsWith('koi-')) {
      fishCount++;
      totalBioLoad += meta.bioLoad;
    } else {
      decoCount++;
      totalBioLoad += meta.bioLoad; // filters/lilies reduce bioload (negative value)
      
      if (item.type === 'pump') hasPump = true;
      if (item.type === 'filter') hasFilter = true;
      if (item.type === 'uv') hasUV = true;
      if (item.type === 'aerator') hasAerator = true;
    }
  });

  document.getElementById('design-fish-count').textContent = `${fishCount} con`;
  document.getElementById('design-deco-count').textContent = `${decoCount} vật thể`;

  // Bio-load evaluation
  const statusBox = document.getElementById('designStatusBox');
  const statusTitle = document.getElementById('designStatusTitle');
  const statusDesc = document.getElementById('designStatusDesc');

  if (fishCount === 0) {
    statusTitle.textContent = "Chưa thả cá";
    statusTitle.style.color = "#2e7d32";
    statusBox.style.background = "#e8f7ec";
    statusBox.style.borderColor = "#d1eed8";
    statusDesc.textContent = "Hãy thêm cá Koi và thiết bị lọc vào hồ để kiểm tra mức độ cân bằng vi sinh.";
  } else {
    // Bio-load factor relative to volume: bioload points per 1000L
    const loadFactor = (totalBioLoad / volume) * 1000;
    
    if (loadFactor <= 20) {
      statusTitle.textContent = "Hệ sinh thái An toàn";
      statusTitle.style.color = "#2e7d32";
      statusBox.style.background = "#e8f7ec";
      statusBox.style.borderColor = "#d1eed8";
      statusDesc.textContent = `Mật độ cá lý tưởng (${loadFactor.toFixed(1)} điểm/1m³). Hệ vi sinh tự nhiên đủ khả năng làm sạch.`;
    } else if (loadFactor <= 60) {
      statusTitle.textContent = "Mật độ cao (Cảnh báo)";
      statusTitle.style.color = "#ff9800";
      statusBox.style.background = "#fff8e1";
      statusBox.style.borderColor = "#ffe082";
      statusDesc.textContent = `Mật độ khá dày (${loadFactor.toFixed(1)} điểm/1m³). Cần bổ sung máy bơm đẩy dòng và vật liệu lọc sứ sinh học để duy trì nước trong sạch.`;
    } else {
      statusTitle.textContent = "Quá tải sinh học (Nguy hiểm)";
      statusTitle.style.color = "#f44336";
      statusBox.style.background = "#ffebee";
      statusBox.style.borderColor = "#ffcdd2";
      statusDesc.textContent = `Hồ quá tải nặng (${loadFactor.toFixed(1)} điểm/1m³)! Cá có nguy cơ thiếu oxy, nước dễ đục vàng. Cần giảm bớt cá hoặc nâng cấp bộ lọc thùng/sủi khí ngay.`;
    }
  }

  // Equipment recommendations matching actual products
  const recsList = document.getElementById('designRecsList');
  let recProducts = [];

  if (fishCount > 0) {
    if (!hasFilter) recProducts.push('suThanh');
    if (!hasPump) recProducts.push('mayBom');
    if (fishCount > 5 && !hasUV) recProducts.push('multiClear');
    if (fishCount > 3 && !hasAerator) recProducts.push('multiDetox');
    recProducts.push('camSakura');
  }

  if (recProducts.length === 0) {
    recsList.innerHTML = '<p class="text-muted text-center py-4" style="font-size:0.8rem;">Chưa có thiết bị nào được đề xuất. Hãy đặt cá Koi hoặc máy bơm để bắt đầu.</p>';
  } else {
    recsList.innerHTML = recProducts.map(key => {
      const p = productsDb[key];
      return `
        <div class="design-recs-item">
          <img src="${p.image}" alt="${p.name}">
          <div class="design-recs-item-info">
            <div class="design-recs-item-title">${p.name}</div>
            <div class="design-recs-item-price">${p.price}</div>
          </div>
          <button type="button" class="design-recs-item-btn" onclick="addToCartFromLab('${key}')" title="Thêm vào giỏ hàng"><i class="bi bi-plus-lg"></i></button>
        </div>
      `;
    }).join('');
  }
};

window.requestDesignQuote = function() {
  const depth = document.getElementById('design-depth').value;
  const length = document.getElementById('design-length').value;
  const width = document.getElementById('design-width').value;
  const vol = document.getElementById('design-vol').textContent;

  let fishCount = 0;
  let eqCount = 0;
  placedItems.forEach(it => {
    if (it.type.startsWith('koi-')) fishCount++;
    else eqCount++;
  });

  if (placedItems.length === 0) {
    alert("Vui lòng thả cá hoặc trang thiết bị lên bản vẽ trước khi nhận báo giá.");
    return;
  }

  const msg = `✓ Aqua Care đã tiếp nhận bản thiết kế hồ Koi của bạn!\nKích thước hồ: ${length}x${width}x${depth}cm (${vol})\nSố lượng cá: ${fishCount} con\nThiết bị & trang trí: ${eqCount} vật thể\nKỹ sư Aqua Care sẽ liên hệ tư vấn và gửi báo giá chi tiết qua Hotline của bạn sau 5 phút!`;
  alert(msg);
};

