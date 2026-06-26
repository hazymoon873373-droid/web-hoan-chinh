
// Khoi chay cac hieu ung lien he
    var contactRules = {
      name: /^[\p{L}\p{M}\s'.-]{2,60}$/u,
      phone: /^(0|\+84)\d{9,10}$/,
      email: /^[A-Za-z0-9._%+-]+@gmail\.com$/i,
      message: /^[\p{L}\p{M}\p{N}\s,.;:!?'"()\/+\-–%#&\n]{10,500}$/u
    };

    function normalizePhone(value){
      return value.replace(/[\s.-]/g, '');
    }

    function setFieldError(input, errorId, message){
      var error = document.getElementById(errorId);
      input.classList.toggle('is-invalid', Boolean(message));
      input.classList.toggle('is-valid', !message && Boolean(input.value.trim()));
      if(error){
        error.textContent = message || '';
        error.classList.toggle('show', Boolean(message));
      }
    }

    function setGroupError(groupId, errorId, message){
      var group = document.getElementById(groupId);
      var error = document.getElementById(errorId);
      if(group) group.classList.toggle('is-invalid', Boolean(message));
      if(error){
        error.textContent = message || '';
        error.classList.toggle('show', Boolean(message));
      }
    }

    function validateContactForm(){
      var ok = true;
      var name = document.getElementById('fName');
      var phone = document.getElementById('fPhone');
      var email = document.getElementById('fEmail');
      var message = document.getElementById('fMessage');
      var interest = document.querySelector('input[name="interest"]:checked');
      var phoneValue = normalizePhone(phone.value.trim());
      var emailValue = email.value.trim();
      var messageValue = message.value.trim();

      if(!contactRules.name.test(name.value.trim())){
        ok = false;
        setFieldError(name, 'fNameError', 'Họ tên chỉ gồm chữ cái, khoảng trắng, dấu nháy hoặc dấu gạch; độ dài 2-60 ký tự.');
      } else setFieldError(name, 'fNameError', '');

      if(!contactRules.phone.test(phoneValue)){
        ok = false;
        setFieldError(phone, 'fPhoneError', 'Số điện thoại cần bắt đầu bằng 0 hoặc +84 và có 10-11 chữ số.');
      } else {
        phone.value = phoneValue;
        setFieldError(phone, 'fPhoneError', '');
      }

      if(emailValue && !contactRules.email.test(emailValue)){
        ok = false;
        setFieldError(email, 'fEmailError', 'Email cần đúng định dạng, ví dụ: ten@gmail.com.');
      } else setFieldError(email, 'fEmailError', '');

      if(messageValue && !contactRules.message.test(messageValue)){
        ok = false;
        setFieldError(message, 'fMessageError', 'Mô tả nên từ 10-500 ký tự và không chứa ký tự lạ.');
      } else setFieldError(message, 'fMessageError', '');

      if(!interest){
        ok = false;
        setGroupError('fInterestGroup', 'fInterestError', 'Vui lòng chọn một nhu cầu tư vấn.');
      } else setGroupError('fInterestGroup', 'fInterestError', '');

      var formError = document.getElementById('contactFormError');
      formError.textContent = ok ? '' : 'Vui lòng kiểm tra lại các trường được đánh dấu đỏ.';
      formError.classList.toggle('show', !ok);
      return ok;
    }

    window.submitForm = function(event){
      if(event) event.preventDefault();
      if(!validateContactForm()) return;
      document.getElementById('contactForm').style.display='none';
      document.getElementById('formSuccess').style.display='block';
    };

    document.getElementById('contactForm').addEventListener('submit', window.submitForm);
    ['fName','fPhone','fEmail','fMessage'].forEach(function(id){
      document.getElementById(id).addEventListener('input', function(){
        document.getElementById('contactFormError').classList.remove('show');
        if(this.classList.contains('is-invalid')) validateContactForm();
      });
    });
    document.querySelectorAll('input[name="interest"]').forEach(function(input){
      input.addEventListener('change', function(){ setGroupError('fInterestGroup', 'fInterestError', ''); });
    });

    window.resetForm = function(){
      document.getElementById('contactForm').reset();
      document.querySelectorAll('#contactForm .is-invalid,#contactForm .is-valid').forEach(function(el){ el.classList.remove('is-invalid','is-valid'); });
      document.querySelectorAll('#contactForm .field-error,#contactForm .form-status-message').forEach(function(el){ el.textContent=''; el.classList.remove('show'); });
      setGroupError('fInterestGroup', 'fInterestError', '');
      document.getElementById('formSuccess').style.display='none';
      document.getElementById('contactForm').style.display='block';
    };
    window.toggleFaq = function(el){
      var answer = el.nextElementSibling;
      var isOpen = answer.classList.contains('open');
      document.querySelectorAll('.faq-answer').forEach(function(a){ a.classList.remove('open'); });
      document.querySelectorAll('.faq-question').forEach(function(q){ q.classList.remove('open'); });
      if(!isOpen){ answer.classList.add('open'); el.classList.add('open'); }
    };

    // ==========================================
    // DẤU ẤN 5: BỘ ĐẶT LỊCH DỊCH VỤ & TÍNH PHÍ NƯỚC
    // ==========================================
    var isPromoApplied = false;

    window.calculateBookingFee = function() {
      var svcSelect = document.getElementById('bookService');
      if (!svcSelect) return;
      var selectedOpt = svcSelect.options[svcSelect.selectedIndex];
      var baseFee = parseInt(selectedOpt.getAttribute('data-fee')) || 0;
      
      document.getElementById('bookBaseFee').textContent = baseFee.toLocaleString('vi-VN') + 'đ';
      
      var discount = 0;
      if (isPromoApplied) {
        discount = Math.round(baseFee * 0.15); // 15% discount
      }
      document.getElementById('bookDiscountFee').textContent = '-' + discount.toLocaleString('vi-VN') + 'đ';
      
      var totalFee = baseFee - discount;
      document.getElementById('bookTotalFee').textContent = totalFee.toLocaleString('vi-VN') + 'đ';
    };

    window.applyPromoCode = function() {
      var code = document.getElementById('bookPromo').value.trim().toUpperCase();
      var promoMsg = document.getElementById('promoMsg');
      
      if (code === 'NEMO2026') {
        isPromoApplied = true;
        promoMsg.textContent = '✓ Áp dụng mã NEMO2026 thành công! Giảm giá 15% dịch vụ.';
        promoMsg.style.color = '#2e7d32';
      } else if (code === '') {
        isPromoApplied = false;
        promoMsg.textContent = '';
      } else {
        isPromoApplied = false;
        promoMsg.textContent = '✗ Mã giảm giá không tồn tại hoặc đã hết hạn.';
        promoMsg.style.color = '#c62828';
      }
      calculateBookingFee();
    };

    window.confirmBooking = function() {
      var dateVal = document.getElementById('bookDate').value;
      if (!dateVal) {
        alert('Vui lòng chọn ngày hẹn dịch vụ!');
        return;
      }
      
      var randomCode = 'AQ-' + Math.random().toString(36).substring(2, 8).toUpperCase();
      document.getElementById('bookingCode').textContent = randomCode;
      
      var successBox = document.getElementById('booking-success-box');
      successBox.classList.remove('d-none');
      
      setTimeout(function() {
        successBox.style.transform = 'scale(1.0)';
      }, 50);
      
      alert('✓ Đã đặt lịch thành công! Mã cuộc hẹn của bạn là: ' + randomCode);
    };

    window.copyBookingCode = function() {
      var code = document.getElementById('bookingCode').textContent;
      navigator.clipboard.writeText(code).then(function() {
        alert('✓ Đã sao chép mã đặt lịch ' + code + ' vào khay nhớ tạm!');
      }).catch(function() {
        alert('Không thể tự động sao chép. Vui lòng chọn và sao chép thủ công.');
      });
    };

    // Read query parameters for estimator redirect
    document.addEventListener('DOMContentLoaded', function() {
      var tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      var tomorrowStr = tomorrow.toISOString().split('T')[0];
      var dateInput = document.getElementById('bookDate');
      if (dateInput) {
        dateInput.value = tomorrowStr;
        dateInput.min = tomorrowStr;
      }

      var urlParams = new URLSearchParams(window.location.search);
      var area = urlParams.get('area');
      var depth = urlParams.get('depth');
      var style = urlParams.get('style');
      
      if (area && depth && style) {
        var koiRadio = document.querySelector('input[name="interest"][value="ho-ca-koi"]');
        if (koiRadio) koiRadio.checked = true;

        var fArea = document.getElementById('fArea');
        if (fArea) {
          var vol = parseFloat(area) * parseFloat(depth);
          if (vol < 0.5) fArea.value = 'Nhỏ (< 500L)';
          else if (vol < 3) fArea.value = 'Vừa (500L – 3.000L)';
          else if (vol < 10) fArea.value = 'Lớn (3.000L – 10.000L)';
          else fArea.value = 'Rất lớn (> 10.000L)';
        }

        var fMsg = document.getElementById('fMessage');
        if (fMsg) {
          var styleLabel = style === 'zen' ? 'Zen Nhật Bản' : (style === 'modern' ? 'Hiện đại' : 'Thác đá tự nhiên');
          fMsg.value = 'Tôi muốn thi công hồ cá Koi. Thông số đã tính từ bảng dự toán: Diện tích: ' + area + ' m², Độ sâu: ' + depth + ' m, Phong cách: ' + styleLabel + '.';
        }

        var bookSvc = document.getElementById('bookService');
        if (bookSvc) {
          bookSvc.value = 'khao-sat';
          calculateBookingFee();
        }

        var bookingSec = document.getElementById('dat-lich-dich-vu');
        if (bookingSec) {
          setTimeout(function() {
            bookingSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 600);
        }
      }
    });



