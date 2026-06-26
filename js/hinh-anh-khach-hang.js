
// Navbar + back to top
    const nav = document.getElementById('mainNav');
    const btt = document.getElementById('backToTop');
    if (nav && btt) {
      window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 40);
        btt.classList.toggle('visible', window.scrollY > 400);
      }, { passive: true });
      btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    // Scroll reveal
    const cards = document.querySelectorAll('.gal-cust-card');
    const io = new IntersectionObserver(entries => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('is-visible'), i * 80);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    cards.forEach(c => io.observe(c));


