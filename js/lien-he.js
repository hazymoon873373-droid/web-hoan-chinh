
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



