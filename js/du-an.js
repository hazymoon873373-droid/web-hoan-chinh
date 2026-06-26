
// Navbar scroll
    const nav = document.getElementById('mainNav');
    const btt = document.getElementById('backToTop');
    if (nav && btt) {
      window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 40);
        btt.classList.toggle('visible', window.scrollY > 400);
      }, { passive: true });
      btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    // Scroll reveal cho cards
    const cards = document.querySelectorAll('.da-card, .da-stat-item');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); observer.unobserve(e.target); } });
    }, { threshold: 0.12 });
    cards.forEach(c => { c.setAttribute('data-reveal', ''); observer.observe(c); });

    // Nút điều hướng prev/next (chuyển trang dự án khác)
    document.getElementById('prevBtn').addEventListener('click', () => {
      // TODO: thêm link trang dự án trước
      // window.location.href = 'du-an-truoc.html';
      alert('Chưa có trang trước — điền link tại đây!');
    });
    document.getElementById('nextBtn').addEventListener('click', () => {
      // TODO: thêm link trang dự án tiếp theo
      // window.location.href = 'du-an-tiep.html';
      alert('Chưa có trang tiếp — điền link tại đây!');
    });

    // Submit form tư vấn
    const tuvanRules = {
      name: /^[\p{L}\p{M}\s'.-]{2,60}$/u,
      phone: /^(0|\+84)\d{9,10}$/,
      email: /^[A-Za-z0-9._%+-]+@gmail\.com$/i,
      note: /^[\p{L}\p{M}\p{N}\s,.;:!?'"()\/+\-–%#&\n]{10,500}$/u
    };

    function normalizeTuvanPhone(value) {
      return value.replace(/[\s.-]/g, '');
    }

    function setTuvanFieldState(input, errorId, message) {
      const error = document.getElementById(errorId);
      input.classList.toggle('is-invalid', Boolean(message));
      input.classList.toggle('is-valid', !message && Boolean(input.value.trim()));
      if (error) {
        error.textContent = message || '';
        error.classList.toggle('show', Boolean(message));
      }
    }

    function validateTuvanForm() {
      let ok = true;
      const name = document.getElementById('tv-name');
      const phone = document.getElementById('tv-phone');
      const email = document.getElementById('tv-email');
      const note = document.getElementById('tv-note');
      const phoneValue = normalizeTuvanPhone(phone.value.trim());
      const emailValue = email.value.trim();
      const noteValue = note.value.trim();

      if (!tuvanRules.name.test(name.value.trim())) {
        ok = false;
        setTuvanFieldState(name, 'tv-name-error', 'Họ tên chỉ gồm chữ cái, khoảng trắng, dấu nháy hoặc dấu gạch; độ dài 2-60 ký tự.');
      } else setTuvanFieldState(name, 'tv-name-error', '');

      if (!tuvanRules.phone.test(phoneValue)) {
        ok = false;
        setTuvanFieldState(phone, 'tv-phone-error', 'Số điện thoại cần bắt đầu bằng 0 hoặc +84 và có 10-11 chữ số.');
      } else {
        phone.value = phoneValue;
        setTuvanFieldState(phone, 'tv-phone-error', '');
      }

      if (emailValue && !tuvanRules.email.test(emailValue)) {
        ok = false;
        setTuvanFieldState(email, 'tv-email-error', 'Email cần đúng định dạng @gmail.com.');
      } else setTuvanFieldState(email, 'tv-email-error', '');

      if (noteValue && !tuvanRules.note.test(noteValue)) {
        ok = false;
        setTuvanFieldState(note, 'tv-note-error', 'Mô tả nên từ 10-500 ký tự và không chứa ký tự lạ.');
      } else setTuvanFieldState(note, 'tv-note-error', '');

      const formError = document.getElementById('tv-form-error');
      formError.textContent = ok ? '' : 'Vui lòng kiểm tra lại thông tin được đánh dấu đỏ.';
      formError.classList.toggle('show', !ok);
      return ok;
    }

    ['tv-name','tv-phone','tv-email','tv-note'].forEach(id => {
      const input = document.getElementById(id);
      if (!input) return;
      input.addEventListener('input', () => {
        document.getElementById('tv-form-error').classList.remove('show');
        if (input.classList.contains('is-invalid')) validateTuvanForm();
      });
    });

    function submitTuvan() {
      if (!validateTuvanForm()) return;
      // TODO: gửi dữ liệu form về server / email
      bootstrap.Modal.getInstance(document.getElementById('tuvanModal')).hide();
      const toast = new bootstrap.Toast(document.getElementById('successToast'), { delay: 5000 });
      toast.show();
    }


