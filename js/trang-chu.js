
// Khoi chay cac hieu ung trang chu
        var intro = document.getElementById('pageIntro');
    if (intro) {
      setTimeout(function () { intro.classList.add('intro-hide'); }, 2200);
      setTimeout(function () { intro.style.display = 'none'; }, 2900);
    }

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

        var marquee = document.getElementById('catMarquee');
    if (marquee) {
      marquee.addEventListener('mouseenter', function () { marquee.style.animationPlayState = 'paused'; });
      marquee.addEventListener('mouseleave', function () { marquee.style.animationPlayState = 'running'; });
    }

        var revealEls = document.querySelectorAll('[data-reveal]');
    if (!revealEls.length) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var delay = el.getAttribute('data-reveal-delay') || 0;
          setTimeout(function () { el.classList.add('rv-visible'); }, parseInt(delay));
          io.unobserve(el);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });



